
import Image from "next/image";
import profile from "../assets/profile.png";
import { patient } from "../data/data";

interface ProfileCardProps {
  className?: string;
}

export default function ProfileCard({ className }: ProfileCardProps) {
  const patients = patient[0];

  return (
    <div className={`border-1 border-gray-400 relative rounded-lg p-4 ${className}`}>
      <div>
        <div className="flex flex-col md:flex-row">
          <div className="mr-5">
            <Image src={profile} alt="profile" width={120} height={120} />
          </div>
          <div className="flex-col">
          <div className="w-full flex gap-4">
            <h4 className="text-lg font-semibold mt-1">{patients.name}, {patients.age}</h4>
            <div className="p-1 pr-2 pl-2 border border-gray-500 rounded-full ">Patient ID: {patients.patientid}</div>
          </div>
          <div className="w-full mt-2 flex flex-wrap justify-between md:flex-nowrap gap-24">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Date of Birth</span>
                <span className="text-sm">{patients.dob}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Gender</span>
                <span className="text-sm">{patients.gender}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Email</span>
                <span className="text-sm">{patients.email}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Contact Number</span>
                <span className="text-sm">{patients.contact}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Blood Type</span>
                <span className="text-sm">{patients.bloodtype}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Marital Status</span>
                <span className="text-sm">{patients.maritalstatus}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Occupation</span>
                <span className="text-sm">{patients.occupation}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Registered Date</span>
                <span className="text-sm">{patients.registereddate}</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
