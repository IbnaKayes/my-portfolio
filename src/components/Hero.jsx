"use client";
import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Hero() {
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - rotation);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setRotation(deltaX * 0.8);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Mouse chhere dile aaste aaste rotation 0deg (original position) e fire ashbe
    setRotation(0);
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primaryAccent/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700 text-primaryAccent text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-secondaryAccent animate-pulse"></span>
            Available for Freelance Projects & Full-Time Roles
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryAccent to-secondaryAccent">{personalInfo.name}</span>
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-gray-300">
            {personalInfo.title}
          </p>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {personalInfo.tagline}. {personalInfo.about}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-primaryAccent text-darkBg font-semibold rounded-xl hover:bg-opacity-95 transition-all shadow-lg shadow-primaryAccent/20"
            >
              Explore Work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-cardBg border border-gray-700 text-white font-semibold rounded-xl hover:border-primaryAccent transition-all"
            >
              Let's Talk
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-5 pt-4 text-gray-400">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-primaryAccent transition-colors">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primaryAccent transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-primaryAccent transition-colors flex items-center gap-1">
              <Mail size={18} /> Email
            </a>
          </div>
        </div>

        {/* Right Side: Spring Return ID Card */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center select-none pt-6">
          
          <div
            onMouseDown={handleMouseDown}
            style={{
              transformOrigin: "top center",
              transform: `rotate(${rotation}deg)`,
              // Smooth cubic-bezier spring transition when mouse is released
              transition: isDragging ? "none" : "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)"
            }}
            className="cursor-grab active:cursor-grabbing flex flex-col items-center"
          >
            {/* Lanyard Strap */}
            <div className="w-3 h-28 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 rounded-t-md relative flex flex-col items-center shadow-md">
              <div className="w-6 h-6 bg-gray-400 rounded-sm absolute bottom-0 -translate-x-1/2 left-1/2 border border-gray-500 shadow-md"></div>
            </div>

            {/* ID Badge Card */}
            <div className="w-80 bg-white text-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 relative mt-[-2px]">
              {/* Card Header Gradient */}
              <div className="h-32 bg-gradient-to-r from-primaryAccent via-purple-500 to-secondaryAccent p-4 relative flex items-center justify-center">
                <div className="absolute top-3 w-12 h-3 bg-gray-900/30 rounded-full"></div>
                
                {/* Profile Image */}
                <div className="w-28 h-28 rounded-full border-4 border-white bg-white absolute -bottom-14 overflow-hidden shadow-lg flex items-center justify-center">
                  <img 
                    src="/profile.png" 
                    alt={personalInfo.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-14 pb-6 px-6 text-center space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900">{personalInfo.name}</h3>
                  <span className="inline-block mt-1 px-3 py-1 bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-700 rounded-full">
                    Full Stack Developer
                  </span>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-100 text-left">
                  <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                    <p className="text-[10px] uppercase font-mono text-gray-400">Specialty</p>
                    <p className="text-xs font-bold text-gray-800">Web & Apps</p>
                  </div>
                  <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                    <p className="text-[10px] uppercase font-mono text-gray-400">Location</p>
                    <p className="text-xs font-bold text-gray-800">Bangladesh</p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-xl border border-gray-100">
                  <span className="text-xs font-mono text-gray-500">Status</span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Active / Ready
                  </span>
                </div>

                {/* Barcode Footer */}
                <div className="pt-2">
                  <div className="h-6 w-full bg-gray-900 rounded opacity-80 flex items-center justify-center text-[8px] font-mono text-white tracking-widest">
                    |||||| |||| | ||||||| ||||
                  </div>
                  <p className="text-[10px] text-gray-400 font-mono mt-1">ID: IBNA-2026-PRO</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-4 font-mono">Drag and release to watch it spring back</p>
        </div>

      </div>
    </section>
  );
}