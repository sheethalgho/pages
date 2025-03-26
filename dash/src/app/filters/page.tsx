'use client';

import { useState } from 'react';
import DatePicker from './components/DatePicker';
import Diagnosis from './components/Diagnosis';
import Status from './components/Status';
import Demographic from './components/Demographic';

export default function Appointment() {
  const [isOpen, setIsOpen] = useState(false);
  const [filtersAccessed, setFiltersAccessed] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setFiltersAccessed(false); // Reset filter access when modal closes
  };
  const openModal = () => setIsOpen(true);

  const handleFilterAccess = () => {
    setFiltersAccessed(true); // Set to true when any dropdown is accessed
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center transition-opacity duration-300 p-8"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl p-8 w-96 md:w-1/2 lg:w-1/2 shadow-lg transform transition-all duration-300 mx-8"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
          >
            {/* Modal Header */}
            <div className="flex justify-between">
              <div className="text-lg">Filters</div>
              <div
                className="text-sm rounded-full bg-gray-200 hover:bg-gray-500 w-6 h-6 text-center cursor-pointer"
                onClick={closeModal}
              >
                x
              </div>
            </div>

            {/* Scrollable Filter Section */}
            <div className="max-h-[50vh] overflow-y-auto mt-4 px-2">
              <DatePicker onAccess={handleFilterAccess} />
              <Diagnosis onAccess={handleFilterAccess} />
              <Status onAccess={handleFilterAccess} />
              <Demographic onAccess={handleFilterAccess} />
            </div>

            {/* "Apply" Button (Stays Fixed) */}
            {filtersAccessed && (
              <div className="flex justify-center mt-4">
                <button
                  className="px-4 py-2 bg-gray-300 border border-black rounded-full"
                  onClick={closeModal}
                >
                  Apply
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          className="fixed top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={openModal}
        >
          Open Modal
        </button>
      )}
    </>
  );
}
