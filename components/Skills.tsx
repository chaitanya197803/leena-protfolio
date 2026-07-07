'use client';

import { motion } from 'framer-motion';

const technicalSkills = [
  { name: 'MS Office', level: 90 },
  { name: 'Computer Operations', level: 85 },
  { name: 'Content Writing', level: 88 },
  { name: 'SEO Writing', level: 80 },
  { name: 'Internet Research', level: 92 },
  { name: 'Documentation', level: 88 },
];

const professionalSkills = [
  { name: 'Communication', level: 92 },
  { name: 'Teamwork', level: 88 },
  { name: 'Leadership', level: 85 },
  { name: 'Creativity', level: 90 },
  { name: 'Time Management', level: 85 },
  { name: 'Problem Solving', level: 86 },
  { name: 'Adaptability', level: 90 },
  { name: 'Classroom Management', level: 88 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg-secondary relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main">My Skills</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
          <p className="text-paragraph text-sm sm:text-base">
            A comprehensive breakdown of my technical proficiencies and professional core abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Technical Skills Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-text-main border-b border-slate-200 pb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full inline-block" />
              Technical Skills
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-text-main">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200/60 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-text-main border-b border-slate-200 pb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-accent rounded-full inline-block" />
              Professional Skills
            </h3>
            <div className="space-y-5">
              {professionalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-text-main">{skill.name}</span>
                    <span className="text-accent font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200/60 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
