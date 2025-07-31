import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and search engine visibility."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working effectively in teams using modern development workflows and tools."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-950 relative overflow-hidden">
      {/* Blurred background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-1/4 w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-100px] right-1/4 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
            About Me
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm Golla Nagaraju, a passionate full-stack developer with expertise in modern web technologies. 
            I love turning complex problems into elegant, scalable solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Crafting Digital Experiences
            </h3>
            <p className="text-gray-300 leading-loose">
              As a Computer Science graduate from Sri Krishnadevaraya University and a certified Full Stack Developer 
              from Masai School, I specialize in creating responsive, user-friendly applications using 
              React, Node.js, and modern web technologies. My educational foundation combined with 
              hands-on experience drives my passion for writing clean, maintainable code.
            </p>
            <p className="text-gray-300 leading-loose">
              I believe in continuous learning and staying current with industry trends. My goal is to 
              create innovative digital solutions that make a meaningful impact while delivering 
              exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'Next.js', 'Node.js', 'JavaScript', 'MongoDB', 'Express'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/20 hover:scale-105 transition-all duration-200 shadow-sm shadow-cyan-400/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column (Feature Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-lg transition-all duration-300 shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-400/30 hover:-translate-y-1"
              >
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
