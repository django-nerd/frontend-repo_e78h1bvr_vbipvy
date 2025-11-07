import React from 'react';

const CTABanner = () => {
  return (
    <section className="relative w-full py-20" aria-label="Call to Action">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-600 to-blue-600" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-white/10 p-10 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white">Let’s build something great together.</h3>
              <p className="mt-2 text-cyan-100">Book a free strategy call and get a tailored roadmap for your product.</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-cyan-700 shadow-sm transition hover:bg-cyan-50"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
