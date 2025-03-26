import Image from "next/image";
import divide from "../../assets/divide.png";
import logo from "../../assets/logo.png";

interface EducationItemProps {
    degree: string;
    institution: string;
    registrationNumber: string;
    graduationYear: string;
    
  }
  
  export default function EducationItem({ degree, institution, registrationNumber, graduationYear }: EducationItemProps) {
    return (
      <div className="flex items-center justify-between w-full">
        <div className="w-16 flex-shrink-0">
          <Image src={logo} alt="logo" width={50} height={60} className="mt-2" />
        </div>
        <div className="flex-1 min-w-40 text-left">
          <span className="text-sm">{degree}</span>
          <span className="text-sm italic text-gray-600 block">{institution}</span>
        </div>
        <div className="w-40 text-center">
          <span className="text-xs font-light text-gray-400 block">Registration Number</span>
          <span className="text-sm">{registrationNumber}</span>
        </div>
        <div className="w-5 flex-shrink-0 flex justify-center">
          <Image src={divide} alt="divider" width={2} height={1} />
        </div>
        <div className="w-40 text-center">
          <span className="text-xs font-light text-gray-400 block">Graduation Year</span>
          <span className="text-sm">{graduationYear}</span>
        </div>
      </div>
    );
  }