import React, { useEffect, useState } from "react";
import kania1 from "../../assets/kania1.png"; // Ganti dengan path gambar/nama profil Anda
import { Link } from "react-scroll";
import { FaInstagram } from "react-icons/fa"; // Gunakan ikon Instagram dari react-icons/fa

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`${
        isScrolled ? "sticky top-0" : ""
      } transition-all duration-500 ease-in-out`}
    >
      <div className="bg-gray-400 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-white">
              <img
                className="w-12 h-12 rounded-full"
                src={kania1}
                alt="Profile"
              />
            </div>
            <h4 className="text-white ml-4 text-lg font-mono">Kaniawati</h4>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer hover:text-[#639128]"
            >
              Home
            </Link>
            <Link
              to="about"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer hover:text-[#639128]"
            >
              About
            </Link>
            <Link
              to="education"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer hover:text-[#639128]"
            >
              Skill
            </Link>
            <Link
              to="contact"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer hover:text-[#639128]"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center">

            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              spy={true}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              activeClass="active"
              smooth={true}
              spy={true}
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              to="education"
              activeClass="active"
              smooth={true}
              spy={true}
              onClick={toggleMobileMenu}
            >
              Skill
            </Link>
            <Link
              to="contact"
              activeClass="active"
              smooth={true}
              spy={true}
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
