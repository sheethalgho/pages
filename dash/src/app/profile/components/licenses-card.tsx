import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import edit from "../assets/edit.png";
import add from "../assets/add.png";
import { doctors } from "../data/data";
import LicenseItem from "./items/license-item";

interface LicensesCardProps {
  className?: string;
}

export default function LicensesCard({ className }: LicensesCardProps)  {
  const doctor = doctors[0];

  return (
    <Card className="border-2 w-1/3 border-gray-300 rounded-3xl relative m-2 p-3">
      <CardContent className="p-0">
        <h3 className="text-base font-normal absolute -top-3 left-2 bg-white px-2">Medical Licenses</h3>
        <div className="absolute -top-4 right-2 flex gap-2 px-1">
          <Image src={edit} alt="edit" width={40} height={40} />
          <Image src={add} alt="add" width={40} height={40} />
        </div>
      </CardContent>
      <CardContent>
        <div className="flex flex-col gap-4">
          {doctor.licenses.map((license, index) => (
            <LicenseItem
              key={index}
              qualification={license.qualification}
              licenseNumber={license.licenseNumber}
              registrationNumber={license.registrationNumber}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
