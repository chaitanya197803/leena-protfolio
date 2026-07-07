'use client';

import { motion } from 'framer-motion';
import { BookOpen, PenTool, Compass, Music, Mic, Book } from 'lucide-react';

const interests = [
  { icon: <BookOpen className="w-6 h-6" />, name: 'Teaching', desc: 'Explaining complex concepts in simplified ways.' },
  { icon: <PenTool className="w-6 h-6" />, name: 'Content Writing', desc: 'Crafting articles, blog posts, and website copies.' },
  { icon: <Compass className="w-6 h-6" />, name: 'Traveling', desc: 'Exploring cultural landmarks and natural landscapes.' },
  { icon: <Music className="w-6 h-6" />, name: 'Dancing', desc: 'Expressing emotions through rhythm and motion.' },
  { icon: <Mic className="w-6 h-6" />, name: 'Singing', desc: 'Performing classical and light contemporary songs.' },
  { icon: <Book className="w-6 h-6" />, name: 'Reading', desc: 'Devouring books on biology, literature, and development.' },
];

export default function Interests() {
  return (
    <section id="interests" className="py-24 bg-bg-secondary relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main">Interests</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
          <p className="text-paragraph text-sm sm:text-base">
            Activities and pursuits that spark my curiosity and creative expression.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md bg-white flex flex-col items-center text-center gap-4 glass-card"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-accent text-white flex items-center justify-center shadow-lg shadow-primary/20">
                {interest.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-text-main">{interest.name}</h3>
                <p className="text-xs text-paragraph mt-1 leading-relaxed">{interest.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
