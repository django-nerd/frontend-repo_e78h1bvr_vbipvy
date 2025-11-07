import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-12" aria-label="Footer">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-gray-900">Nexora Digital</h4>
            <p className="mt-1 text-sm text-gray-600">Lean. Smart. Scalable.</p>
            <p className="mt-2 text-xs text-gray-500">© {new Date().getFullYear()} Nexora Digital. All rights reserved.</p>
          </div>
          <div className="flex flex-col items-center gap-3 md:items-end">
            <a id="contact" href="mailto:hello@nexora.digital" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-cyan-700">
              <Mail className="h-4 w-4" /> hello@nexora.digital
            </a>
            <div className="flex items-center gap-4 text-gray-600">
              <a href="#" aria-label="LinkedIn" className="transition hover:text-cyan-700"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="transition hover:text-cyan-700"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
