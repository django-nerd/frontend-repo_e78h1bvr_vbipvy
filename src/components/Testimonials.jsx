import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'Nexora shipped our MVP in weeks, not months. Clean code, clear communication, great results.',
    name: 'Elena Martins',
    role: 'Founder, Valora AI',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop&auto=format'
  },
  {
    quote: 'They transformed our legacy stack and automated key workflows. Massive time saver for our ops.',
    name: 'Marcus Lee',
    role: 'COO, ShipFast Logistics',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&h=200&fit=crop&auto=format'
  },
  {
    quote: 'Our new website doubled inbound leads. Their team is lean, focused, and highly capable.',
    name: 'Priya Desai',
    role: 'Marketing Lead, Bloom Retail',
    avatar: 'https://images.unsplash.com/photo-1541534401786-2077eed87a56?q=80&w=200&h=200&fit=crop&auto=format'
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-gradient-to-b from-white to-cyan-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Clients Say</h2>
          <p className="mt-3 text-gray-600">Trusted by founders and teams across industries.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-700">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
