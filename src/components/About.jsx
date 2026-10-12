import { personalInfo } from "@/data/portfolioData";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryAccent to-secondaryAccent">Me</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Get to know more about my academic background, professional journey, and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Bio & Summary */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-cardBg border border-gray-800 rounded-2xl p-8 space-y-6 shadow-xl">
              <h3 className="text-2xl font-bold text-white">
                Hi, I'm <span className="text-primaryAccent">{personalInfo.name}</span>
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                I am a dedicated <strong className="text-white">Full Stack Developer</strong> with a strong foundation in Computer Science and Engineering. I specialize in building high-performance, scalable web applications with clean architecture and modern user interfaces.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                From designing complex database schemas to crafting responsive frontend components, I enjoy turning challenging problems into seamless digital solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800">
                <div>
                  <p className="text-2xl font-bold text-primaryAccent font-mono">1.5+</p>
                  <p className="text-xs text-gray-400">Years of Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondaryAccent font-mono">6+</p>
                  <p className="text-xs text-gray-400">Full Stack Projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Education & Experience Timeline */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Education Card */}
            <div className="bg-cardBg border border-gray-800 rounded-2xl p-6 flex items-start gap-4 shadow-xl hover:border-primaryAccent/50 transition-all">
              <div className="p-3 bg-gray-900 rounded-xl border border-gray-800 text-primaryAccent">
                <GraduationCap size={24} />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-primaryAccent">2025</span>
                <h4 className="text-lg font-bold text-white">B.Sc. in Computer Science & Engineering (CSE)</h4>
                <p className="text-gray-400 text-sm">Completed graduation with strong core programming, algorithms, and software engineering foundations.</p>
              </div>
            </div>

            {/* Experience 1: Current Job */}
            <div className="bg-cardBg border border-gray-800 rounded-2xl p-6 flex items-start gap-4 shadow-xl hover:border-primaryAccent/50 transition-all">
              <div className="p-3 bg-gray-900 rounded-xl border border-gray-800 text-secondaryAccent">
                <Briefcase size={24} />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-secondaryAccent">Present</span>
                <h4 className="text-lg font-bold text-white">Software Developer</h4>
                <p className="text-primaryAccent text-xs font-medium">SmartCool IT</p>
                <p className="text-gray-400 text-sm">Working as a professional developer, building and maintaining production-grade web solutions and dynamic features.</p>
              </div>
            </div>

            {/* Experience 2: Internship */}
            <div className="bg-cardBg border border-gray-800 rounded-2xl p-6 flex items-start gap-4 shadow-xl hover:border-primaryAccent/50 transition-all">
              <div className="p-3 bg-gray-900 rounded-xl border border-gray-800 text-primaryAccent">
                <Award size={24} />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-gray-500">Early Career</span>
                <h4 className="text-lg font-bold text-white">Software Engineering Intern</h4>
                <p className="text-secondaryAccent text-xs font-medium">Bondstein Ltd.</p>
                <p className="text-gray-400 text-sm">Completed hands-on professional internship right after graduation, gaining enterprise-level development experience.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}