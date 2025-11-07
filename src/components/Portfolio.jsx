import React from 'react';

const projects = [
  {
    title: 'FinTech SaaS Dashboard',
    challenge: 'Complex data visualization with real-time metrics.',
    solution: 'Built a Next.js + Node stack with live streaming via WebSockets.',
    outcome: 'Improved onboarding by 32% and reduced churn by 18%.',
    image: 'https://images.unsplash.com/photo-1612913761426-a5bb4f0c9992?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW5UZWNoJTIwU2FhUyUyMERhc2hib2FyZHxlbnwwfDB8fHwxNzYyNDkzOTU1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'E-Commerce Revamp',
    challenge: 'Slow load times and low mobile conversions.',
    solution: 'Migrated to a headless architecture with React and a CDN-first strategy.',
    outcome: 'Page speed +58% and mobile conversion +26%.',
    image: 'https://images.unsplash.com/photo-1657812159103-1b2a52a7f5e8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFLUNvbW1lcmNlJTIwUmV2YW1wfGVufDB8MHx8fDE3NjI0OTM5NTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Logistics Workflow Automation',
    challenge: 'Manual data entry and siloed systems.',
    solution: 'Integrated ERP + custom APIs with serverless automation.',
    outcome: 'Saved ~400 hrs/month and cut errors by 45%.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop'
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Selected Work</h2>
          <p className="mt-3 text-gray-600">A few projects showing how we think and ship.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600"><span className="font-medium text-gray-800">Challenge:</span> {p.challenge}</p>
                <p className="mt-1 text-sm text-gray-600"><span className="font-medium text-gray-800">Solution:</span> {p.solution}</p>
                <p className="mt-1 text-sm text-gray-600"><span className="font-medium text-gray-800">Outcome:</span> {p.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
