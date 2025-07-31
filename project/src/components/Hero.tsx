import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-blue-600 font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                Golla Nagaraju
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-xl text-gray-100 max-w-lg leading-relaxed drop-shadow-md">
                I create innovative, scalable web applications with cutting-edge technologies. 
                Passionate about clean code, exceptional user experiences, and solving complex problems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://in.docworkspace.com/d/sII7fn7ajArb8q8QG?sa=601.1037"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm border border-white/20"
              >
                <Download size={20} />
                Download CV
              </a>
              <a href="#projects">
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 backdrop-blur-sm">
                View Projects
              </button>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-2 shadow-2xl shadow-purple-500/25">
                <div className="w-full h-full rounded-full bg-white p-4 backdrop-blur-sm">
                  <img
                    src="/raju.jpg"
                    alt="Golla Nagaraju - Full Stack Developer"
                    className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/70" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
