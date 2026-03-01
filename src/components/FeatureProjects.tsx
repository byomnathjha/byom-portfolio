'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Simple brand showcase (only worked-with brands)
const brands = [
  { name: 'Dusala India', logo: '/dusala-logo.png', website: 'https://dusala.com' },
  { name: 'Scraperr', logo: '/scraperr-logo.png', website: '#' },
  { name: 'CrowHub', logo: '/crowhub-logo.png', website: 'https://crowhub.in' },
  { name: 'Edulyt India', logo: '/edulyt-logo.png', website: '#' },
  { name: 'CollegeTips', logo: '/collegetips-logo.png', website: '#' },
];

// Duplicate for infinite smooth loop
const loopBrands = [...brands, ...brands];

export default function ExperienceShowcase() {
  return (
    <section className="relative py-24 bg-white overflow-hidden" id="experience">
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          WORKED WITH AMAZING BRANDS
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          Companies and startups I've collaborated with
        </p>
      </div>

      {/* sliding brand strip */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16 w-max items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 28 }}
        >
          {loopBrands.map((brand, index) => (
            <a
              key={index}
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition whitespace-nowrap"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl shadow-sm">
                <Image src={brand.logo} alt={`${brand.name} logo`} width={48} height={48} className="object-contain" />
              </div>
              <span className="text-xl font-semibold text-gray-700 tracking-wide">{brand.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
