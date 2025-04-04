import React from "react";
import { patient } from "../../patient-profile/data/data"; 

const ConsultationHistory = () => {
  const consultations = patient[0]?.consultations || [];
  return (
    <div className="w-full h-full border rounded-sm border-gray-400 overflow-hidden">
      <div className="p-4 bg-gray-200 rounded-t-sm">
        <h2 className="text-lg font-semibold">Consultation History</h2>
      </div>
      <div className="p-4 bg-white rounded-b-lg h-64 overflow-y-auto">
        {consultations.map((consultation, index) => (
          <div key={index} className="mb-4">
            <p className="text-md font-semibold">{consultation.doctor}</p>
            <p className="text-sm text-gray-600">{consultation.date}</p>
            <div className="flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-gray-500">Patient Info</p>
                <p className="font-medium">{consultation.patient}</p>
              </div>
              <span className="bg-gray-300 text-gray-700 text-xs px-3 py-1 rounded-full">
                {consultation.mode}
              </span>
            </div>
            {index < consultations.length - 1 && <hr className="my-4 border-dashed border-gray-400" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultationHistory;
