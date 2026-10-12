"use client";
import { Code2, BrainCircuit, Quote } from "lucide-react";

export default function ExpertiseAndTestimonials() {
  const technicalSkills = [
    { name: "React.js / Next.js", level: "95%" },
    { name: "Node.js / Express", level: "90%" },
    { name: "TypeScript & JavaScript", level: "92%" },
    { name: "Database (MongoDB / PostgreSQL)", level: "88%" },
    { name: "Cloud (AWS / Azure)", level: "85%" },
  ];

  const professionalTraits = [
    "Leadership", "Problem Solving", "Agile Methodologies", 
    "Mentorship", "Strategic Thinking", "Cross-Team Collaboration"
  ];

  const testimonials = [
    {
      quote: "Ibna transformed our completely outdated e-commerce system into an incredibly fast, highly scalable architecture. Our conversion rate increased by 40% after the launch.",
      name: "Sarah Jenkins",
      role: "CTO at InnovateX",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
    },
    {
      quote: "One of the best engineering minds I've worked with. The dashboard interface was not only flawlessly built, but also incredibly intuitive for non-technical users.",
      name: "David Chen",
      role: "Founder, Peak Analytics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
    },
    {
      quote: "Delivered complex fintech integrations reliably and on time. His attention to detail regarding both security protocols and UX is unparalleled.",
      name: "Maria Rodriguez",
      role: "Product Lead, Fintech Nexus",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces"
    }
  ];

  return (
    <section className="py-28 px-6 relative overflow-hidden bg-darkBg">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* --- PART 1: Expertise & Skills --- */}
        <div className="space-y-12">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cardBg border border-gray-800 text-primaryAccent">
              <Code2 size={24} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Expertise & Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Technical Arsenal Box */}
            <div className="lg:col-span-7 bg-cardBg border border-gray-800 rounded-3xl p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                <div className="flex items-center gap-2">
                  <Code2 className="text-primaryAccent" size={20} />
                  <h3 className="text-xl font-bold text-white">Technical Arsenal</h3>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-gray-400">
                  PROFICIENCY
                </span>
              </div>

              <div className="space-y-6 pt-2">
                {technicalSkills.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-gray-200">{item.name}</span>
                      <span className="font-mono text-primaryAccent font-bold">{item.level}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                      <div 
                        className="h-full bg-gradient-to-r from-primaryAccent via-purple-500 to-secondaryAccent rounded-full"
                        style={{ width: item.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Traits Box */}
            <div className="lg:col-span-5 bg-cardBg border border-gray-800 rounded-3xl p-8 shadow-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="text-secondaryAccent" size={20} />
                    <h3 className="text-xl font-bold text-white">Professional Traits</h3>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-gray-400">
                    CORE COMPETENCIES
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {professionalTraits.map((trait, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-200 text-sm font-medium hover:border-primaryAccent/50 transition-colors"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Note */}
              <div className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800/80 space-y-1">
                <p className="text-sm font-bold text-white flex items-center gap-2">
                  <span>🚀</span> Constant Learner & Tech Pioneer
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Continuously evolving with cutting-edge AI frameworks, distributed architectures, and modern web design systems.
                </p>
              </div>
            </div>

          </div>
        </div>


        {/* --- PART 2: Client Testimonials --- */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryAccent to-secondaryAccent">Testimonials</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-base">
              Feedback from talented leaders I've had the pleasure of partnering with throughout my career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div 
                key={idx}
                className="bg-cardBg border border-gray-800 rounded-3xl p-8 shadow-2xl hover:border-primaryAccent/50 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <Quote className="text-primaryAccent/40 group-hover:text-primaryAccent transition-colors" size={32} />
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-800/80">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primaryAccent/30"
                  />
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}