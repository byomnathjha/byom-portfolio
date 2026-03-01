'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Phone, Mail, Globe, ArrowUpRight } from 'lucide-react';

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 }
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 font-sans text-gray-900 bg-white" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          className="space-y-12 lg:col-span-7 pr-0 lg:pr-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <div className="space-y-6">
            <motion.h2 
              className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight"
              variants={itemVariants}
            >
              ABOUT ME
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-light"
              variants={itemVariants}
            >
              Hi, I'm <strong className="font-semibold text-gray-900">Byom Nath</strong> — an India-based fullstack engineer with a passion for building scalable, secure, and user-centric applications. My journey is about transforming complex problems into simple, efficient, and impactful digital solutions.
            </motion.p>
          </div>

          {/* Minimal Stats */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-4 border-t border-gray-100"
            variants={containerVariants}
          >
            {[
              { num: "2+", label: "Years Experience" },
              { num: "20+", label: "Projects Shipped" },
              { num: "10+", label: "Global Clients" }
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="text-4xl font-black text-gray-900 tracking-tighter mb-1">
                  {stat.num}
                </div>
                <div className="text-gray-500 font-medium text-sm tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Clean Contact & Socials */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contact</div>
              <a href="mailto:byomnathjha@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
                <Mail size={18} strokeWidth={1.5} />
                <span className="text-sm font-medium">byomnathjha@gmail.com</span>
              </a>
              <a href="tel:+916264077137" className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
                <Phone size={18} strokeWidth={1.5} />
                <span className="text-sm font-medium">+91 6264077137</span>
              </a>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Socials</div>
              <div className="flex gap-4">
                {[
                  { icon: "𝕏", label: "X" },
                  { icon: "IG", label: "Instagram" },
                  { icon: "BE", label: "Behance" },
                  { icon: <Globe size={18} strokeWidth={1.5} />, label: "Portfolio" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href="#" 
                    aria-label={social.label}
                    className="w-10 h-10 border border-gray-200 hover:border-gray-900 rounded-full flex items-center justify-center transition-all duration-300 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    <span className="font-medium text-sm flex items-center justify-center">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Button */}
          <motion.div variants={itemVariants} className="pt-6">
            <a 
              href="#story" 
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full text-sm font-semibold tracking-wide transition-transform hover:scale-105 active:scale-95"
            >
              EXPLORE MY WORK
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Clean Image Reveal */}
        <motion.div 
          className="relative lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none"
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100">
            <Image
              src="/widescreen.jpg"
              alt="Byom Nath Jha - Fullstack Engineer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;