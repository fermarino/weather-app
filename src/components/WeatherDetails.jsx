const WeatherDetails = ({ icon, label, value }) => (
  <div className="flex items-center text-xl md:text-2xl">
    {icon}
    <span className="ml-2 text-base md:text-lg font-semibold">
      {label}: {value}
    </span>
  </div>
);

export default WeatherDetails