"use client";

import { useState } from "react";
import { appointments } from "../appointments/data";
import AppointmentCard from "../appointments/items/appointmentcard";

export default function Appointment() {
  const [isOpen, setIsOpen] = useState(true);
  const timeRange = "02:30 pm - 03:30 pm";
  const closeDrawer = () => setIsOpen(false);
  const openDrawer = () => setIsOpen(true);

  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-100 bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeDrawer}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-l-4xl p-4 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className={`transition-opacity duration-300 p-5 ${isOpen ? "opacity-100 delay-200" : "opacity-0"}`}>
          <h2 className="text-2xl font-normal">Appointments</h2>
          <p className="mt-2">From {timeRange}</p>
          <div className="w-full mt-4">
            {appointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      </div>

      {!isOpen && (
        <button className="fixed top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={openDrawer}>
          Open Drawer
        </button>
      )}
    </>
  );
}
