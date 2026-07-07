'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Soft Blob */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full gradient-blob pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main">Contact Me</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
          <p className="text-paragraph text-sm sm:text-base">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: Contact Info & Map Placeholder */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-text-main">Contact Information</h3>
              <p className="text-sm text-paragraph leading-relaxed">
                Feel free to contact me via email or phone. I usually respond within 24 hours.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <Mail className="w-5 h-5" />, title: 'Email', value: 'ls1434626@gmail.com', href: 'mailto:ls1434626@gmail.com' },
                  { icon: <Phone className="w-5 h-5" />, title: 'Phone', value: '+91 6266435741', href: 'tel:+916266435741' },
                  { icon: <MapPin className="w-5 h-5" />, title: 'Location', value: 'Durg, Chhattisgarh, India', href: 'https://maps.google.com/?q=Durg,Chhattisgarh' },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.title === 'Location' ? '_blank' : undefined}
                    rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-md transition-all duration-200 glass-card"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-paragraph">{item.title}</h4>
                      <p className="text-sm font-bold text-text-main hover:text-primary transition-colors mt-0.5">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Custom Premium Map Placeholder */}
            <div className="rounded-2xl border border-slate-100 p-6 bg-white relative overflow-hidden shadow-sm aspect-video flex flex-col justify-between glass-card select-none">
              <div className="absolute inset-0 bg-slate-50 opacity-40" />
              {/* Map grid lines simulation */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-25" />
              {/* Pulsing Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-primary border-2 border-white shadow-md"></span>
                </span>
                <span className="px-2.5 py-1 rounded-md bg-text-main text-white text-[10px] font-bold shadow-md tracking-wider">
                  DURG, CG
                </span>
              </div>
              <div className="relative z-10 flex justify-between items-end w-full">
                <span className="text-[10px] font-bold text-paragraph uppercase tracking-wider">Chhattisgarh, India</span>
                <a
                  href="https://maps.google.com/?q=Durg,Chhattisgarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-100 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  Open Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="lg:col-span-7 p-8 rounded-2xl border border-slate-100 shadow-xl bg-white flex flex-col justify-between glass-card"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-paragraph uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-text-main focus:outline-none focus:border-primary focus:bg-white transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-paragraph uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-text-main focus:outline-none focus:border-primary focus:bg-white transition-all"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-paragraph uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-text-main focus:outline-none focus:border-primary focus:bg-white transition-all"
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-paragraph uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-text-main focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status Message */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center gap-3 text-emerald-800 text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>Your message has been sent successfully! I will get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 flex items-center gap-3 text-rose-800 text-sm">
                  <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                  <span>Please fill out all required fields.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 px-6 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/10 hover:bg-primary/95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
