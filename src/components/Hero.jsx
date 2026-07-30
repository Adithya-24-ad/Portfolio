import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { profile } from '../utils/profile';

const typeWords = ['AI & Data Science', 'Modern Web Experiences'];

export default function Hero() {
  const typed = useTypewriter(typeWords);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-mesh px-5 pb-16 pt-32 sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      <motion.div
        className="absolute right-10 top-28 hidden h-72 w-72 rounded-full border border-cyan-200/20 lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35 }}
        >
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            {profile.title}
          </p>
          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="mt-3 block min-h-[1.2em] text-gradient">{typed}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="focus-ring inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              href="#contact"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <a
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              href={profile.socials.find((item) => item.label === 'GitHub')?.url}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              GitHub
            </a>
            {profile.resumeUrl && (
              <a
                className="focus-ring inline-flex items-center gap-2 rounded-md border border-cyan-300/25 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/10"
                href={profile.resumeUrl}
                download
              >
                <FileDown size={18} />
                Resume
              </a>
            )}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-cyan-300" />
              {profile.location}
            </span>
            <a className="inline-flex items-center gap-2 hover:text-white" href={profile.socials[0].url}>
              <Linkedin size={16} className="text-cyan-300" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          className="glass relative min-h-[420px] overflow-hidden rounded-lg p-6"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 to-blue-500" />
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-300" />
          </div>
          <div className="mt-8 space-y-4 font-mono text-sm text-slate-300">
            <p>
              <span className="text-cyan-300">const</span> developer = {'{'}
            </p>
            <p className="pl-4">
              name: <span className="text-white">&apos;{profile.name}&apos;</span>,
            </p>
            <p className="pl-4">
              focus: <span className="text-white">&apos;Artificial Intelligence & Data Science&apos;</span>,
            </p>
            <p className="pl-4">
              location: <span className="text-white">&apos;{profile.location}&apos;</span>,
            </p>
            <p className="pl-4">
              focusArea: <span className="text-white">&apos;Data Analytics & Predictive Modeling&apos;</span>,
            </p>
            <p>{'};'}</p>
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
            <p className="font-semibold text-white">Currently</p>
            <p className="mt-1">Pursuing B.Tech AI & DS, expected graduation in 2027.</p>
          </div>
        </motion.div>
      </div>
      <a
        href="#about"
        className="focus-ring absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/15 p-3 text-cyan-100 sm:inline-flex"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
