'use client'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


const SearchBox = ({onLocationChange}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    onLocationChange(inputValue)
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Digite a cidade..."
            className="border rounded-lg py-2 px-4 w-70 sm:w-80 md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500 border-slate-200 shadow-md"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 focus:outline-none"
          >
            <FaSearch className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;