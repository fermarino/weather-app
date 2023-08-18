'use client'
import { useState } from 'react';
import WeatherCard from '@/components/WeatherCard';
import SearchBox from '@/components/SearchBox';

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState('Recife');

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200">
      <SearchBox onLocationChange={handleLocationChange} />
      <WeatherCard location={selectedLocation} />
    </div>
  );
}
