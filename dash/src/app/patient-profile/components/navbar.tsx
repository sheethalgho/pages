import Image from "next/image";
import bell from "../assets/bell.png";
import profile3 from "../assets/profile3.png";

export default function Navbar() {
    return (
      <div className="flex justify-between p-2 items-center m-2">
        <div className="flex gap-4">
        <h1 className="text-2xl font-semibold text-gray-500">Patient Database </h1>
        <span className="text-2xl"> &gt; </span>
        <h1 className="text-2xl font-semibold">Patient Profile</h1>
        </div>
        <div className="flex gap-4">
          <div className=" m-1 rounded-full bg-gray-200 border border-black p-2">
            Book an Appointment
          </div>
        <Image src={bell} alt="Navbar" width={48} height={38} />
        <Image src={profile3} alt="Navbar" width={48} height={38} />
        </div>
      </div>
    )
  }
  
