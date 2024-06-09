import React from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Skill from "../../components/Skill";

// import MyCV from "../../assets/CV_Kaniawati.pdf";

export default function Home() {
  return (
    <>
      <div id="home">
        <Header />
        <div className="bg-gray-100 min-h-screen p-8 md:p-16 flex items-center">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">HELLO</h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-800">
              I'M Kaniawati
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 font-medium text-opacity-50">
              I am interested in developing a harmonious relationship
            </p>
            <div className="btn-intro">
                <button>
                  <a
                    className="group bg-blue-500 shadow px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    href="/CV_Kaniawati.pdf"
                    download
                  >
                    my resume{" "}
                  </a>
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-10 md:mt-24">
          <About />
        </div>
        <div className="container mx-auto mt-10 md:mt-24">
          <Skill />
        </div>
        <div className="container mx-auto mt-10 md:mt-24">
          <Contact />
        </div>
        <div className="container mx-auto mt-10 md:mt-24">
          <Footer />
        </div>
      </div>
    </>
  );
}
