import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Section from './Section';
import { contactItems, profile } from '../utils/profile';
import { fadeUp } from '../utils/animation';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A focused foundation in AI, data, and software.">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div variants={fadeUp} className="glass rounded-lg p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-300">{profile.intro}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contactItems.slice(0, 3).map((item) => {
              const Icon = item.icon;
              const content = (
                <span className="flex min-w-0 items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                  <Icon className="shrink-0 text-cyan-300" size={18} />
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.18em] text-slate-500">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-words text-sm font-medium text-slate-100">
                      {item.value}
                    </span>
                  </span>
                </span>
              );
              return item.href ? (
                <a key={item.label} className="focus-ring rounded-lg" href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="glass rounded-lg p-6 sm:p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200">
            <Calendar size={24} />
          </div>
          <p className="mt-6 text-base font-semibold uppercase tracking-[0.18em] text-cyan-200">Academic Journey</p>
          <p className="mt-4 leading-7 text-slate-300">
            Started the B.Tech Artificial Intelligence & Data Science program in 2023, with
            expected graduation in 2027.
          </p>
          <div className="mt-6 flex gap-3">
            <span className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100">
              AI & DS
            </span>
            <span className="rounded-md border border-blue-300/20 bg-blue-300/10 px-3 py-2 text-sm text-blue-100">
              2023-2027
            </span>
          </div>
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Interests
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
