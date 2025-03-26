'use client';

import { useState } from 'react';
import Image from "next/image";
import RangePicker from '../items/Range';
import calendar from '../assets/calendar.png';

interface DatePickerProps {
  onAccess: () => void; // Define the expected function type
}

export default function DatePicker({ onAccess }: DatePickerProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    if (!isDropdownOpen) {
      onAccess(); // Call onAccess when opening the dropdown
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="mt-4 ">
      <button
        className={`w-full px-4 py-2 bg-gray-200 rounded-lg flex items-center justify-between ${
          isDropdownOpen ? 'text-black' : 'text-gray-500'
        }`}
        onClick={handleToggleDropdown}
      >
        <div className="flex items-center gap-2">
          <Image 
            src={calendar} 
            alt="logo" 
            width={24} 
            height={24} 
            className={isDropdownOpen ? 'opacity-100' : 'opacity-50'}
          />
          <span>By Date and Time (Last visit date)</span>
        </div>
        <span className="font-bold text-gray-700 p-2 w-6">
          {isDropdownOpen ? '∧' : '∨'}
        </span>
      </button>
      {isDropdownOpen && (
        <div className="flex gap-6 mt-5 justify-evenly">
          <div>
            <div className="text-gray-500">Start Date</div>
            <RangePicker />
          </div>
          <div>
            <div className="text-gray-500">End Date</div>
            <RangePicker />
          </div>
        </div>
      )}
    </div>
  );
}
