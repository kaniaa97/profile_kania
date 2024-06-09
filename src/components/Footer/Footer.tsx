// Footer.tsx

import React from "react";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-bold">© 2024 by Kaniawati.</p>
          <p className="text-sm">
            Informasi Lainnya: <br />
            Cilacap, Jawa Tengah, Indonesia
          </p>
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <a
            href="https://www.instagram.com/tehnia9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 hover:text-gray-500 transition duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/ka-nia-1a268628b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 hover:text-gray-500 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.tiktok.com/@batirrmuu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 hover:text-gray-500 transition duration-300"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
