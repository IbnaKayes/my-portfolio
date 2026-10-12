"use client";
import { useState, useEffect } from "react";
import { Menu, X, FileText, Sun, Moon } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // 1. Auto-hide Navbar on Scroll Down & Show on Scroll Up
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false); // Niche gele gayeb hobe
      } else {
        setShowNavbar(true); // Upore ashle dekhabe
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 2. Theme Toggle Logic
  const toggleTheme = () => {
    const nextState = !isLight;
    setIsLight(nextState);
    if (nextState) {
      document.documentElement.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsLight(true);
      document.documentElement.classList.add("light-theme");
    }
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-transform duration-300 ${
      showNavbar ? "translate-y-0" : "-translate-y-28"
    }`}>
      <nav className="w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full border bg-cardBg/80 backdrop-blur-md border-gray-800 shadow-2xl">
        
        {/* Logo / Brand */}
        <a href="#" className="text-xl font-extrabold text-white tracking-tight flex items-center gap-1 group">
          <span className="text-primaryAccent group-hover:scale-110 transition-transform">&lt;</span>
          <span>{personalInfo.name.split(" ")[0]}</span>
          <span className="text-primaryAccent group-hover:scale-110 transition-transform">/&gt;</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className="hover:text-primaryAccent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions: Theme Toggle & Resume */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full bg-gray-800 border border-gray-700 text-yellow-400 hover:text-white hover:border-primaryAccent transition-all cursor-pointer shadow-md"
          >
            {isLight ? <Moon size={18} className="text-blue-400" /> : <Sun size={18} />}
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-primaryAccent to-secondaryAccent text-darkBg font-bold text-sm hover:opacity-90 transition-all shadow-md shadow-primaryAccent/20"
          >
            <FileText size={16} /> Resume
          </a>
        </div>

        {/* Mobile Menu Toggle & Theme */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle Theme"
            className="p-2 rounded-full bg-gray-800 border border-gray-700 text-yellow-400 cursor-pointer"
          >
            {isLight ? <Moon size={16} className="text-blue-400" /> : <Sun size={16} />}
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none p-1 cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-6 right-6 bg-cardBg border border-gray-800 rounded-3xl p-6 shadow-2xl md:hidden space-y-4 z-50 backdrop-blur-lg">
          <div className="flex flex-col space-y-3 text-center">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-primaryAccent py-2 text-base font-medium transition-colors border-b border-gray-800/50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-primaryAccent to-secondaryAccent text-darkBg font-bold text-sm shadow-md"
              >
                <FileText size={18} /> View Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}