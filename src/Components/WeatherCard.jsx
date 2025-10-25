import React, {useEffect,useState} from "react";
export default function WeatherCard({latitude = 51.5074, longitude = -0.1278,isDarkMode}){
    const[weatherData,setWeatherData] = useState(null);
     const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [now, setNow] = useState(new Date());

useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  //  Fetch weather data
useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    )
    .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch weather data");
        return response.json();
      })
.then((data) => {
        setWeatherData(data.current_weather);
        setLoading(false);
      })
 .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
}, [latitude, longitude]);
// Convert weather code to description
function getWeatherDescription(code){
    if (code === 0) return "Clear sky";
     if (code <= 3) return "Partly cloudy";
    if (code <= 48) return "Foggy";
    if (code <= 67) return "Rainy";
    if (code <= 77) return "Snowy";
    if (code <= 82) return "Rain showers";
    if (code <= 86) return "Snow showers";
    return "Thunderstorm";
}


if (loading) {
    return (
      <div
        className={`p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
          isDarkMode ? "bg-gray-800 shadow-black/30" : "bg-white shadow-black/10"
        }`}
      >
        <h2
          className={`text-2xl font-bold mb-6 ${
            isDarkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Current Weather
        </h2>
        <p
          className={`text-center py-8 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Loading weather...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
          isDarkMode ? "bg-gray-800 shadow-black/30" : "bg-white shadow-black/10"
        }`}
      >
        <h2
          className={`text-2xl font-bold mb-6 ${
            isDarkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Current Weather
        </h2>
        <p
          className={`text-center py-8 ${
            isDarkMode ? "text-red-400" : "text-red-600"
          }`}
        >
          Error: {error}
        </p>
      </div>
    );
  }

   if (!weatherData) return null;
   return (

    <div
      className={`p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isDarkMode ? "bg-gray-800 shadow-black/30" : "bg-white shadow-black/10"
      }`}
    >
   <h2
        className={`text-2xl font-bold mb-6 ${
          isDarkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        Current Weather
      </h2>
  <div className="flex flex-col items-center gap-6">
   {/*  Weather Icon */}
        <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-gradient-to-br from-yellow-300 to-white dark:from-yellow-400 dark:to-gray-600">
          <div className="text-2xl font-bold">
            {Math.round(weatherData.temperature)}°C
          </div>
        </div>

 {/* 🌤️ Weather Details */}

<div className="w-full flex flex-col gap-3">

<div
            className={`flex justify-between py-2 border-b ${
              isDarkMode ? "border-gray-700" : "border-gray-300"
            }`}
          >
            <span
              className={`font-semibold ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Condition:
            </span>
            <span
              className={`font-medium ${
                isDarkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {getWeatherDescription(weatherData.weathercode)}
            </span>
          </div>
 <div
            className={`flex justify-between py-2 border-b ${
              isDarkMode ? "border-gray-700" : "border-gray-300"
            }`}
          >
            <span
              className={`font-semibold ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Wind:
            </span>
            <span
              className={`font-medium ${
                isDarkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {Math.round(weatherData.windspeed)} km/h
            </span>
          </div>
  
          <div
            className={`flex justify-between py-2 ${
              isDarkMode ? "border-gray-700" : "border-gray-300"
            }`}
          >
            <span
              className={`font-semibold ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Local Time:
            </span>
            <span
              className={`font-medium ${
                isDarkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {now.toLocaleTimeString()}
            </span>
          </div>

</div>
  </div>
    </div>
   )







}