import Image from "next/image";
import bell from "../assets/bell.png";
import oncall from "../assets/oncall.png";
import profile3 from "../assets/profile3.png";

export default function Navbar() {
    return (
      <div className="flex justify-between p-2 items-center m-2">
        <h1 className="text-2xl font-semibold">Profile</h1>
        <div className="flex gap-2">
        <Image src={bell} alt="Navbar" width={32} height={32} />
        <Image src={oncall} alt="Navbar" width={80} height={32} />
        <Image src={profile3} alt="Navbar" width={32} height={32} />
        </div>
      </div>
    )
  }
  
