"use client";
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiTailwindcss, SiFirebase, 
  SiDocker, SiPostman, SiFigma, SiGit 
} from "react-icons/si";
import { Code } from "lucide-react";

export default function Skills() {
  const skillsList = [
    { name: "HTML5 / CSS", icon: <SiHtml5 className="text-orange-500" size={20} /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" size={20} /> },
    { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" size={20} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" size={20} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" size={20} /> },
    { name: "React.js", icon: <SiReact className="text-cyan-400" size={20} /> },
    { name: "VS Code", icon: <Code size={20} className="text-blue-400" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" size={20} /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" size={20} /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" size={20} /> },
    { name: "Git & GitHub", icon: <SiGit className="text-red-500" size={20} /> },
    { name: "Firebase", icon: <SiFirebase className="text-amber-500" size={20} /> },
  ];

  // Infinite smooth marquee loop-er jonno list-ke triplicate kora holo
  const duplicatedSkills = [...skillsList, ...skillsList, ...skillsList];

  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryAccent to-secondaryAccent">Skills</span>
        </h2>

        {/* Marquee Container with Fade Edges */}
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex gap-6 w-max animate-[scrollMarquee_35s_linear_infinite] hover:[animation-play-state:paused]">
            {duplicatedSkills.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-cardBg border border-gray-800 shadow-lg hover:border-primaryAccent/50 transition-all duration-300 group shrink-0"
              >
                <span className="transition-transform group-hover:scale-110 duration-300">
                  {skill.icon}
                </span>
                <span className="text-gray-200 font-medium text-sm sm:text-base whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}