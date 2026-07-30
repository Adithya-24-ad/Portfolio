import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';
import Section from './Section';
import { fadeUp } from '../utils/animation';
import { contactItems, profile } from '../utils/profile';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setErrors((current) => ({ ...current, [event.target.name]: '' }));
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (form.name.trim().length < 2) nextErrors.name = 'Enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email.';
    if (form.message.trim().length < 10) nextErrors.message = 'Message must be at least 10 characters.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(initialForm);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Start a conversation.">
      <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div variants={fadeUp} className="glass rounded-lg p-6">
          <p className="text-base font-semibold uppercase tracking-[0.18em] text-cyan-200">Contact Details</p>
          <div className="mt-6 space-y-3">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const inner = (
                <span className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                  <Icon className="shrink-0 text-cyan-300" size={18} />
                  <span className="min-w-0 break-words text-sm text-slate-200">{item.value}</span>
                </span>
              );
              return item.href ? (
                <a key={item.label} className="focus-ring block rounded-lg" href={item.href}>
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}
          </div>
        </motion.div>
        <motion.form variants={fadeUp} className="glass rounded-lg p-6" onSubmit={submit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-200">Name</span>
              <input
                className="focus-ring w-full rounded-md border border-white/10 bg-slate-950/50 px-4 py-3 text-white"
                name="name"
                value={form.name}
                onChange={update}
                autoComplete="name"
              />
              {errors.name && <span className="mt-2 block text-sm text-red-300">{errors.name}</span>}
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-200">Email</span>
              <input
                className="focus-ring w-full rounded-md border border-white/10 bg-slate-950/50 px-4 py-3 text-white"
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                autoComplete="email"
              />
              {errors.email && <span className="mt-2 block text-sm text-red-300">{errors.email}</span>}
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-semibold text-slate-200">Message</span>
            <textarea
              className="focus-ring min-h-36 w-full resize-y rounded-md border border-white/10 bg-slate-950/50 px-4 py-3 text-white"
              name="message"
              value={form.message}
              onChange={update}
            />
            {errors.message && <span className="mt-2 block text-sm text-red-300">{errors.message}</span>}
          </label>
          <button className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">
            <Send size={18} />
            Send Message
          </button>
          {sent && <p className="mt-4 text-sm text-cyan-100">Your email app has been opened.</p>}
        </motion.form>
      </div>
    </Section>
  );
}
