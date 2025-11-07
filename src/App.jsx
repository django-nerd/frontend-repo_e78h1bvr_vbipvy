import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* SEO Meta */}
      <head>
        <title>Nexora Digital — Lean. Smart. Scalable.</title>
        <meta
          name="description"
          content="Nexora Digital is a lean SaaS digital agency delivering modern website design, SaaS development, and IT consulting. We help startups and enterprises build scalable digital products."
        />
        <meta name="keywords" content="digital agency, SaaS development, website design, IT consulting" />
      </head>

      <main className="font-sans antialiased">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}

export default App;
