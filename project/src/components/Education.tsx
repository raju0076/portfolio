import React from 'react';
import { GraduationCap, MapPin, Award, BookOpen, Star } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Full Stack Developer Program",
      institution: "Masai School",
      location: "Online",
      type: "Professional Certification",
      endYear: "2025",
      icon: <Award className="w-8 h-8" />,
      cgpa: "9.0 CGPA",
      color: "from-emerald-600 to-teal-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      status: "Completed"
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Sri Krishnadevaraya University",
      location: "Anantapur",
      type: "Bachelor's Degree",
      endYear: "2024",
      icon: <GraduationCap className="w-8 h-8" />,
      cgpa: "7.5 CGPA",
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      status: "Completed"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Govt.Jr College (Boys) New Town",
      location: "Anantapur",
      type: "Higher Secondary",
      endYear: "2018",
      icon: <BookOpen className="w-8 h-8" />,
      cgpa: "9.1 CGPA",
      color: "from-purple-600 to-violet-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      status: "Completed"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "ZPH School Brahmasamudram",
      location: "Brahmasamudram",
      type: "Secondary Education",
      endYear: "2016",
      icon: <BookOpen className="w-7 h-7" />,
      cgpa: "9.2 CGPA",
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      status: "Completed"
    }
  ];
  
  return (
    <section id="education" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <GraduationCap className="text-white" size={36} />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Academic Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Consistent academic performance with strong CGPA across all educational milestones, 
            demonstrating dedication to learning and excellence in computer science
          </p>
          <div className="flex items-center justify-center mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-4"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
        </div>

        {/* Education Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {educationData.map((edu, index) => (
            <div key={index} className="group">
              <div className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-transparent hover:scale-105 overflow-hidden ${edu.bgColor}/20`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center p-4 bg-gradient-to-br ${edu.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {edu.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-4 py-2 ${edu.bgColor} ${edu.textColor} text-sm font-semibold rounded-full border border-current/20`}>
                      {edu.type}
                    </span>
                  </div>
                  
                  <h3 className={`text-2xl font-bold text-gray-900 mb-3 group-hover:${edu.textColor} transition-colors duration-300`}>
                    {edu.degree}
                  </h3>
                  
                  <p className="text-lg font-semibold text-gray-700 mb-4">
                    {edu.institution}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={18} className={edu.textColor} />
                      <span className="font-medium">{edu.location}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 text-orange-700 px-4 py-2 rounded-full border border-orange-200 shadow-sm">
                      <Star size={16} className="text-yellow-500" />
                      <span className="font-bold">{edu.cgpa}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1 rounded-full">
                        <span className="text-sm font-semibold text-gray-700">{edu.endYear}</span>
                      </div>
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${edu.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                        <div className={`w-2 h-2 rounded-full ${edu.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                        {edu.status}
                      </div>
                    </div>
                  </div>
                  
                  <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">
                    {edu.type}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${edu.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className={`absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br ${edu.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Summary */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
            <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <GraduationCap className="text-white" size={32} />
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Commitment to Excellence
            </h3>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Consistent academic excellence with strong CGPA performance across all educational levels. 
              My dedication to learning and maintaining high standards reflects my commitment to 
              professional growth and technical mastery in computer science and software development.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">8.9</div>
                <div className="text-gray-300 font-medium">Average CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                <div className="text-gray-300 font-medium">Qualifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">9.1</div>
                <div className="text-gray-300 font-medium">Highest CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                <div className="text-gray-300 font-medium">Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
