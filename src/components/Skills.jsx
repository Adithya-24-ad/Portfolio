import React from 'react';
import { motion } from 'framer-motion';
import EmptyState from './EmptyState';
import Section from './Section';
import { fadeUp } from '../utils/animation';
import { profile } from '../utils/profile';

function ChipGroup({ title, items }) {
  return (
    <motion.div variants={fadeUp} className="glass rounded-lg p-5">
      <p className="mb-4 text-lg font-bold text-white">{title}</p>
      {items.length ? (
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-400">Verified details not available yet.</p>
      )}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Capabilities organized for quick scanning.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ChipGroup title="Programming Languages" items={profile.programmingLanguages} />
        <ChipGroup title="Frameworks & Libraries" items={profile.frameworks} />
        <ChipGroup title="Databases" items={profile.databases} />
        <ChipGroup title="Tools & Platforms" items={profile.tools} />
        <ChipGroup title="Soft Skills" items={profile.softSkills} />
      </div>
    </Section>
  );
}
