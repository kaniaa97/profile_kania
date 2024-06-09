import React, { useState } from "react";
// import "./Dropdown.css"; // Import file CSS untuk tailwind styles

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-4 h-4">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-blue-500 focus:outline-none"
      >
        <span className="mr-2 text-white">
          React Native Project Learning outcomes: Personal web (portfolio),
          chatapp (web ReactJS), profile (ReactNative apk)
        </span>
        <svg
          className="w-4 h-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-8-8 1.5-1.5L10 9l6.5-6.5L18 4z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border rounded shadow-md">
          <div className="p-4">
            <p className="text-gray-700">Deskripsi yang tersembunyi...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
