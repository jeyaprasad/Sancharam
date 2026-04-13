const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4000);
const dbPath = path.join(__dirname, "db", "users.json");

if (!process.env.JWT_SECRET) {
    // Provide a fallback secret for easy local testing so it doesn't crash if .env is missing
    process.env.JWT_SECRET = "fallback_secret_key_for_simple_file_backend_sancharam";
}

// Ensure db directory and file exist
if (!fs.existsSync(path.join(__dirname, "db"))) {
    fs.mkdirSync(path.join(__dirname, "db"));
}
if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify([], null, 2));
}

const readUsers = () => JSON.parse(fs.readFileSync(dbPath, "utf-8"));
const writeUsers = (users) => fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));

function generateId() {
    return Math.random().toString(36).substring(2, 10);
}

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
    return res.status(200).json({ ok: true, message: "API and file database are reachable" });
});

app.post("/api/auth/register", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Name, email, and password are required" });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    try {
        const users = readUsers();
        const existingUser = users.find(u => u.email === email.toLowerCase());
        
        if (existingUser) {
            return res.status(409).json({ message: "Email is already registered" });
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = {
            id: generateId(),
            full_name: name.trim(),
            email: email.toLowerCase(),
            password_hash: passwordHash
        };

        users.push(newUser);
        writeUsers(users);

        return res.status(201).json({ message: "Account created successfully" });
    } catch (error) {
        console.error("Register error:", error);
        return res.status(500).json({ message: "Could not register user" });
    }
});

app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const users = readUsers();
        const user = users.find(u => u.email === email.toLowerCase());

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isValidPassword = await bcrypt.compare(password, user.password_hash);

        if (!isValidPassword) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { sub: user.id, email: user.email, name: user.full_name },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                name: user.full_name,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Could not complete login" });
    }
});

app.listen(port, () => {
    console.log(`Sancharam auth API running at http://localhost:${port}`);
});
