'use client';

import { useState } from 'react';
import Image from "next/image";
import clipboard from "../assets/clipboard.png";
import search from "../assets/search.png"

interface DiagnosisProps {
  onAccess: () => void; // Function prop to notify parent
}

export default function Diagnosis({ onAccess }: DiagnosisProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    if (!isDropdownOpen) {
      onAccess(); // Call onAccess when opening
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
            src={clipboard} 
            alt="logo" 
            width={24} 
            height={24} 
            className={isDropdownOpen ? 'opacity-100' : 'opacity-50'}
          />
          <span>By Diagnosis/Medical Condition</span>
        </div>
        <span className="font-bold text-gray-700 p-2 w-6">
          {isDropdownOpen ? '∧' : '∨'}
        </span>
      </button>
      {isDropdownOpen && (
        <div className="flex gap-6 mt-5 justify-evenly">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Diagnosis"
              className="w-full border-b-2 border-gray-300 focus:outline-none p-2 pr-10 placeholder:italic"
            />
            <Image 
              src={search} 
              alt="search" 
              width={20} 
              height={20} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            />
          </div>
        </div>
      )}
    </div>
  );
}
