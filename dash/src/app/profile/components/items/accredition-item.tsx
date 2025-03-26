interface AccreditationItemProps {
    title: string;
    registrationNumber: string;
  }
  
  export default function AccreditationItem({ title, registrationNumber }: AccreditationItemProps) {
    return (
      <div className="flex flex-col">
        <span className="text-xs font-light text-gray-600">{title}</span>
        <span className="text-sm">Registration Number: {registrationNumber}</span>
      </div>
    );
  }