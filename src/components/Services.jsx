import { Layers, Code2, Cpu, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code2 className="text-primaryAccent group-hover:text-white transition-colors" size={28} />,
      title: "Full Stack Web Development",
      description: "End-to-end web applications built from scratch using React/Next.js for frontend and Node.js/Express for backend."
    },
    {
      icon: <Layers className="text-secondaryAccent group-hover:text-white transition-colors" size={28} />,
      title: "Frontend Engineering",
      description: "Pixel-perfect, highly responsive, and interactive user interfaces styled with Tailwind CSS and optimized for performance."
    },
    {
      icon: <Cpu className="text-primaryAccent group-hover:text-white transition-colors" size={28} />,
      title: "Backend & API Development",
      description: "Secure and scalable RESTful APIs, database design (MongoDB/PostgreSQL), and robust server-side architecture."
    },
    {
      icon: <Zap className="text-secondaryAccent group-hover:text-white transition-colors" size={28} />,
      title: "Performance & Optimization",
      description: "Speed optimization, SEO auditing, and modernizing existing web apps to deliver seamless digital experiences."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-darkBg/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryAccent to-secondaryAccent">Offer</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Specialized services tailored to bring your digital ideas to life with high quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-cardBg border border-gray-800 rounded-2xl p-6 shadow-xl group hover:-translate-y-2 hover:scale-[1.02] hover:border-primaryAccent/60 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-gradient-to-br from-primaryAccent/20 to-secondaryAccent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="p-3.5 rounded-xl bg-gray-900 border border-gray-800 w-fit mb-6 group-hover:bg-primaryAccent/20 group-hover:border-primaryAccent/40 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primaryAccent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}