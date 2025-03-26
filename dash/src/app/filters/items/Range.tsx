"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react"; 

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

export default function RangePicker() {
  const currentDate = new Date();
  const [day, setDay] = useState<number>(currentDate.getDate());
  const [monthIndex, setMonthIndex] = useState<number>(currentDate.getMonth());
  const [year, setYear] = useState<number>(currentDate.getFullYear());

  const handleDayChange = (direction: -1 | 1) => {
    setDay((prevDay) => {
      let newDay = prevDay + direction;
      const daysInCurrentMonth = getDaysInMonth(monthIndex, year);

      if (newDay < 1) {
        if (monthIndex === 0) {
          setMonthIndex(11);
          setYear(year - 1);
        } else {
          setMonthIndex((prevMonth) => prevMonth - 1);
        }
        return getDaysInMonth(monthIndex === 0 ? 11 : monthIndex - 1, year);
      } else if (newDay > daysInCurrentMonth) {
        if (monthIndex === 11) {
          setMonthIndex(0);
          setYear(year + 1);
        } else {
          setMonthIndex((prevMonth) => prevMonth + 1);
        }
        return 1;
      }
      return newDay;
    });
  };

  const handleMonthChange = (direction: -1 | 1) => {
    setMonthIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) {
        setYear((prevYear) => prevYear - 1);
        return 11; 
      } else if (newIndex > 11) {
        setYear((prevYear) => prevYear + 1);
        return 0;
      }
      return newIndex;
    });

    setDay((prevDay) => Math.min(prevDay, getDaysInMonth(monthIndex + direction, year)));
  };

  const handleYearChange = (direction: -1 | 1) => {
    setYear((prevYear) => {
      const newYear = prevYear + direction;
      setDay((prevDay) => Math.min(prevDay, getDaysInMonth(monthIndex, newYear)));
      return newYear;
    });
  };

  return (
    <div className="mt-4 flex items-center gap-2">
      {/* Day Picker */}
      <div className="flex flex-col items-center bg-gray-200 p-3 rounded-lg w-20">
        <button className="p-1.5 rounded-full hover:bg-gray-300" onClick={() => handleDayChange(1)}>
          <ChevronUp size={18} className="text-gray-600 font-semibold" />
        </button>
        <span className="text-lg text-black">{day}</span>
        <button className="p-1.5 rounded-full hover:bg-gray-300" onClick={() => handleDayChange(-1)}>
          <ChevronDown size={18} className="text-gray-600 font-semibold"/>
        </button>
      </div>

      {/* Month Picker */}
      <div className="flex flex-col items-center bg-gray-200 p-3 rounded-lg w-28">
        <button className="p-1.5 rounded-full hover:bg-gray-300" onClick={() => handleMonthChange(1)}>
          <ChevronUp size={18} className="text-gray-600 font-semibold"/>
        </button>
        <span className="text-lg text-black">{months[monthIndex]}</span>
        <button className="p-1.5 rounded-full hover:bg-gray-300" onClick={() => handleMonthChange(-1)}>
          <ChevronDown size={18} className="text-gray-600 font-semibold"/>
        </button>
      </div>

      {/* Year Picker */}
      <div className="flex flex-col items-center bg-gray-200 p-3 rounded-lg w-20">
        <button className="p-1.5 rounded-full hover:bg-gray-300" onClick={() => handleYearChange(1)}>
          <ChevronUp size={18} className="text-gray-600 font-semibold"/>
        </button>
        <span className="text-lg text-black">{year}</span>
        <button className="p-1.5 rounded-full hover:bg-gray-300" onClick={() => handleYearChange(-1)}>
          <ChevronDown size={18} className="text-gray-600 font-semibold"/>
        </button>
      </div>
    </div>
  );
}