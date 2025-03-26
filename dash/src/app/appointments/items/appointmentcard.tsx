"use client";

import Image from "next/image";
import profile from "../../profile/assets/profile.png";

// Define the TypeScript type for an appointment
interface Appointment {
  id: number;
  name: string;
  age: number;
  gender: string;
  time: string;
  specialty: string;
  doctor: string;
}

// Define props with the correct type
interface AppointmentCardProps {
  appointment: Appointment;
}

export default function AppointmentCard({ appointment }: AppointmentCardProps) {
  return (
    <div className="w-full bg-gray-200 p-5 m-2 rounded-xl shadow flex gap-3">
      <div>
        <Image src={profile} alt="profile" width={70} height={70} className="" />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-sm font-semibold">
          {appointment.name}, {appointment.age}, {appointment.gender}
        </h3>
        <p className="text-xs text-gray-700">{appointment.time}</p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="font-semibold">{appointment.time.split(" ")[0]}</div>
        <div>
          <div className="text-xs font-light">{appointment.specialty}</div>
          <div className="text-xs font-light">{appointment.doctor}</div>
        </div>
      </div>
    </div>
  );
}
