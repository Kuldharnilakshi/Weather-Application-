# 🌤️ Weather Forecast App

A modern **full-stack weather application** that allows users to search and view real-time weather information for any city in the world. The app is built with **React (Vite)** on the frontend and **Node.js + Express** on the backend, using the **OpenWeather API** for live weather data.

This project focuses on **clean architecture**, **professional UI design**, and **real-world API handling**, making it highly suitable for portfolios and resumes.

---

## ✨ Features

* 🔍 Search weather by city name
* 🌈 Dynamic background based on weather conditions (Sunny, Cloudy, Rainy)
* 💎 Modern glassmorphism UI design
* ✨ Smooth fade-in animations
* 🌡️ Displays temperature, humidity, wind speed, and weather condition
* 🔐 Secure API key handling using environment variables
* ⚡ Fast and lightweight frontend using Vite

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* CSS (Glassmorphism, animations)
* Axios

### Backend

* Node.js
* Express.js
* Axios
* dotenv
* CORS

### API

* OpenWeather API


## ⚙️ How It Works

### 1️⃣ User Interaction (Frontend)

* User enters a city name in the search input
* Clicks the **Search** button or presses Enter
* React sends a request to the backend API

### 2️⃣ Backend Processing

* Express server receives the request at:

  ```
  GET /api/weather?city=CityName
  ```
* Backend securely attaches the API key
* Sends request to OpenWeather API
* Extracts only required data
* Sends a clean JSON response back to frontend

### 3️⃣ UI Update

* Weather data is displayed
* Background changes based on weather condition
* Weather card animates smoothly into view

---

## 🧠 What I Learned

* Building and connecting frontend & backend
* Handling third-party APIs securely
* Debugging real-world issues (401 Unauthorized)
* Environment variable management
* Designing professional UI with CSS

---

## 👩‍💻 Author

**Nilakshi kuldhar**
Engineering Student | Full Stack Developer

---
