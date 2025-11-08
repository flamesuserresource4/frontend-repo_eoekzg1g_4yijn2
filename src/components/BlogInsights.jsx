import React from 'react';
import { PenLine } from 'lucide-react';

const posts = [
  {
    title: 'Trend Keamanan Siber 2025: Zero Trust dan Automasi',
    excerpt: 'Mengapa pendekatan Zero Trust menjadi standar baru dan bagaimana automasi membantu respon insiden yang lebih cepat.',
    tag: 'Keamanan',
  },
  {
    title: 'Optimasi Jaringan untuk Aplikasi Real-time',
    excerpt: 'Latensi rendah dan QoS adalah kunci pengalaman real-time. Tips konfigurasi dan monitoring yang efektif.',
    tag: 'Jaringan',
  },
  {
    title: 'Belajar dari Insiden: Postmortem Jaringan Tanpa Menyalahkan',
    excerpt: 'Membangun budaya perbaikan berkelanjutan dengan analisis insiden yang objektif dan kolaboratif.',
    tag: 'Insight',
  },
];

const BlogInsights = () => {
  return (
    <section id="blog" className="w-full bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Blog / Insight</h2>
          <p className="mt-2 text-slate-600">Artikel, opini, dan pengalaman di dunia jaringan & keamanan</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <article key={i} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-2 inline-flex items-center gap-2 text-sm text-blue-700">
                <PenLine className="h-4 w-4" /> {post.tag}
              </div>
              <h3 className="line-clamp-2 text-lg font-semibold text-slate-900 group-hover:text-blue-700">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-slate-600">{post.excerpt}</p>
              <a href="#kontak" className="mt-4 inline-block text-sm font-medium text-blue-700 hover:underline">
                Diskusikan topik ini →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;
