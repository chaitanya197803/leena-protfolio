'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const experiences = [
  {
    role: 'Content Writer',
    company: 'Aanandi Technosoft',
    period: 'April 2025 – January 2026',
    responsibilities: [
      'Created highly engaging, SEO-friendly content to drive digital visibility.',
      'Authored informative blog posts and articles targeting various industry topics.',
      'Created optimized and clear website content for different layout needs.',
      'Conducted in-depth topic research and competitor analysis before drafts.',
      'Optimized legacy content templates to boost search result ranking.',
      'Ensured high-quality delivery aligned with strict release timelines.',
    ],
  },
  {
    role: 'School Teacher',
    company: 'Indian Kids Academy',
    period: 'October 2024 – April 2025',
    responsibilities: [
      'Delivered daily classroom teaching for primary sections with interactive learning methods.',
      'Created lesson planning charts and customized study modules.',
      'Monitored individual student development, grading, and behavioral progress.',
      'Maintained efficient classroom management and student safety guidelines.',
      'Created a positive, inclusive, and encouraging learning environment.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main">Work Experience</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
          <p className="text-paragraph text-sm sm:text-base">
            A history of my professional employment and core duties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 15, delay: index * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
              className="p-8 rounded-2xl border border-slate-100 shadow-sm bg-gradient-to-b from-white to-slate-50/50 flex flex-col justify-between transition-shadow duration-300 glass-card"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-main leading-tight">{exp.role}</h3>
                    <p className="text-primary font-semibold text-sm mt-1">{exp.company}</p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-xs font-semibold text-paragraph bg-slate-100/80 px-3 py-1.5 rounded-lg w-max">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-3.5">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-paragraph leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-primary/75 mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
