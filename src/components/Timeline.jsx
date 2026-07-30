import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import EmptyState from './EmptyState';
import Section from './Section';
import { fadeUp } from '../utils/animation';
import { profile } from '../utils/profile';

function TimelineList({ items, icon: Icon, emptyLabel }) {
  if (!items.length) return <EmptyState label={emptyLabel} />;

  return (
    <div className="relative space-y-6 before:absolute before:left-5 before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-cyan-300/25">
      {items.map((item, index) => (
        <motion.div key={`${item.degree || item.role}-${index}`} variants={fadeUp} className="relative pl-14">
          <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
            <Icon size={18} />
          </div>
          <div className="glass rounded-lg p-6">
            {(item.start || item.end) && (
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                {[item.start, item.end].filter(Boolean).join(' - ')}
              </p>
            )}
            <p className="mt-2 text-xl font-bold text-white">{item.degree || item.role}</p>
            {(item.institution || item.company) && (
              <p className="mt-1 text-sm text-slate-300">{item.institution || item.company}</p>
            )}
            {item.status && <p className="mt-3 text-sm text-blue-100">{item.status}</p>}
            {item.description && <p className="mt-4 leading-7 text-slate-300">{item.description}</p>}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Internships and professional exposure.">
      <TimelineList items={profile.internships} icon={BriefcaseBusiness} emptyLabel="Internship details" />
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic timeline">
      <TimelineList items={profile.education} icon={GraduationCap} emptyLabel="Education details" />
    </Section>
  );
}
