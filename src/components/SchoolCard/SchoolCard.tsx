import React from "react";

interface SchoolCardProps {
  imageUrl: string;
  description: string;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ imageUrl, description }) => {
  return (
    <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-56 object-cover object-center"
        src={imageUrl}
        alt="School"
      />
      <div className="p-4">
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default SchoolCard;
