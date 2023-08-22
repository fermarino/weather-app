'use client'
import { FaTemperatureHigh, FaTint, FaWind, FaEye } from 'react-icons/fa';
import WeatherDetails from './WeatherDetails';
import useWeather from '@/hooks/useWeather';

const WeatherCard = ({ location }) => {
  const { data } = useWeather(location);

  if (!data) {
    return <p>Carregando...</p>;
  }

  const { name, main, weather, sys } = data;
  const temperature = Math.round(main.temp);
  const weatherDescription = weather[0].description;
  console.log(data)

  return (
    <div className="weather-card max-h-[500px] bg-gradient-to-b from-blue-500 to-blue-800 rounded-lg p-8 text-white shadow-lg sm:max-w-[400px] lg:max-w-[400px]">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">{name}, {sys.country}</h2>
      <p className="text-sm md:text-base text-slate-950 mb-4">Today, {new Date().toLocaleDateString()}</p>
      <div className="flex-col flex mt-10 gap-11">
        <div className="flex flex-col items-center justify-center mb-6">
          <span className="text-6xl md:text-8xl lg:text-8xl font-semibold mb-2">{temperature} &deg;</span>
          <p className="text-lg md:text-xl font-semibold">{weatherDescription}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          <WeatherDetails icon={<FaTemperatureHigh />} label="Max" value={`${Math.round(main.temp_max)}º`} />
          <WeatherDetails icon={<FaTint />} label="Humity" value={`${main.humidity}%`} />
          <WeatherDetails icon={<FaWind />} label="Wind" value={`${Math.round(data.wind.speed)} km/h`} />
          <WeatherDetails icon={<FaEye />} label="Visibility" value={`${data.visibility / 1000} km`} />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
