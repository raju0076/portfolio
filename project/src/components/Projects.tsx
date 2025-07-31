import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ExpenseTracker",
      description: "A full-stack expense tracker application built with React, Node.js, and MongoDB. Features include user authentication, income and expense tracking, dynamic charts, and categorized transaction management with secure JWT-based access.",
      image: "https://media.istockphoto.com/id/1342226806/photo/mobile-phone-app-for-money-budget-and-expense-tracking.jpg?s=612x612&w=0&k=20&c=FFp9jyIJotg1pgMQnSlcQWz5XO6CpkLnR6VvKrYTcnQ=",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://exprensetracker1.netlify.app",
      githubUrl: "https://github.com/raju0076/expencetracker"
    },
  
   {
  title: "MITHub",
  description: "A responsive web platform built for MIT students to discover essential campus services, curated packages, and resources. Developed collaboratively by a 4-member team with a focus on user-friendly design and real-time updates.",
  image: "https://www.zweb123.com/wp-content/uploads/2024/10/eCommerce-Website-by-Z-Web-Solutions.jpg",
  technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Web Design"],
  liveUrl: "https://mit-hub-2916.netlify.app/",
  githubUrl: "https://github.com/raju0076/MIT_Hub2916"
},
{
  title: "VieWthAI",
  description: "An AI-powered travel route optimizer using React and Leaflet.js to visualize intelligent path recommendations with real-time data. Features seamless integration with third-party AI APIs and responsive map-based UI.",
  image: "https://media.licdn.com/dms/image/v2/D5612AQFBD8_QrXdDwQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707903871747?e=2147483647&v=beta&t=fP7vG0dQL31GLGnhFSqGDl-lEuU0tQ8xWgB8vIipzgw",
  technologies: ["React.js", "Leaflet.js", "AI APIs", "Responsive Design"],
  liveUrl: "https://viewthai.netlify.app/",
  githubUrl: "https://github.com/raju0076/ViewThAI"
},
{
  title: "Portfolio Website",
  description: "A modern developer portfolio built with React, TypeScript, and Vite. It showcases my technical projects and skills with a clean UI, responsive layout, and fast performance. Styled using Tailwind CSS and enhanced with Lucide icons.",
  image: "https://slidemodel.com/wp-content/uploads/21550-01-portfolio-presentation-template-16x9-1-640x360.jpg",
  technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Lucide Icons"],
  liveUrl: "https://your-portfolio-link.netlify.app/",  
  githubUrl: "https://github.com/raju0076/Portfolio"    
}


  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 border border-white/10 hover:border-cyan-500/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <ExternalLink size={16} className="text-gray-700" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <Github size={16} className="text-gray-700" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href="#Project"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium group/link"
                  >
                    View Project
                    <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Projects;