'use client';

import { useState } from 'react';
import RangeSlider from '../items/Slider';
import Image from "next/image";
import stethoscope from "../assets/stethoscope.png"

interface DemographicProps {
  onAccess: () => void; // Define the expected function type
}

export default function Demographic({ onAccess }: DemographicProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    if (!isDropdownOpen) {
      onAccess(); // Call onAccess only when opening
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="mt-4">
      <button
        className={`w-full px-4 py-2 bg-gray-200 rounded-lg flex justify-between items-center ${
          isDropdownOpen ? 'text-black' : 'text-gray-500'
        }`}
        onClick={handleToggleDropdown}
      >
        <div className="flex items-center gap-2">
          <Image 
            src={stethoscope} 
            alt="logo" 
            width={24} 
            height={24} 
            className={isDropdownOpen ? 'opacity-100' : 'opacity-50'}
          />
          <span>By Demographic</span>
          </div>
        <span className="font-bold text-gray-700 p-2 w-6">
          {isDropdownOpen ? '∧' : '∨'}
        </span>
      </button>
      {isDropdownOpen && (
        <div>
          <RangeSlider />
        </div>
      )}
    </div>
  );
}
