import { useState, useEffect } from 'react';
import './Weather.css';

export default function Weather() {
  const [city, setCity] = useState('predeal');
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const appid = '6da5dcbf6b42c5bead5a34db18af474a';
  const [maxCards, setMaxCards] = useState(window.innerWidth <= 900 ? 3 : 5);

  const getWeatherForecast = async (cityName) => {
    try {
      if (!cityName.trim()) {
        throw new Error('empty city');
      }
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appid}&units=metric`
      );

      if (!res.ok) {
        throw new Error('error');
      }
      const data = await res.json();
      const dailyWeatherData = data.list.filter(
        (item, index) => index % 8 === 0
      );

      setWeatherData(dailyWeatherData.slice(0, maxCards));
      setError(null);
    } catch (error) {
      setError(error.message);
      if (error.message === 'empty city') {
        alert('Introdu un nume de oraș înainte de a căuta vremea.');
      } else {
        alert('Introdu un nume valid de oraș');
      }
      setCity('predeal');
    }
  };

  useEffect(() => {
    getWeatherForecast(city);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [maxCards]);
  const handleResize = () => {
    const newMaxCards = window.innerWidth <= 900 ? 3 : 5;
    if (newMaxCards !== maxCards) {
      setMaxCards(newMaxCards);
    }
  };

  const handleSearch = () => {
    getWeatherForecast(city);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getWeatherForecast(city);
    }
  };

  const handleInput = () => {
    setCity('');
  };

  return (
    <div className="nav-header">
      <iframe
        className="map"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?q=predeal%2C%20Strada%20plaiesilor%20Nr.%2043&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
        title="Predeal, Str Plaiesilor nr 43"
        aria-label="Predeal, Str Plaiesilor nr 43"
      ></iframe>

      <div className="wheader">
        <div className="wheader-head">
          <div>
            <input
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              onKeyDown={handleKeyDown}
              onClick={handleInput}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <h2>City: {city.slice(0, 40).toUpperCase()}</h2>
        </div>
        <div className="weather-cards">
          {weatherData.map((dayData, index) => (
            <WeatherCard key={index} data={dayData} city={city} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WeatherCard({ data }) {
  const { dt, main, weather, wind, pop } = data;
  const date = new Date(dt * 1000);
  const weekday = date.toLocaleDateString('ro-RO', { weekday: 'long' });
  const shortMonthNames = [
    'ian',
    'feb',
    'mar',
    'apr',
    'mai',
    'iun',
    'iul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ];
  const formattedDate = `${date.getDate()} ${
    shortMonthNames[date.getMonth()]
  } ${date.getFullYear()}`;
  const icon = weather[0].icon;
  const temperature = Math.round(main.temp);
  const rainProbability = Math.round(pop * 100);
  const windSpeed = Math.round(wind.speed);

  return (
    <div className="weather-card">
      <h3>{weekday.toLocaleUpperCase()}</h3>
      <h4>{formattedDate}</h4>
      <img
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt="Weather sky"
      />
      <h4>Temp: {temperature}°C</h4>
      <h4>Averse: {rainProbability}%</h4>
      <h4>Vant: {windSpeed} km/h</h4>
    </div>
  );
}
