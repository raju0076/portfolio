import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedis,
 
} from "react-icons/si";
import "../Styles/skills.css"
const skills = [
  { name: "React", icon: <FaReact />, color: "from-blue-400 to-cyan-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "from-gray-800 to-gray-600" },
  { name: "TypeScript", icon: <SiTypescript />, color: "from-blue-600 to-blue-400" },
  { name: "JavaScript", icon: <SiJavascript />, color: "from-yellow-400 to-yellow-300" },
  { name: "HTML5", icon: <FaHtml5 />, color: "from-orange-500 to-red-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "from-blue-500 to-purple-500" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "from-teal-400 to-blue-500" },
  { name: "Node.js", icon: <FaNodeJs />, color: "from-green-500 to-green-400" },
  { name: "Express", icon: <SiExpress />, color: "from-gray-700 to-gray-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "from-green-600 to-green-400" },
  { name: "MySQL", icon: <SiMysql />, color: "from-blue-600 to-blue-400" },
  { name: "Redis", icon: <SiRedis />, color: "from-red-500 to-red-400" },
  { name: "Python", icon: <FaPython />, color: "from-yellow-500 to-blue-500" },
  { name: "Git", icon: <FaGitAlt />, color: "from-orange-600 to-red-600" },
  // { name: "Azure", icon: <SiAzure />, color: "from-blue-500 to-cyan-400" },
  { name: "Docker", icon: <FaDocker />, color: "from-blue-600 to-blue-400" },
];

const duplicatedSkills = [...skills, ...skills]; // for infinite scroll

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Blurred Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl mb-6 shadow-lg">
            <span className="text-white text-2xl">⚡</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Technologies and tools I use to build exceptional digital experiences
          </p>
        </div>

        {/* Auto Scroll Rows */}
        <div className="overflow-hidden space-y-8">
          {/* Top Row - Right Scroll */}
          <div className="scroll-row scroll-right">
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`top-${index}`}
                className={`min-w-[160px] mx-2 p-6 rounded-2xl bg-gradient-to-r ${skill.color} text-white flex flex-col items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <div className="font-semibold text-sm">{skill.name}</div>
              </div>
            ))}
          </div>

          {/* Bottom Row - Left Scroll */}
          <div className="scroll-row scroll-left">
            {duplicatedSkills
              .slice()
              .reverse()
              .map((skill, index) => (
                <div
                  key={`bottom-${index}`}
                  className={`min-w-[160px] mx-2 p-6 rounded-2xl bg-gradient-to-r ${skill.color} text-white flex flex-col items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <div className="font-semibold text-sm">{skill.name}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
