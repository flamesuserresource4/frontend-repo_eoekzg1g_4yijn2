import React from 'react';
import Spline from '@splinetool/react-spline';
import { Download, Mail, Shield, Cpu, Server } from 'lucide-react';

const HeroSection = () => {
  const handleDownloadCV = () => {
    const cvContent = `CV — Shello Ardiansyah\n\nPeran: Network Engineer\nTagline: Menghubungkan sistem, mengamankan jaringan, membangun masa depan digital.\n\nKeahlian Utama:\n- Routing & Switching\n- Konfigurasi Perangkat (Router, Switch, Firewall)\n- Analisis & Troubleshooting Jaringan\n- Keamanan Siber Dasar\n\nMinat:\n- Teknik Komputer & Jaringan (TKJ)\n- Keamanan Siber\n- Teknologi Terkini\n\nKontak:\nEmail: shelloardiansyaharrofieska@gmail.com`;
    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Shello_Ardiansyah_CV.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="beranda" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/80" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 py-20 md:flex-row md:gap-16">
        <div className="w-full md:w-1/2">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300 ring-1 ring-blue-400/30">
            <Shield className="h-4 w-4" /> Keamanan & Keandalan
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Shello Ardiansyah
          </h1>
          <p className="mt-2 text-lg font-medium text-blue-200">Network Engineer</p>
          <p className="mt-4 max-w-prose text-slate-200">
            Menghubungkan sistem, mengamankan jaringan, membangun masa depan digital.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button onClick={handleDownloadCV} className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <Download className="h-4 w-4" /> Download CV
            </button>
            <a href="#kontak" className="inline-flex items-center gap-2 rounded-md bg-slate-700 px-4 py-2 text-white shadow hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400">
              <Mail className="h-4 w-4" /> Hubungi Saya
            </a>
          </div>

          <div className="mt-8 grid max-w-lg grid-cols-3 gap-4 text-slate-300">
            <div className="flex items-center gap-2 rounded-md bg-slate-800/60 p-3 ring-1 ring-slate-700">
              <Cpu className="h-5 w-5 text-blue-400" />
              <span className="text-sm">Routing</span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-slate-800/60 p-3 ring-1 ring-slate-700">
              <Server className="h-5 w-5 text-blue-400" />
              <span className="text-sm">Switching</span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-slate-800/60 p-3 ring-1 ring-slate-700">
              <Shield className="h-5 w-5 text-blue-400" />
              <span className="text-sm">Keamanan</span>
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1542219550-37153d387c47?q=80&w=1200&auto=format&fit=crop"
            alt="Foto Profil"
            className="mx-auto hidden h-64 w-64 rounded-full border-4 border-blue-500 object-cover shadow-lg ring-1 ring-slate-700 md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
