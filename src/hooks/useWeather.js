'use client'
import { useEffect, useState } from "react";

const useWeather = (location) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, [location]);

  return { data };
}

export default useWeather;
