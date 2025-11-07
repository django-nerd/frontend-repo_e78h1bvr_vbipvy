import React from 'react';
import { Code2, Smartphone, Server, Boxes } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Website Development',
    desc: 'Custom, fast, SEO-friendly websites that convert visitors into customers.'
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web App Development',
    desc: 'Scalable apps with intuitive UX and robust backends built for growth.'
  },
  {
    icon: Server,
    title: 'IT Consultation & Integration',
    desc: 'Strategic planning, cloud solutions, and workflow automation that saves time.'
  },
  {
    icon: Boxes,
    title: 'SaaS Product Design',
    desc: 'Validate, design, and launch SaaS platforms with confidence and speed.'
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full bg-gradient-to-b from-white to-cyan-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-3 text-gray-600">
            Designed for speed, clarity, and outcomes. We ship production-grade solutions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
