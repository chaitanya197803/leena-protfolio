'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Science (B.Sc)',
    institution: 'Bharti College, Durg',
    stream: 'PCB (Physics, Chemistry & Biology)',
    period: '2021 – 2024',
    performance: '68%',
    description: 'Graduated with a B.Sc. in the PCB stream, developing strong scientific knowledge, analytical thinking, and problem-solving skills.',
  },
  {
    degree: 'Higher Secondary (12th)',
    institution: 'Government H.S. School Baghera',
    stream: 'Science Stream',
    period: '2020 – 2021',
    performance: '86%',
    description: 'Completed higher secondary education with distinction, focusing on core sciences and mathematics.',
  },
  {
    degree: 'Secondary School (10th)',
    institution: 'Government H.S. School Baghera',
    stream: 'General Curriculum',
    period: '2018 – 2019',
    performance: '77%',
    description: 'Completed general secondary education with strong performance across all subjects.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-bg-secondary relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main">Education</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
          <p className="text-paragraph text-sm sm:text-base">
            My academic journey and scholastic accomplishments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-16">
            {educationData.map((edu, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-stretch">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-md z-10">
                    <GraduationCap className="w-4 h-4 text-primary" />
                  </div>

                  {/* Spacer or Content depending on left/right alignment */}
                  <div className="flex-1 md:pr-12 md:text-right hidden md:block">
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                        className="p-6 rounded-2xl border border-slate-100 shadow-sm bg-white glass-card"
                      >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-primary bg-primary/10 mb-3">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.period}
                        </span>
                        <h3 className="text-lg font-bold text-text-main">{edu.degree}</h3>
                        <p className="text-primary font-medium text-sm mt-0.5">{edu.institution}</p>
                        {edu.stream && <p className="text-xs text-paragraph mt-1">{edu.stream}</p>}
                        <div className="flex items-center justify-end gap-1 text-xs text-accent font-bold mt-2">
                          <Award className="w-4 h-4" />
                          <span>Score: {edu.performance}</span>
                        </div>
                        {edu.description && (
                          <p className="text-xs text-paragraph leading-relaxed border-t border-slate-50 pt-3 mt-3">
                            {edu.description}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* Center Node gap space */}
                  <div className="w-8 hidden md:block" />

                  {/* Spacer or Content */}
                  <div className="flex-1 md:pl-12 pl-10">
                    {(!isEven || typeof window !== 'undefined') && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                        // Force render on mobile even if even
                        className={`p-6 rounded-2xl border border-slate-100 shadow-sm bg-white glass-card ${
                          isEven ? 'md:hidden' : ''
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-primary bg-primary/10 mb-3">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.period}
                        </span>
                        <h3 className="text-lg font-bold text-text-main">{edu.degree}</h3>
                        <p className="text-primary font-medium text-sm mt-0.5">{edu.institution}</p>
                        {edu.stream && <p className="text-xs text-paragraph mt-1">{edu.stream}</p>}
                        <div className="flex items-center gap-1 text-xs text-accent font-bold mt-2">
                          <Award className="w-4 h-4" />
                          <span>Score: {edu.performance}</span>
                        </div>
                        {edu.description && (
                          <p className="text-xs text-paragraph leading-relaxed border-t border-slate-50 pt-3 mt-3">
                            {edu.description}
                          </p>
                        )}
                      </motion.div>
                    )}

                    {/* Desktop counterpart for odd index */}
                    {!isEven && (
                      <div className="hidden" /> // Spacer placeholder
                    )}

                    {/* Mobile fallback layout for even items */}
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                        className="p-6 rounded-2xl border border-slate-100 shadow-sm bg-white glass-card hidden md:block"
                      >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-primary bg-primary/10 mb-3">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.period}
                        </span>
                        <h3 className="text-lg font-bold text-text-main">{edu.degree}</h3>
                        <p className="text-primary font-medium text-sm mt-0.5">{edu.institution}</p>
                        {edu.stream && <p className="text-xs text-paragraph mt-1">{edu.stream}</p>}
                        <div className="flex items-center gap-1 text-xs text-accent font-bold mt-2">
                          <Award className="w-4 h-4" />
                          <span>Score: {edu.performance}</span>
                        </div>
                        {edu.description && (
                          <p className="text-xs text-paragraph leading-relaxed border-t border-slate-50 pt-3 mt-3">
                            {edu.description}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
