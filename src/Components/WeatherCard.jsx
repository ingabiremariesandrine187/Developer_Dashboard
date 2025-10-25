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






}