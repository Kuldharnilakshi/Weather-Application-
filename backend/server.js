require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get("/api/ping", (req, res) => {
  res.json({ status: "ok" });
});

// Weather endpoint
app.get("/api/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: "City query parameter is required" });
  }

  try {
    // ✅ FIXED: correct env variable name
    const apiKey = process.env.OPENWEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&units=metric&appid=${apiKey}`;

    const response = await axios.get(url);
    const data = response.data;

    // ✅ Send all required fields
    res.json({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      wind: data.wind.speed,              // ✅ added
      condition: data.weather[0].description,
      icon: data.weather[0].icon,
    });
  } catch (err) {
    if (err.response && err.response.status === 404) {
      return res.status(404).json({ error: "City not found" });
    }

    console.error("Weather API error:", err.message);
    res.status(500).json({ error: "Unable to fetch weather data" });
  }
});

// Production frontend serve (optional)
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
