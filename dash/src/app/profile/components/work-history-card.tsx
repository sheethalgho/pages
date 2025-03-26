import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import edit from "../assets/edit.png";
import add from "../assets/add.png";
import { doctors } from "../data/data";
import WorkHistoryItem from "./items/work-history-item";

interface WorkHistoryCardProps {
  className?: string;
}

export default function WorkHistoryCard({ className }: WorkHistoryCardProps) {
  const doctor = doctors[0]; 

  return (
    <Card className={`border-2 border-gray-300 rounded-3xl p-3 relative ${className}`}>
      <CardContent className="p-0">
        <h3 className="text-base font-normal absolute -top-3 left-2 bg-white px-2">Work History</h3>
        <div className="absolute -top-4 right-2 flex gap-2 px-1">
          <Image src={edit} alt="edit" width={40} height={40} />
          <Image src={add} alt="add" width={40} height={40} />
        </div>
      </CardContent>
      <CardContent>
        <div className="flex flex-col gap-3">
          {doctor.workHistory.map((job, index) => (
            <WorkHistoryItem key={index} role={job.role} hospital={job.hospital} duration={job.duration} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
