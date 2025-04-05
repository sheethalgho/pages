'use client';

import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { patient } from '../../patient-profile/data/data';
import Image from 'next/image';
import norecords from '../../patient-profile/assets/norecords.png';

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
        <div
          className={`border rounded-b-lg ${
            insuranceData.length > 0
              ? 'overflow-x-auto max-h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent'
              : 'flex items-center justify-center'
          }`}
        >
          {insuranceData.length === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-42">
              <Image src={norecords} alt="No Insurance Data" width={100} height={100} />
              <p className="text-gray-500 text-sm mt-2">No insurance data available</p>
            </div>
          ) : (
            <table className="w-full border-collapse text-left border-t border-gray-300">
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
                            item.attachments === 'No files available'
                              ? 'text-gray-500'
                              : 'text-black underline underline-offset-2'
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
          )}
        </div>
      )}

      {/* Medications Tab Content */}
      {activeTab === 'medications' && (
        <div
          className={`border rounded-b-lg ${
            medicationsData.length > 0
              ? 'overflow-x-auto max-h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent'
              : 'flex items-center justify-center'
          }`}
        >
          {medicationsData.length === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-42">
              <Image src={norecords} alt="No Medications Data" width={100} height={100} />
              <p className="text-gray-500 text-sm mt-2">No medications data available</p>
            </div>
          ) : (
            <table className="w-full border-collapse text-left border-t border-gray-300">
              <thead>
                <tr className="border-b bg-gray-100 text-gray-700">
                  <th className="p-2 font-normal text-black">Medication Name</th>
                  <th className="p-2 font-normal text-black">Start Date</th>
                  <th className="p-2 font-normal text-black">End Date</th>
                  <th className="p-2 font-normal text-black">Attachments</th>
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
                            item.attachments === 'No files available'
                              ? 'text-gray-500'
                              : 'text-black underline underline-offset-2'
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
          )}
        </div>
      )}

      {/* Allergy Tab Content */}
      {activeTab === 'allergy' && (
        <div
          className={`border rounded-b-lg ${
            allergyData.length > 0
              ? 'overflow-x-auto max-h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent'
              : 'flex items-center justify-center'
          }`}
        >
          {allergyData.length === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-42">
              <Image src={norecords} alt="No Allergy Data" width={100} height={100} />
              <p className="text-gray-500 text-sm mt-2">No allergy data available</p>
            </div>
          ) : (
            <table className="w-full border-collapse text-left border-t border-gray-300">
              <thead>
                <tr className="border-b bg-gray-100 text-gray-700">
                  <th className="p-2 font-normal text-black">Allergy Name</th>
                  <th className="p-2 font-normal text-black">Start Date</th>
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
          )}
        </div>
      )}
    </div>
  );
}
