import React from 'react';
import { motion } from 'framer-motion';
import { Award, BadgeCheck, Code2, Trophy } from 'lucide-react';
import EmptyState from './EmptyState';
import Section from './Section';
import { fadeUp } from '../utils/animation';
import { profile } from '../utils/profile';

const iconMap = {
  certifications: BadgeCheck,
  achievements: Trophy,
  coding: Code2,
};

function ListGrid({ items, emptyLabel, type }) {
  const Icon = iconMap[type] || Award;
  if (!items.length) return <EmptyState label={emptyLabel} />;

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <motion.div key={`${item.title || item.label}-${index}`} variants={fadeUp} className="glass rounded-lg p-6">
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200">
            <Icon size={20} />
          </div>
          <p className="text-lg font-bold text-white">{item.title || item.label}</p>
          {item.issuer && <p className="mt-2 text-sm text-cyan-100">{item.issuer}</p>}
          {item.description && <p className="mt-4 leading-7 text-slate-300">{item.description}</p>}
          {item.url && (
            <a className="mt-5 inline-flex text-sm font-semibold text-cyan-200 hover:text-white" href={item.url}>
              View profile
            </a>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Credentials and completed learning.">
      <ListGrid items={profile.certifications} emptyLabel="Certifications" type="certifications" />
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognitions, milestones, and highlights.">
      <ListGrid items={profile.achievements} emptyLabel="Achievements" type="achievements" />
      <div className="mt-6">
        <ListGrid items={profile.codingProfiles} emptyLabel="Coding profiles" type="coding" />
      </div>
    </Section>
  );
}
