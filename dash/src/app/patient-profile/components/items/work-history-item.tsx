import Image from "next/image";
import divide from "../../assets/divide.png";

interface WorkHistoryItemProps {
  role: string;
  hospital: string;
  duration: string;
}

export default function WorkHistoryItem({ role, hospital, duration }: WorkHistoryItemProps) {
  return (
    <div className="flex items-center">
      <div className="flex flex-col flex-grow">
        <span className="text-sm">{role}</span>
        <span className="text-sm italic">{hospital}</span>
      </div>
      <div className="w-10 flex justify-center">
        <Image src={divide} alt="divider" width={2} height={20} />
      </div>
      <div className="w-24 text-right">{duration}</div>
    </div>
  );
}
