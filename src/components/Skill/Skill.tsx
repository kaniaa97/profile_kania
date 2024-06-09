// Skill.tsx
import React from "react";

import ReactIcon from "../../assets/React.svg";
import GitlabIcon from "../../assets/Gitlab.svg";
import JsIcon from "../../assets/Js.svg";
import MuiIcon from "../../assets/Mui.svg";
import MysqlIcon from "../../assets/Mysql.svg";
import PgIcon from "../../assets/Pg.svg";
import PostmanIcon from "../../assets/Postman.svg";
import TailwindIcon from "../../assets/Tailwind.svg";
import VsIcon from "../../assets/Vs.svg";

const skills = [
  {
    name: "React",
    icon: ReactIcon,
    color: "#61DAFB",
    link: "https://reactjs.org/",
  },
  {
    name: "Gitlab",
    icon: GitlabIcon,
    color: "#FC6D26",
    link: "https://about.gitlab.com/",
  },
  {
    name: "JavaScript",
    icon: JsIcon,
    color: "#F7DF1E",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Material-UI",
    icon: MuiIcon,
    color: "#0081CB",
    link: "https://mui.com/",
  },
  {
    name: "MySQL",
    icon: MysqlIcon,
    color: "#4479A1",
    link: "https://www.mysql.com/",
  },
  {
    name: "PostgreSQL",
    icon: PgIcon,
    color: "#336791",
    link: "https://www.postgresql.org/",
  },
  {
    name: "Postman",
    icon: PostmanIcon,
    color: "#EF5B25",
    link: "https://www.postman.com/",
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
    color: "#38B2AC",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Visual Studio Code",
    icon: VsIcon,
    color: "#007ACC",
    link: "https://code.visualstudio.com/",
  },
];

const Skill: React.FC = () => {
  return (
    <div id="education">
      <div className="bg-gray-100 py-15 min-h-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 mt-4">
            Skill
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-2 ">
            {skills.map((skill) => (
              <a
                key={skill.name}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-4 border border-gray-300 rounded-lg transition-all duration-300 hover:bg-gray-200"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 mb-2 object-contain"
                  // style={{ filter: `grayscale(100%)` }}
                />
                <p
                  className="text-sm font-medium text-gray-700 group-hover:text-gray-900"
                  style={{ color: skill.color }}
                >
                  {skill.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
