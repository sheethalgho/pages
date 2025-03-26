
import Image from "next/image";
import profile from "../assets/profile.png";
import edit from "../assets/edit.png";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { doctors } from "../data/data";

interface ProfileCardProps {
  className?: string;
}

export default function ProfileCard({ className }: ProfileCardProps) {
  const doctor = doctors[0];

  return (
    <Card className={`border-2 border-gray-300 relative rounded-3xl p-3 m-3 ${className}`}>
      <CardHeader className="p-0 pb-2">
        <h3 className="text-base font-normal absolute -top-3 left-2 bg-white px-2">
          Personal Information & Credentials
        </h3>
        <Image src={edit} alt="logo" width={50} height={50} className="absolute -top-4 right-2 px-1" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row p-2 mb-2">
          <div className="w-24 mr-2">
            <Image src={profile} alt="profile" width={96} height={96} />
          </div>
          <div className="w-full md:w-1/5 m-2 flex flex-col justify-center">
            <h4 className="text-lg font-semibold">{doctor.name}, {doctor.age}</h4>
            <p className="text-md">{doctor.specialization}</p>
          </div>
          <div className="w-full md:w-3/5 flex flex-wrap md:flex-nowrap gap-7 justify-evenly">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Date of Birth</span>
                <span className="text-sm">{doctor.dob}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Gender</span>
                <span className="text-sm">{doctor.gender}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Email</span>
                <span className="text-sm">{doctor.email}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Contact Number</span>
                <span className="text-sm">{doctor.contact}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Department</span>
                <span className="text-sm">{doctor.department}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Qualification</span>
                <span className="text-sm">{doctor.qualification}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Unique Identification Number (UID)</span>
                <span className="text-sm">{doctor.uid}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Years of Experience</span>
                <span className="text-sm">{doctor.experience}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
