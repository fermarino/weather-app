const WeatherDetails = ({ icon, label, value }) => (
  <div className="flex items-center text-lg md:text-xl">
    {icon}
    <span className="ml-2 text-base md:text-[14px] font-semibold">
      {label}: {value}
    </span>
  </div>
);

export default WeatherDetails