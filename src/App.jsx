import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsCerts from './components/ProjectsCerts';
import BlogInsights from './components/BlogInsights';
import ContactSection from './components/ContactSection';
import { Network, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/40 bg-slate-900/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
          <a href="#beranda" className="inline-flex items-center gap-2 font-semibold">
            <Network className="h-5 w-5 text-blue-400" /> Shello Ardiansyah
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#tentang" className="text-slate-300 hover:text-white">Tentang</a>
            <a href="#proyek" className="text-slate-300 hover:text-white">Proyek</a>
            <a href="#blog" className="text-slate-300 hover:text-white">Blog</a>
            <a href="#kontak" className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-500">
              <Mail className="h-4 w-4" /> Kontak
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <HeroSection />
        <AboutSection />
        <ProjectsCerts />
        <BlogInsights />
        <ContactSection />
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Shello Ardiansyah • Network Engineer • Semua hak cipta dilindungi
      </footer>
    </div>
  );
}

export default App;
