<div align="center">

  <img src="assets/logos/logo-transparent.png" alt="Sancharam Logo" width="160" />

  # Sancharam (சஞ்சாரம்)
  ### Smart Travel Companion & Cultural Discovery Platform for Tamil Nadu

  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](#)
  [![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)](#)

  <p align="center">
    A modern web companion designed to celebrate Tamil Nadu’s living heritage, temple architecture, diverse landscapes, and smart travel essentials.
  </p>

</div>

---

## 📌 Overview

**Sancharam** is an interactive, responsive travel application crafted for travelers exploring the rich culture and geography of Tamil Nadu. It seamlessly integrates destination exploration and itinerary planning with authentic historical storytelling and essential traveler utility tools.

---

## ✨ Key Features

### 🏛️ Tamil Classical Heritage & History
- **Muvendhar Dynasties**: Deep dive into the Imperial Cholas, Ancient Pandyas, and Mountain Cheras featuring authentic royal crests, architectural marvels (Brihadisvara Temple, Kallanai, Meenakshi Amman Kovil), and monarch spotlights.
- **Sangam 5 Landscapes (ஐந்திணை)**: Visual representation of classical eco-poetic regions—*Kurinji* (Mountains), *Mullai* (Forests), *Marutham* (Paddy Plains), *Neidhal* (Coastal Seashore), and *Paalai* (Arid Lands).
- **Tamil Perumai Audio Experience**: Text-to-speech audio narration in Tamil celebrating timeless cultural pride.
- **Eelam Tamil Heritage**: Historical timeline spanning Sangam antiquity, the Jaffna Kingdom, and modern resilience.

### 🧭 Travel Discovery & AI Planning
- **Curated Destinations**: Interactive discovery across 38 districts including Nilgiris, Madurai, Thanjavur, Chettinad, and Rameshwaram.
- **AI Itinerary Assistant**: Personalized day-wise travel plans based on duration, traveler preference, and interest.
- **Explore & Bookings**: Integrated tour selection, filtering, and booking reservation interface.

### 🧰 Traveler Utility Suite
- **Transit & Scenic Routes**: Route mapping, mountain passes, coastal drives, and transit recommendations.
- **Interactive Packing Checklist**: Customizable packing list categorized by temple darshan, hill station treks, and monsoon travel.
- **Budget & Expense Logger**: Travel cost tracking, currency converter, and group bill splitting with one-click export.
- **Safety & Emergency SOS**: Instant access to 24/7 tourist helplines, police, ambulance, women safety numbers, and nearby hospital directories.
- **Secure Payment Gateway**: Multi-method simulated checkout supporting UPI, Cards, and Net Banking.

---

## 🛠️ Tech Stack

- **Frontend**: Semantic HTML5, Vanilla Modern CSS3 (Custom Design System with CSS variables, Flexbox & Grid), Vanilla ES6+ JavaScript.
- **Styling**: `sancharam-theme.css` unified design system, glassmorphism UI, mobile-responsive layout.
- **Icons & Typography**: Font Awesome 6, Plus Jakarta Sans, Playfair Display.
- **Backend / Storage**: Python local development server, SQLite (`backend/credentials.sqlite`).

---

## 📁 Project Structure

```text
Sancharam/
├── home.html                       # Primary travel companion homepage
├── index.html                      # Entry splash & video landing page
├── .env                            # Environment configuration
├── assets/
│   ├── css/
│   │   ├── sancharam-theme.css     # Unified master stylesheet
│   │   ├── styleindex.css          # Splash page stylesheet
│   │   └── stylelogin.css          # Authentication stylesheet
│   ├── js/
│   │   ├── sancharam-theme.js      # Unified master application script
│   │   ├── scriptindex.js          # Splash page script
│   │   └── scriptlogin.js          # Authentication script
│   ├── images/                     # Destination and landscape photography
│   │   ├── heritage/               # Classical dynasty emblems & monuments
│   │   └── archive/                # Preserved historical media assets
│   ├── logos/                      # Sancharam branding assets
│   └── videos/                     # Intro animation media
├── backend/
│   ├── credentials.sqlite          # SQLite credentials storage
│   └── init_db.py                  # Database initialization script
└── pages/
    ├── bookings.html               # Trip booking & reservation
    ├── contact.html                # Support and feedback form
    ├── explore.html                # Destination discovery directory
    ├── features.html               # Feature catalog overview
    ├── login.html                  # User login & registration
    ├── profile.html                # User dashboard & saved trips
    └── features/
        ├── AI itinenary.html       # AI-powered itinerary generator
        ├── checklist.html          # Interactive travel packing list
        ├── expenses.html           # Travel budget & bill splitter
        ├── heritage.html           # Classical Tamil history & 5 Landscapes
        ├── payment.html            # Checkout & payment processing
        ├── routing.html            # Scenic routing & transit guide
        ├── safety.html             # Safety guidelines & tips
        └── sos.html                # Emergency contacts & SOS hub
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.8+ installed on your system.
- Modern web browser (Chrome, Edge, Firefox, Safari).

### Quick Start
1. **Clone the repository**:
   ```bash
   git clone https://github.com/jeyaprasad/Sancharam.git
   cd Sancharam
   ```

2. **Start the local server**:
   ```bash
   python -m http.server 8000
   ```

3. **Open in browser**:
   Navigate to `http://localhost:8000` or `http://localhost:8000/home.html`.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
