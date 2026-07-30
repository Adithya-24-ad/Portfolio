import { ExternalLink, Github } from 'lucide-react';
import EmptyState from './EmptyState';
import Section from './Section';
import { fadeUp } from '../utils/animation';
import { profile } from '../utils/profile';
import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work with clear technical context.">
      {profile.projects.length ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project) => (
            <motion.article
              key={project.name}
              variants={fadeUp}
              className="glass group flex min-h-[320px] flex-col rounded-lg p-6 transition hover:-translate-y-1"
            >
              <p className="text-xl font-bold text-white">{project.name}</p>
              <p className="mt-4 flex-1 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-md bg-cyan-300/10 px-2.5 py-1 text-xs text-cyan-100">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                {project.github && (
                  <a
                    className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-white"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    className="focus-ring inline-flex items-center gap-2 rounded-md bg-cyan-300 px-3 py-2 text-sm font-bold text-slate-950"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <EmptyState label="Project details" />
      )}
    </Section>
  );
}
