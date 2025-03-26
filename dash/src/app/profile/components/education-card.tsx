import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import edit from "../assets/edit.png";
import add from "../assets/add.png";
import { doctors } from "../data/data";
import EducationItem from "./items/education-item";

export default function EducationCard() {
  const doctor = doctors[0];

  return (
    <Card className="h-2/5 border-2 relative border-gray-300 rounded-3xl m-2 p-3 pb-24">
      <CardContent className="p-0">
        <h3 className="text-base font-normal absolute -top-3 left-2 bg-white px-2">Education</h3>
        <div className="absolute -top-4 right-2 flex gap-2 px-1">
          <Image src={edit} alt="edit" width={40} height={40} />
          <Image src={add} alt="add" width={40} height={40} />
        </div>
      </CardContent>
      <CardContent className="">
        <div className="flex flex-col gap-2">
          {doctor.education.map((edu, index) => (
            <EducationItem
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              registrationNumber={edu.registrationNumber}
              graduationYear={edu.graduationYear}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
