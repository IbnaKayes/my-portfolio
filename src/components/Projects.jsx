"use client";
import { useState, useRef, useEffect } from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { projectsData } from "@/data/portfolioData";

export default function Projects() {
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate exact progress from the moment the container enters viewport until it leaves
      const scrollPosition = windowHeight - rect.top;
      const totalScrollableDistance = containerHeight + windowHeight;
      
      let progress = (scrollPosition / totalScrollableDistance) * 100;
      progress = Math.max(0, Math.min(100, progress));
      
      setLineHeight(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="py-28 px-6 relative overflow-hidden bg-darkBg">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryAccent to-secondaryAccent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            A showcase of my recent full-stack web applications and robust digital systems.
          </p>
        </div>

        {/* Projects Timeline Container */}
        <div ref={containerRef} className="relative">
          
          {/* Background Faint Line spanning the exact length of the projects list */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-800/40 hidden lg:block rounded-full"></div>

          {/* Animated Glowing Foreground Line that tracks scroll precisely */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-primaryAccent via-purple-500 to-secondaryAccent hidden lg:block rounded-full transition-all duration-75 ease-out shadow-[0_0_15px_#00F2FE]"
            style={{ height: `${lineHeight}%` }}
          ></div>

          {/* Projects List */}
          <div className="space-y-24">
            {projectsData.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column / Right Column Alternating */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:text-right' : 'lg:order-2 lg:text-left'}`}>
                    <div className="bg-cardBg border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl hover:border-primaryAccent/50 transition-all duration-300 group">
                      
                      <div className={`flex items-center gap-2 mb-3 ${isEven ? 'lg:justify-end' : 'justify-start'}`}>
                        <span className="px-3 py-1 rounded-full bg-primaryAccent/10 text-primaryAccent text-xs font-semibold">
                          Featured App
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primaryAccent transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className={`flex flex-wrap gap-2 mb-6 ${isEven ? 'lg:justify-end' : 'justify-start'}`}>
                        {project.techStack?.map((tech, tIdx) => (
                          <span key={tIdx} className="px-2.5 py-1 rounded-md bg-gray-900 border border-gray-800 text-gray-300 text-xs font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className={`flex items-center gap-4 ${isEven ? 'lg:justify-end' : 'justify-start'}`}>
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-primaryAccent transition-colors">
                            <Code2 size={16} /> Code
                          </a>
                        )}
                        {project.liveDemo && (
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-primaryAccent hover:underline">
                            <ExternalLink size={16} /> Live Preview
                          </a>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Center Node / Circle on the Timeline */}
                  <div className="hidden lg:flex lg:col-span-2 justify-center relative">
                    <div className="w-10 h-10 rounded-full bg-cardBg border-4 border-primaryAccent shadow-[0_0_20px_#00F2FE] flex items-center justify-center z-10">
                      <div className="w-3 h-3 rounded-full bg-secondaryAccent animate-pulse"></div>
                    </div>
                  </div>

                  {/* Empty Spacer Column for Layout Balance */}
                  <div className={`hidden lg:block lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}></div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}