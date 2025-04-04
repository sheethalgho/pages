// components/HealthOptions.tsx
import React from "react";
import { ArrowRight } from "lucide-react";

const options = [
  { text: "Access Complete Health History", link: "#" },
  { text: "Review Patient Vitals", link: "#" },
];

const HealthOptions: React.FC = () => {
  return (
    <div className="border rounded-sm border-gray-400 flex divide-x divide-gray-300">
      {options.map((option, index) => (
        <a
          key={index}
          href={option.link}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-4 hover:bg-gray-100 transition"
        >
          <span className="font-semibold">{option.text}</span>
          <ArrowRight className="h-5 w-5 text-gray-500" />
        </a>
      ))}
    </div>
  );
};

export default HealthOptions;
