import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image";
import edit from "../assets/edit.png";
import { doctors } from "../data/data";

interface ScheduleCardProps {
  className?: string;
}

export default function ScheduleCard({ className }: ScheduleCardProps) {
  const doctor = doctors[0];
  return (
    <Card className={`border-2 border-gray-300 rounded-3xl relative p-3 m-2 pb-8 ${className}`}>
      <CardContent className="p-0">
        <span className="text-base font-normal absolute -top-3 left-2 bg-white px-2">Work Schedule</span>
        <Image src={edit} alt="logo" width={50} height={50} className="absolute -top-4 right-2 px-1" />
      </CardContent>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span className="text-xs font-light text-gray-600">Shift Assigned:</span>
            <span className="text-sm">{doctor.schedule.shiftAssigned}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-light text-gray-600">Shift Time:</span>
            <span className="text-sm">{doctor.schedule.shiftTime}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-light text-gray-600">Consultation Time:</span>
            <span className="text-sm">{doctor.schedule.consultationTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}