'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-slate-100 bg-white relative z-10 glass-card">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-semibold text-text-main">
          &copy; {currentYear} Leena Singh. All rights reserved.
        </p>
        <p className="text-xs text-paragraph flex items-center gap-1">
          Made with <span className="text-rose-500 animate-pulse">❤️</span> using Next.js, Tailwind CSS and Three.js
        </p>
      </div>
    </footer>
  );
}
