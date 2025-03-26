import ProfileCard from "./components/profile-card"
import ScheduleCard from "./components/schedule-card"
import LicensesCard from "./components/licenses-card"
import EducationCard from "./components/education-card"
import WorkHistoryCard from "./components/work-history-card"
import Navbar from "./components/navbar"
import DoctorSidebar from "./components/doctor-sidebar"
import AccreditationCard from "./components/accredition-card"

export default function DoctorDashboard() {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <div className="p-0">
      <DoctorSidebar/>  
      </div>
      <div className="w-full">
        <Navbar />
        <div className="flex flex-col md:flex-row m-1 gap-3 p-2">
          <ProfileCard className="w-full md:w-4/5" />
          <ScheduleCard className="w-full md:w-1/4" />
        </div>
        <div className="flex flex-col md:flex-row gap-1 m-2 mb-7">
          <LicensesCard className="w-full md:w-1/4" />
          <div className="w-full md:w-3/4">
            <EducationCard />
            <div className="flex flex-col md:flex-row gap-2 m-2 p-2">
              <AccreditationCard className="w-full md:w-1/2" />
              <WorkHistoryCard className="w-full md:w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

