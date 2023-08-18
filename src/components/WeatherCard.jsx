import { FaTemperatureHigh, FaTint, FaWind, FaEye } from 'react-icons/fa';
import WeatherDetails from './WeatherDetails';

const WeatherCard = () => {
  return (
    <div className="weather-card min-h-[500px] bg-gradient-to-b from-blue-500 to-blue-800 rounded-lg p-10 text-white shadow-lg sm:min-w-[350px]">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Recife, PE</h2>
      <p className="text-sm md:text-base text-slate-950 mb-4">Hoje, {new Date().toLocaleDateString()}</p>
      <div className="flex-col flex mt-20 gap-20">
        <div className="flex flex-col items-center justify-center mb-6">
          <span className="text-6xl md:text-8xl lg:text-8xl font-semibold mb-2">25&deg;</span>
          <p className="text-lg md:text-xl font-semibold">Céu Limpo</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 ">
          <WeatherDetails icon={<FaTemperatureHigh />} label="Máxima" value="28&deg;" />
          <WeatherDetails icon={<FaTint />} label="Umidade" value="20%" />
          <WeatherDetails icon={<FaWind />} label="Vento" value="30 km/h" />
          <WeatherDetails icon={<FaEye />} label="Visibilidade" value="10 km" />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
