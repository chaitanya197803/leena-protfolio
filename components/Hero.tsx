'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, Download, ArrowRight } from 'lucide-react';
import { TypingText } from './AnimatedText';

export default function Hero() {
  const titles = [
    'B.Sc Graduate',
    'Content Writer',
    'School Teacher',
    'Computer Operator'
  ];

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-white to-bg-secondary"
    >
      {/* Soft Ambient Glow in Background */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full gradient-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full gradient-blob pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-7 text-left space-y-6 flex flex-col justify-center order-2 md:order-1"
        >
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary bg-primary/10 tracking-wide uppercase"
            >
              Welcome to my portfolio
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-main leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Leena Singh</span>
            </h1>
            <div className="text-xl sm:text-2xl font-medium text-paragraph min-h-[40px]">
              I am a <TypingText texts={titles} />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-paragraph leading-relaxed max-w-xl border-l-4 border-primary/30 pl-4 italic"
          >
            Leena Singh is a B.Sc. graduate with a strong academic foundation and a willingness to learn and grow professionally. She is a dedicated, hardworking, and responsible individual with excellent communication and problem-solving skills. Passionate about education, content creation, and continuous learning, she aims to contribute effectively to organizational success while developing her professional skills.
          </motion.p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 pt-2">
            <motion.a
              href="#contact"
              onClick={handleScrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-full shadow-lg shadow-primary/20 hover:bg-primary/95 transition-all duration-300 group"
            >
              Contact Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3.5 bg-white text-primary border border-slate-100 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 glass-card"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-4">
            {[
              { icon: <Mail className="w-5 h-5" />, href: 'mailto:ls1434626@gmail.com', label: 'Email' },
              { icon: <Phone className="w-5 h-5" />, href: 'tel:+916266435741', label: 'Phone' },
              {
                icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                ),
                href: '#',
                label: 'LinkedIn',
              },
              {
                icon: (
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                ),
                href: '#',
                label: 'GitHub',
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') || social.href === '#' ? '_blank' : undefined}
                rel={social.href.startsWith('http') || social.href === '#' ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-paragraph hover:text-primary hover:border-primary/20 transition-all duration-200 glass-card"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: Floating Circular Image */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="relative"
          >
            {/* Blurred Glowing Background Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-2xl scale-95 animate-pulse" />

            {/* Glowing Gradient Border & Image Wrapper */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.03 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1.5 bg-gradient-to-tr from-primary via-secondary to-accent shadow-2xl flex items-center justify-center overflow-hidden"
            >
              <div className="w-full h-full rounded-full bg-white p-1 overflow-hidden relative">
                <Image
                  src="/profile.png"
                  alt="Leena Singh Profile"
                  fill
                  priority
                  className="rounded-full object-cover aspect-square hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
