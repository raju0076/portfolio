import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-black text-white py-12 relative overflow-hidden z-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Golla Nagaraju
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Passionate Full Stack Developer crafting responsive, scalable web apps.
            Always learning and building to solve real-world problems.
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/raju0076"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-cyan-600 transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/30"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/golla-nagaraju-callmeraju-2a4641318/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-cyan-600 transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/30"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:gnraju0076@gmail.com"
            className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-cyan-600 transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/30"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-gray-400 text-sm">
          Let's connect and create something amazing together!
        </p>

        <div className="border-t border-white/10 pt-6">
          <p className="text-gray-400 text-sm">
            © {currentYear} Golla Nagaraju. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex justify-center items-center gap-1 mt-2">
            Made with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
