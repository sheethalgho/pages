// accreditation-card.tsx
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import edit from "../assets/edit.png";
import add from "../assets/add.png";
import { doctors } from "../data/data";
import AccreditationItem from "./items/accredition-item";

interface AccreditationCardProps {
  className?: string;
}

export default function AccreditationCard({ className }: AccreditationCardProps) {
  const doctor = doctors[0];

  return (
    <Card className={`border-2 border-gray-300 rounded-3xl relative ${className}`}>
      <CardContent className="">
        <h3 className="text-base font-normal absolute -top-3 left-2 bg-white px-2">Accreditation</h3>
        <div className="absolute -top-4 right-2 flex gap-2 px-1">
          <Image src={edit} alt="edit" width={40} height={40} />
          <Image src={add} alt="add" width={40} height={40} />
        </div>
      </CardContent>
      <CardContent>
        <div className="flex flex-col gap-3">
          {doctor.accreditation.map((acc, index) => (
            <AccreditationItem key={index} title={acc.name} registrationNumber={acc.registrationNumber} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
