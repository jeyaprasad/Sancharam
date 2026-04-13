# Sancharam Auth Backend (PostgreSQL)

## 1) Install dependencies

```bash
npm install
```

## 2) Configure environment

Copy `.env.example` to `.env` and update values:

```env
PORT=4000
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/sancharam_db
JWT_SECRET=replace-with-a-long-random-secret
```

## 3) Create database table

Run this SQL in your PostgreSQL database:

```sql
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(120) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
```

You can also run the SQL from `db/schema.sql`.

## 4) Start server

```bash
npm run dev
```

Server starts at `http://localhost:4000`.

## API Endpoints

- `POST /api/auth/register`
  - body: `{ "name": "Alex", "email": "alex@mail.com", "password": "secret123" }`
- `POST /api/auth/login`
  - body: `{ "email": "alex@mail.com", "password": "secret123" }`
- `GET /api/health`
