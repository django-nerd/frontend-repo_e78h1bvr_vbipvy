import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transform Ideas Into Scalable Digital Products
          </h2>
          <p className="mt-4 text-gray-600">
            Nexora Digital is a lean, senior team helping startups and enterprises move faster.
            We ship high-quality software with a data-driven approach, focusing on what truly
            moves the needle. We build with React, Next.js, Node.js, Python, Flutter, and
            deploy on AWS, Vercel, and modern cloud-native stacks.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            'Lean Delivery',
            'Modern Stacks',
            'Measurable Outcomes',
          ].map((title) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">
                We keep teams small, automate the boring parts, and focus on impact. Expect clarity,
                speed, and craftsmanship in every engagement.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
