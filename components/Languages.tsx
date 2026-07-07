'use client';

import { motion } from 'framer-motion';
import { Languages as LangIcon, MessageSquareCode } from 'lucide-react';

const languages = [
  { name: 'Hindi', type: 'Native / Bilingual', desc: 'Primary language for communication, creative writing, and documentation.' },
  { name: 'English', type: 'Professional Proficiency', desc: 'Comfortable with academic research, formal writing, and professional instruction.' },
  { name: 'Chhattisgarhi', type: 'Native Dialect', desc: 'Fluent verbal articulation, enabling effective local and regional connection.' },
];

export default function Languages() {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-main flex items-center justify-center gap-2">
            <LangIcon className="w-6 h-6 text-primary" />
            Languages
          </h2>
          <div className="h-0.5 w-12 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md bg-white text-center flex flex-col items-center justify-between glass-card transition-all"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <MessageSquareCode className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-text-main">{lang.name}</h3>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold text-primary bg-primary/10">
                    {lang.type}
                  </span>
                </div>
                <p className="text-xs text-paragraph leading-relaxed">
                  {lang.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
