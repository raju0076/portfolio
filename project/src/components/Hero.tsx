import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      {/* Decorative Radial Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl w-full px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-emerald-300 text-sm font-medium">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Available for Opportunities
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-md">
                Golla <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400">
                  Nagaraju
                </span>
              </h1>

              <h2 className="text-2xl text-blue-300 font-semibold">Full Stack Developer</h2>

              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                Passionate about building scalable, user-focused web applications. I merge clean code with smart design to craft solutions that solve real-world problems.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://in.docworkspace.com/d/sII7fn7ajArb8q8QG?sa=601.1037"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
              >
                <Download size={20} />
                Download Resume
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition"
              >
                View My Work
                <ArrowDown size={18} />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 text-center mt-10 border-t border-white/10 pt-6">
              <div>
                <p className="text-xl font-bold text-white">2025</p>
                <p className="text-sm text-gray-400">Graduate</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">Full Stack</p>
                <p className="text-sm text-gray-400">Developer</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">Ready</p>
                <p className="text-sm text-gray-400">To Work</p>
              </div>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <img
                src="/raju.jpg"
                alt="Golla Nagaraju"
                className="w-full h-full object-cover rounded-full hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
