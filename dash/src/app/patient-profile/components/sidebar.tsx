"use client"

import { Sidebar, SidebarContent, SidebarProvider } from "@/components/ui/sidebar"
import { useEffect, useState } from "react"
import Image from "next/image";
import home from "../assets/home.png";
import back from "../assets/back.png";
import calendar from "../assets/calendar.png";
import profile2 from "../assets/profile2.png";
import document from "../assets/document.png";
import settings from "../assets/settings.png";
import exit from "../assets/exit.png";
import stethoSCOPE from "../assets/stethoscope.png";


export default function DoctorSidebar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <SidebarProvider className="lg:w-[120px] w-[0px]">
      <Sidebar className="fixed left-0 top-0 w-[6.33%] min-w-[60px]">
        <SidebarContent className="flex flex-col mb-10 justify-between items-center">
          <div className="mt-6 w-8 mx-auto flex flex-col gap-5">
          <Image src={back} alt="logo" width={32} height={32} />
          <Image src={home} alt="home" width={32} height={32} />
          <Image src={calendar} alt="calendar" width={32} height={32} />
          <Image src={stethoSCOPE} alt="document" width={32} height={32} />
          <Image src={profile2} alt="profile2" width={32} height={32} />
          <Image src={settings} alt="settings" width={32} height={32} />
          </div>
          <div className="mt-32">
          <Image src={exit} alt="exit" width={32} height={32} />
          </div>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}

