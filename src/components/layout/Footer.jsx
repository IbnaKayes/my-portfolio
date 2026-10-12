"use client";

import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-6 bg-darkBg text-center">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          © 2026 <span className="text-white font-semibold">{personalInfo.name}</span>. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs font-mono">
          Designed & Built with <span className="text-primaryAccent">Next.js</span> & <span className="text-secondaryAccent">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}