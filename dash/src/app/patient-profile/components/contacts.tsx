
import React from "react";
import { patient } from "../../patient-profile/data/data";

const EmergencyContacts: React.FC = () => {
  const emergencyContacts = patient[0]?.emergencyContacts || [];

  return (
    <div className="border border-gray-400 rounded-sm bg-white">
      <div className="bg-gray-100 w-full text-black font-semibold rounded-sm text-lg py-2 px-4">
        Emergency Contacts
      </div>

      <div className="flex divide-x divide-gray-300 text-center p-4">
        {emergencyContacts.map((contact, index) => (
          <div key={index} className="flex-1 flex flex-col justify-center items-center">
            <p className="font-semibold">
              {contact.name}{" "}
              <span className="text-gray-500 text-sm">({contact.relation})</span>
            </p>
            <p className="text-gray-600">{contact.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmergencyContacts;
