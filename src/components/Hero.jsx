import React from 'react';
import { Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-white" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/85 via-white/75 to-white" />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
          <Rocket className="h-3.5 w-3.5" aria-hidden="true" /> Nexora Digital
        </span>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Build smarter digital products.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
          Lean, modern, and measurable solutions — from sleek websites to scalable apps and strategic IT consulting.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-cyan-600 px-6 py-3 text-white shadow-sm transition hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Get a Free Consultation
          </a>
          <a
            href="#services"
            className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
          >
            Explore Services
          </a>
        </div>
        <p className="mt-6 text-xs uppercase tracking-widest text-gray-500">
          Lean. Smart. Scalable.
        </p>
      </div>
    </section>
  );
};

export default Hero;
