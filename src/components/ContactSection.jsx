import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontak" className="w-full bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Kontak</h2>
          <p className="mt-2 text-slate-300">Saya terbuka untuk kolaborasi, diskusi, atau kesempatan baru.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-800/60 p-6">
            <div className="mb-4 inline-flex items-center gap-2 text-blue-300">
              <Mail className="h-5 w-5" /> Email
            </div>
            <a href="mailto:shelloardiansyaharrofieska@gmail.com" className="text-lg font-medium text-blue-400 hover:underline">shelloardiansyaharrofieska@gmail.com</a>
            <p className="mt-3 text-sm text-slate-300">Jangan ragu mengirimkan pesan, saya akan merespons secepatnya.</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-slate-800 bg-slate-800/60 p-6">
            <div className="grid grid-cols-1 gap-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Nama" className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Pesan" rows="4" className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <Send className="h-4 w-4" />
              {sent ? 'Terkirim!' : 'Kirim Pesan'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
