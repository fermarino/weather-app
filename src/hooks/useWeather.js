import { useEffect, useState } from 'react';

const useWeather = (location) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    if (location) {
      fetchWeatherData();
    }
  }, [location]);

  return { data };
};

export default useWeather;
