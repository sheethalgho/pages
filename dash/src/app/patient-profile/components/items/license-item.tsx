import Image from "next/image";
import logo from "../../assets/logo.png"
import clip from "../../assets/clip.png"


interface LicenseItemProps {
    qualification: string;
    licenseNumber: string;
    registrationNumber: string;
  }
  
  export default function LicenseItem({ qualification, licenseNumber, registrationNumber }: LicenseItemProps) {
    return (
      <div className="bg-gray-200 p-3 rounded-xl flex justify-between gap-2">
        <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="text-xs font-light text-gray-600">Qualification:</span>
          <span className="text-sm">{qualification}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-light text-gray-600">License Number:</span>
          <span className="text-sm">{licenseNumber}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-light text-gray-600">Registration Number:</span>
          <span className="text-sm">{registrationNumber}</span>
        </div>
        </div>
        <div className="flex flex-col justify-between">
            <div>
            <Image src={logo} alt="logo" width={40} height={40} className="m-3" />
            </div>
            <div className="ml-4">
            <Image src={clip} alt="logo" width={20} height={20} className="m-3" />
            </div>
        </div>
      </div>
    );
  }