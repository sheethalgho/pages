
export interface Appointment {
    id: number;
    name: string;
    age: number;
    gender: string;
    time: string;
    specialty: string;
    doctor: string;
  }

  export const appointments: Appointment[] = [
    {
      id: 1,
      name: "Cathy Alex",
      age: 28,
      gender: "F",
      time: "02:30 pm - 03:00 pm",
      specialty: "Cardiology",
      doctor: "John Doe",
    },
    {
      id: 2,
      name: "Shagil James",
      age: 35,
      gender: "M",
      time: "03:00 pm - 03:30 pm",
      specialty: "Dermatology",
      doctor: "Sarah Lee",
    },
  ];
  