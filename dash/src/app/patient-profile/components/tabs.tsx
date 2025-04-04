'use client';

import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { patient } from '../../patient-profile/data/data';

export default function InsuranceTabs() {
  const [activeTab, setActiveTab] = useState('insurance');

  const insuranceData = patient[0]?.insuranceData || [];
  const medicationsData = patient[0]?.medicationsData || [];
  const allergyData = patient[0]?.allergyData || [];

  return (
    <div className="w-full p-4">
      {/* Tabs */}
      <div className="flex space-x-2">
        {['insurance', 'medications', 'allergy'].map((tab) => (
          <button
            key={tab}
            className={`p-2 px-4 text-left whitespace-nowrap ${
              activeTab === tab
                ? 'bg-gray-100 font-medium border-t-4 border-x border-gray-300 border-b-0'
                : 'bg-white'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Insurance Tab Content */}
      {activeTab === 'insurance' && (
        <div className="overflow-x-auto border rounded-b-lg border-t-0 max-h-43 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b bg-gray-100 text-gray-700">
                <th className="p-2 font-normal text-gray-700">Insurance Name</th>
                <th className="p-2 font-normal text-gray-700">Policy No.</th>
                <th className="p-2 font-normal text-gray-700">Start Date</th>
                <th className="p-2 font-normal text-gray-700">End Date</th>
                <th className="p-2 font-normal text-gray-700">Attachments</th>
              </tr>
            </thead>
            <tbody>
              {insuranceData.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2 align-middle">{item.name}</td>
                  <td className="p-2 align-middle">{item.policy}</td>
                  <td className="p-2 align-middle">{item.startDate}</td>
                  <td className="p-2 align-middle">{item.endDate}</td>
                  <td className="p-2 align-middle">
                    <div className="flex items-center justify-between">
                      <span
                        className={`cursor-pointer ${
                          item.attachments === 'No files available' ? 'text-gray-500' : 'text-black'
                        }`}
                      >
                        {item.attachments}
                      </span>
                      <BsThreeDots className="cursor-pointer text-gray-600" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Medications Tab Content */}
      {activeTab === 'medications' && (
        <div className="overflow-x-auto border rounded-b-lg border-t-0 max-h-42 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b bg-gray-100 text-gray-700">
                <th className="p-2 font-normal text-gray-700">Medication Name</th>
                <th className="p-2 font-normal text-gray-700">Start Date</th>
                <th className="p-2 font-normal text-gray-700">End Date</th>
                <th className="p-2 font-normal text-gray-700">Attachments</th>
              </tr>
            </thead>
            <tbody>
              {medicationsData.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2 align-middle">{item.name}</td>
                  <td className="p-2 align-middle">{item.startDate}</td>
                  <td className="p-2 align-middle">{item.endDate}</td>
                  <td className="p-2 align-middle">
                    <div className="flex items-center justify-between">
                      <span
                        className={`cursor-pointer ${
                          item.attachments === 'No files available' ? 'text-gray-500' : 'text-black'
                        }`}
                      >
                        {item.attachments}
                      </span>
                      <BsThreeDots className="cursor-pointer text-gray-600" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Allergy Tab Content */}
      {activeTab === 'allergy' && (
        <div className="overflow-x-auto border rounded-b-lg border-t-0 max-h-43 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b bg-gray-100 text-gray-700">
                <th className="p-2 font-normal text-gray-700">Allergy Name</th>
                <th className="p-2 font-normal text-gray-700">Start Date</th>
              </tr>
            </thead>
            <tbody>
              {allergyData.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2 align-middle">{item.name}</td>
                  <td className="p-2 align-middle">{item.startDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
