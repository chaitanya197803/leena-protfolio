'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, PenTool, MessageSquare, ShieldCheck, Smile, RefreshCw } from 'lucide-react';

const attributes = [
  { icon: <BookOpen className="w-5 h-5" />, title: 'Passion for Teaching', desc: 'Dedicated to fostering a supportive and engaging classroom environment.' },
  { icon: <Sparkles className="w-5 h-5" />, title: 'Love for Learning', desc: 'Constantly seeking new knowledge and skill development.' },
  { icon: <PenTool className="w-5 h-5" />, title: 'Content Writing Interest', desc: 'Creating optimized copy and engaging blogs with SEO best practices.' },
  { icon: <MessageSquare className="w-5 h-5" />, title: 'Communication Skills', desc: 'Articulate communicator, comfortable with presentation and instruction.' },
  { icon: <ShieldCheck className="w-5 h-5" />, title: 'Hardworking Nature', desc: 'Deeply committed to taking responsibilities and delivering quality results.' },
  { icon: <Smile className="w-5 h-5" />, title: 'Positive Attitude', desc: 'Constructive approach to solving problems and collaborating.' },
  { icon: <RefreshCw className="w-5 h-5" />, title: 'Adaptability', desc: 'Resilient and quick to learn in fast-paced professional settings.' },
];

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main">About Me</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
          <p className="text-paragraph text-sm sm:text-base">
            Get to know my professional strengths, core values, and personal driving passions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Picture Card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-[340px] aspect-square rounded-2xl overflow-hidden shadow-xl p-2 bg-white border border-slate-100 glass-card">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Leena Portrait"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Strengths & Qualities Grid */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-text-main">
              A Passionate Educator & Creative Writer
            </h3>
            <p className="text-paragraph leading-relaxed text-sm sm:text-base">
              My B.Sc. education provided me with strong scientific rigor, analytical thinking, and structural problem-solving abilities. Combining this background with my strong verbal articulation and written expression, I thrive at the intersection of instruction and creation. I strive to grow daily and leverage my multi-faceted skill set to bring value to classrooms and corporate content projects alike.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              {attributes.map((attr, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 flex gap-4 bg-white/50 glass-card"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    {attr.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-text-main">{attr.title}</h4>
                    <p className="text-xs text-paragraph leading-relaxed">{attr.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
