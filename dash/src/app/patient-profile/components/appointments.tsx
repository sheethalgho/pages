import React from "react";
import { patient } from "../../patient-profile/data/data";

const AppointmentCard = () => {
  const appointments = patient[0]?.appointments || [];

  return (
    <div className="w-full border border-gray-400 rounded-sm overflow-hidden">
      <div className="p-4 bg-gray-200 rounded-t-sm">
        <h2 className="text-lg font-semibold">Upcoming Appointments ({appointments.length})</h2>
      </div>
      <div className="p-4 bg-white rounded-b-lg h-52 overflow-y-auto">
        {appointments.map((appointment, index) => (
          <div key={index} className="mb-4">
            <p className="text-sm text-gray-500">Appointment with</p>
            <p className="text-md font-semibold">{appointment.doctor}</p>
            <p className="text-sm text-gray-600">{appointment.date}</p>
            <hr className="my-2 border-dashed border-gray-400" />
            <div className="flex justify-between text-sm">
              <div>
                <p className="text-gray-500">Patient Info</p>
                <p className="font-medium">{appointment.patient}</p>
              </div>
              <div>
                <p className="text-gray-500">Booking ID</p>
                <p className="font-medium">{appointment.bookingId}</p>
              </div>
            </div>
            <hr className="my-2 border-dashed border-gray-400" />
            <div className="flex justify-between items-center text-sm">
              <div>
                <p className="text-gray-500">Payment</p>
                <p className="text-black font-medium">{appointment.payment}</p>
              </div>
              <span className={`text-sm ${appointment.paymentStatusColor}`}>
                {appointment.paymentStatus}
              </span>
            </div>
            {index < appointments.length - 1 && <hr className="my-4 border-gray-600" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentCard;
