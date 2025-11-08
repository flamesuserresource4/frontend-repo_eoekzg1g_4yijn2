import React from 'react';
import { CheckCircle2, Server, Lock, Settings2 } from 'lucide-react';

const data = {
  projects: [
    {
      title: 'Desain & Implementasi Jaringan Kantor Kecil',
      desc: 'Topologi bintang dengan VLAN untuk segmentasi, QoS untuk VoIP, dan routing inter-VLAN.',
      icon: <Server className="h-5 w-5 text-blue-600" />,
    },
    {
      title: 'Simulasi Keamanan Jaringan',
      desc: 'Firewall rules, IDS dasar, dan hardening perangkat untuk mencegah akses tidak sah.',
      icon: <Lock className="h-5 w-5 text-blue-600" />,
    },
    {
      title: 'Automasi Konfigurasi',
      desc: 'Template konfigurasi dan skrip automasi untuk provisioning perangkat lebih cepat.',
      icon: <Settings2 className="h-5 w-5 text-blue-600" />,
    },
  ],
  certs: [
    'CompTIA Network+ (opsional)',
    'Cisco CCNA (opsional)',
    'MikroTik MTCNA (opsional)'
  ],
};

const ProjectsCerts = () => {
  return (
    <section id="proyek" className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Proyek & Sertifikasi</h2>
          <p className="mt-2 text-slate-600">Contoh pekerjaan dan capaian profesional</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {data.projects.map((p, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-slate-800">
                {p.icon}
                <h3 className="font-semibold">{p.title}</h3>
              </div>
              <p className="text-sm text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="mb-3 text-lg font-semibold text-slate-800">Sertifikasi</h3>
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {data.certs.map((c, i) => (
              <li key={i} className="flex items-center gap-2 rounded-md border border-slate-200 bg-white p-3 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" /> {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCerts;
