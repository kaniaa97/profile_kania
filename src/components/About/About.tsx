import React, { useState, useEffect } from "react";
import kania1 from "../../assets/kania1.png";
import Dropdown from "../Dropdown";

export default function About() {
  const [text, setText] = useState("");
  const descriptionText =
    "Saya Kaniawati, seorang lulusan SMK Muhammadiyah Majenang jurusan Perangkat Lunak dan menjadi seorang Front End Developer. Saya mendapatkan pengalaman berharga dalam industri magang dan Saya memiliki dedikasi tinggi terhadap pekerjaan dan kesiapan untuk terus belajar dan berkembang di dunia teknologi.";

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i < descriptionText.length; i++) {
        setText(descriptionText.substring(0, i + 1));
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    };

    typeText();
  }, []);

  return (
    <div id="about" className="bg-gray-600 min-h-screen p-8 md:p-16 flex items-center">
      <div className="container mx-auto md:flex">
        <div className="md:mr-8 md:w-1/2">
          <img className="w-full md:max-w-md rounded-full mx-auto" src={kania1} alt="Profile" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-white font-bold text-2xl md:text-6xl mb-4">
            <span className="text-4xl">About Me</span>
          </h1>
          <div className="text-white text-2xl md:text-center lg:text-left px-4 md:px-0">
            <p>{text}</p>
          </div>
          <div className="mt-8">
            <h3 className="text-white text-2xl font-bold mb-4">Experience⭐</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-500 p-4">
                <a
                  href="https://www.utschool.sch.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mr-4 hover:text-sky-700 text-2xl"
                >
                  UT School IT Batch 4
                </a>
                <p className="text-white mt-2">
                  Learn Programming Languages ​and ReactJS framework, React Native Project
                  Learning outcomes: Personal web (portfolio), chatapp (web ReactJS), profile
                  (ReactNative apk)
                </p>
                <p className="text-gray mt-2">June - Aug 2023</p>
              </div>

              <div className="bg-green-500 p-4">
                <a
                  href="https://www.unitedtractors.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mr-4 hover:text-sky-700 text-2xl"
                >
                  Intern Front-end - PT United Tractors
                </a>
                <p className="text-white mt-2">
                  Deepen development skills React TypeScript and using TanStack and participate
                  in creating projects The Olympiad database application uses Parse, PgAdmin,
                  and Postgres.
                </p>
                <p className="text-gray mt-2">Sept 2023 - January 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
