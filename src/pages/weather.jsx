import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    setLoading(true);

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=19.0760&lon=72.8777&appid=1005f31fdef753b09a2904b05e1a0331&units=metric"
    )
      .then((res) => res.json())  
      .then((data) => setWeather(data)) 
      .catch((err) => setError(err))  
      .finally(() => setLoading(false)); 
  }, []);

  return (
    <div>
      

      {loading ? (
        <p>loading...</p>
      ) : weather ? ( 
        <div className="weatherinfo">
          <div className="top-info">
            {/* <div className="weather">{weather.timelines[0].intervals[0].startTime}</div>  */}
           <div className="newdate" >{new Date().toLocaleString() + ""}</div>
          </div>
          <div className="bottom-info">
            <div className="Weathercode">
             <div className="weather-img"> <img src={"https://openweathermap.org/img/wn/"+weather.weather[0].icon+"@2x.png"} alt="Weather Icon" /></div>
              <div className="weather"> {weather.weather[0].main}</div>
            </div>
             <div className="temp-press">
              <div className="temp">Temperature {weather.main.temp}</div><br/>
              <div className="pressure">Pressure {weather.main.pressure}</div>
            </div>
            <div className="speed-time">
              <div className="speed">Wind Speed {weather.wind.windSpeed}</div><br/>
              <div className="humid">Humidity {weather.main.humidity}</div>
            </div> 
          </div>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default Weather;
