'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, School, PenTool } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    title: 'B.Sc Graduate',
    highlight: 'PCB stream',
    desc: 'Graduated with a Bachelor of Science degree in Physics, Chemistry, and Biology, establishing a strong scientific foundation.',
  },
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: '86% in 12th Board',
    highlight: 'Government H.S. School Baghera',
    desc: 'Scored distinction marks (86%) in state board examinations, placing among top students in the district.',
  },
  {
    icon: <Award className="w-6 h-6 text-accent" />,
    title: '77% in 10th Board',
    highlight: 'Government H.S. School Baghera',
    desc: 'Secured high first division (77%) in matriculation examinations.',
  },
  {
    icon: <School className="w-6 h-6 text-emerald-500" />,
    title: 'School Teaching Experience',
    highlight: 'Indian Kids Academy',
    desc: 'Direct classroom teaching experience, delivering lessons and guiding primary school student development.',
  },
  {
    icon: <PenTool className="w-6 h-6 text-pink-500" />,
    title: 'Professional Content Writing',
    highlight: 'Aanandi Technosoft',
    desc: 'Authored SEO-optimized website copy, articles, and blogs, creating tangible impact on search rankings.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main">Achievements</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
          <p className="text-paragraph text-sm sm:text-base">
            Scholastic and vocational milestones that mark my professional progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md bg-slate-50/50 flex flex-col justify-between glass-card transition-all"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center">
                  {ach.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-text-main">{ach.title}</h3>
                  <p className="text-xs text-primary font-semibold">{ach.highlight}</p>
                </div>
                <p className="text-xs text-paragraph leading-relaxed">{ach.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
