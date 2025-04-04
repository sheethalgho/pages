import ProfileCard from "./components/profile-card"
import Navbar from "./components/navbar"
import DoctorSidebar from "./components/sidebar"
import EmergencyContacts from "./components/contacts"
import HealthOptions from "./components/buttons"
import InsuranceTabs from "./components/tabs"
import AppointmentCard from "./components/appointments"
import ConsultationHistory from "./components/consultation"

export default function DoctorDashboard() {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <div className="p-0">
      <DoctorSidebar/>  
      </div>
      <div className="w-full">
        <Navbar />
        <div className="flex gap-3 p-3 ">
          <div className="w-2/3 flex flex-col gap-3">
            <div>
              <ProfileCard/>
            </div>
            <div>
              <EmergencyContacts/>
            </div>
            <div>
              <HealthOptions/>
            </div>
            <div>
              <InsuranceTabs/>
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-3">
            <div >
              <AppointmentCard/>
            </div>
            <div >
              <ConsultationHistory/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

