import React from 'react';
import { Shield, Router, Network, Cable, Settings } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="tentang" className="relative w-full bg-slate-50 py-16 text-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Tentang Saya</h2>
          <p className="mt-2 text-slate-600">Latar belakang, keahlian, dan minat profesional</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p>
              Saya adalah seorang Network Engineer dengan minat kuat di bidang Teknik Komputer dan Jaringan (TKJ), keamanan siber, dan teknologi terkini. Saya fokus pada desain, implementasi, dan pemeliharaan infrastruktur jaringan yang aman, andal, dan skalabel.
            </p>
            <p>
              Saya terbiasa mengerjakan routing, switching, konfigurasi perangkat jaringan, serta analisis performa dan troubleshooting untuk memastikan layanan berjalan optimal.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <Cable className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Routing</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">Static & dynamic routing (OSPF/EIGRP/BGP) untuk konektivitas efisien.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <Network className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Switching</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">VLAN, trunking, dan STP untuk segmentasi dan ketahanan jaringan.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <Settings className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Konfigurasi Perangkat</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">Router, switch, firewall, dan perangkat wireless untuk kebutuhan bisnis.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Analisis & Keamanan</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">Monitoring, logging, dan best practice keamanan siber untuk mitigasi risiko.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
