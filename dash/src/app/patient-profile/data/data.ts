export const patient = [
  {
    id: 1,
    name: "Cathy John",
    age: 32,
    specialization: "Business",
    dob: "09/11/24",
    gender: "Female",
    email: "cathy@pxr.care",
    contact: "+91 8921773573",
    bloodtype: "O+ve",
    maritalstatus: "Married",
    occupation: "Business",
    registereddate: "24/01/24",
    patientid: "XR1198",

    emergencyContacts: [
      { name: "Alex Peter", relation: "Father", phone: "97960520198" },
      { name: "Tom Clint", relation: "Husband", phone: "9087689543" },
      { name: "Rosy Alex", relation: "Sister", phone: "8769501423" },
    ],

    allergyData: [
      { name: "Dust", startDate: "May 2024" },
      { name: "Pineapple", startDate: "Jan 2024" },
      { name: "Wheat", startDate: "Feb 2022" },
    ],

    insuranceData: [
      {
        name: "Insurance 1",
        policy: "AB1008R4",
        startDate: "28/03/2024",
        endDate: "28/03/2034",
        attachments: "2 files available",
      },
      {
        name: "Insurance 2",
        policy: "BFG0095T",
        startDate: "28/03/2024",
        endDate: "28/03/2034",
        attachments: "No files available",
      },
      {
        name: "Insurance 3",
        policy: "YT707TR8",
        startDate: "28/03/2024",
        endDate: "28/03/2034",
        attachments: "1 file available",
      },
    ],

    medicationsData: [
      {
        name: "Medication 1",
        startDate: "Jan 2024",
        endDate: "-",
        attachments: "2 files available",
      },
      {
        name: "Medication 2",
        startDate: "Dec 2023",
        endDate: "Jan 2024",
        attachments: "No files available",
      },
      {
        name: "Medication 3",
        startDate: "Apr 2023",
        endDate: "Apr 2023",
        attachments: "1 file available",
      },
      {
        name: "Medication 4",
        startDate: "Apr 2023",
        endDate: "Apr 2023",
        attachments: "No files available",
      },
      {
        name: "Medication 5",
        startDate: "Apr 2023",
        endDate: "Apr 2023",
        attachments: "No files available",
      },
    ],

    appointments: [
      {
        doctor: "Dr. Name (Specialty)",
        date: "Fri, Mar 17, 2025 • 11:30 am",
        patient: "Cathy Alex (30, F)",
        bookingId: "XXXXXX",
        payment: "₹200",
        paymentStatus: "● Payment Pending",
        paymentStatusColor: "text-gray-500",
      },
      {
        doctor: "Dr. Another Name (Specialty)",
        date: "Sat, Mar 18, 2025 • 2:00 pm",
        patient: "John Doe (45, M)",
        bookingId: "YYYYYY",
        payment: "₹300",
        paymentStatus: "● Payment Pending",
        paymentStatusColor: "text-gray-500",
      },
      {
        doctor: "Dr. Third Name (Specialty)",
        date: "Sun, Mar 19, 2025 • 10:00 am",
        patient: "Emily Smith (28, F)",
        bookingId: "ZZZZZZ",
        payment: "₹250",
        paymentStatus: "● Payment Pending",
        paymentStatusColor: "text-gray-500",
      },
    ],

    consultations: [
      {
        doctor: "Dr. Name (Specialty)",
        date: "Fri, Mar 17, 2025 • 11:30 am",
        patient: "Cathy Alex (30, F)",
        mode: "InPerson",
      },
      {
        doctor: "Dr. Name (Specialty)",
        date: "Fri, Mar 17, 2025 • 11:30 am",
        patient: "Cathy Alex (30, F)",
        mode: "InPerson",
      },
      {
        doctor: "Dr. Name (Specialty)",
        date: "Fri, Mar 17, 2025 • 11:30 am",
        patient: "Cathy Alex (30, F)",
        mode: "InPerson",
      },
    ],
  },
];
