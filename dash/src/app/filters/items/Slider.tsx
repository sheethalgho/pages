'use client';

import { useState } from 'react';

const DoubleEndedSlider = () => {
  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(90);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const minRange = 0;
  const maxRange = 120;

  return (
    <div className="w-full mx-auto p-6 relative">
      <div className='text-gray-400 text-sm'>Age</div>
      <div className="relative h-10">
        {/* Track */}
        <div className="absolute top-1/2 w-full h-1 bg-gray-300 rounded-full transform -translate-y-1/2" />

        {/* Selected Range */}
        <div
          className="absolute top-1/2 h-1 bg-gray-500 rounded-full transform -translate-y-1/2"
          style={{ left: `${(minValue / maxRange) * 100}%`, right: `${100 - (maxValue / maxRange) * 100}%` }}
        />

        {/* Min Handle */}
        <input
          type="range"
          min={minRange}
          max={maxRange}
          value={minValue}
          onChange={(e) => {
            const val = Math.min(Number(e.target.value), maxValue - 1);
            setMinValue(val);
          }}
          className="absolute w-full h-1 opacity-0 pointer-events-none"
        />
        <div
          className="absolute w-3 h-3 bg-gray-500 rounded-full top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer"
          style={{ left: `${(minValue / maxRange) * 100}%` }}
        />
        <div
          className="absolute text-gray-700 text-sm top-full mt-1 transform -translate-x-1/2"
          style={{ left: `${(minValue / maxRange) * 100}%` }}
        >
          {minValue}
        </div>

        {/* Max Handle */}
        <input
          type="range"
          min={minRange}
          max={maxRange}
          value={maxValue}
          onChange={(e) => {
            const val = Math.max(Number(e.target.value), minValue + 1);
            setMaxValue(val);
          }}
          className="absolute w-full h-1 opacity-0 pointer-events-none"
        />
        <div
          className="absolute w-3 h-3 bg-gray-500 rounded-full top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer"
          style={{ left: `${(maxValue / maxRange) * 100}%` }}
        />
        <div
          className="absolute text-gray-700 text-sm top-full mt-1 transform -translate-x-1/2"
          style={{ left: `${(maxValue / maxRange) * 100}%` }}
        >
          {maxValue}
        </div>

        {/* Range Labels */}
        <div className="absolute w-full flex justify-between text-gray-700 text-sm top-full mt-1">
          <span className="absolute left-0">{minRange}</span>
          <span className="absolute right-0">{maxRange}</span>
        </div>
      </div>

      {/* Gender Selection */}
      <div className='flex flex-col gap-2'>
        <div className='text-gray-500 text-sm mt-9'>
          Gender
        </div>
        <div className='flex gap-3'>
        <button
            className={`px-4 py-2 border rounded-full transition-colors duration-300 
              ${selectedGender === 'Male' 
                ? 'bg-gray-400 text-gray-800 border-gray-500' 
                : 'bg-white text-gray-400 border-gray-300'}
            `}
            onClick={() => setSelectedGender('Male')}
          >
            Male
          </button>
          <button
            className={`px-4 py-2 border rounded-full transition-colors duration-300 
              ${selectedGender === 'Female' 
                ? 'bg-gray-400 text-gray-800 border-gray-500' 
                : 'bg-white text-gray-400 border-gray-300'}
            `}
            onClick={() => setSelectedGender('Female')}
          >
            Female
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoubleEndedSlider;
