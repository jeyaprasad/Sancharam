import sqlite3
import os

db_path = os.path.join(os.path.dirname(__file__), 'credentials.sqlite')

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Create table
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
''')

# Insert demo user
try:
    cursor.execute('''
    INSERT INTO users (email, password)
    VALUES (?, ?)
    ''', ('demo@sancharam.com', 'demo123'))
    print("Demo user created successfully.")
except sqlite3.IntegrityError:
    print("Demo user already exists.")

conn.commit()
conn.close()

print(f"Database initialized at: {db_path}")
