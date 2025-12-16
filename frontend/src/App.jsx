import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");

    try {
      const res = await axios.get(
  `https://weather-application-backend-i56w.onrender.com/api/weather?city=${city}`
);


      
      setWeather(res.data);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // 🌤 Dynamic background based on weather
  const getBackgroundClass = () => {
    if (!weather) return "default-bg";
    if (weather.condition.includes("rain")) return "rainy-bg";
    if (weather.condition.includes("cloud")) return "cloudy-bg";
    if (weather.condition.includes("clear")) return "sunny-bg";
    return "default-bg";
  };

  return (
    <div className={`app ${getBackgroundClass()}`}>
      <div className="card">
        <h1 className="title">Weather Forecast</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && getWeather()}
          />
          <button onClick={getWeather} disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="result fade-in">
            <h2>
              {weather.city}, {weather.country}
            </h2>

            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt="weather"
            />

            <h1 className="temp">{weather.temperature}°C</h1>
            <p className="condition">{weather.condition}</p>

            <div className="details">
              <div>
                <span>Humidity</span>
                <p>{weather.humidity}%</p>
              </div>
              <div>
                <span>Wind</span>
                <p>{weather.wind} km/h</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
