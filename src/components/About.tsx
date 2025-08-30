'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Phone, Mail, Globe } from 'lucide-react';

const About = () => {
  // Explicitly typing variants for better type safety in TypeScript
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: {
        staggerChildren: 0.2,
      }
    },
  };

  // Explicitly typing variants for better type safety in TypeScript
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut' 
      } 
    },
  };

  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 font-sans text-gray-900" id="about">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto flex items-center justify-center -z-10">
        <div className="w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob absolute"></div>
        <div className="w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob-2 absolute"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content with Animations */}
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header */}
          <div className="space-y-6">
            <motion.h2 
              className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
              variants={itemVariants}
            >
              ABOUT ME
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              Hi, I'm Byom Nath — a fullstack engineer with a passion for building scalable, secure, and user-centric applications. My journey is about transforming complex problems into simple, efficient, and impactful digital solutions — from intuitive frontends to robust backends.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-2">
                2+
              </div>
              <div className="text-gray-700 font-medium text-sm md:text-base">
                Years of Experience
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-2">
                20+
              </div>
              <div className="text-gray-700 font-medium text-sm md:text-base">
                Completed Projects
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-2">
                10+
              </div>
              <div className="text-gray-700 font-medium text-sm md:text-base">
                Clients Worldwide
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Info and Socials */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="text-gray-900 font-semibold mb-1">Let's Connect</div>
              <a href="mailto:byomnathjha@gmail.com" className="text-gray-600 flex items-center gap-2 transition-colors hover:text-blue-500">
                <Mail size={16} />
                byomnathjha@gmail.com
              </a>
              <a href="tel:+916264077137" className="text-gray-600 flex items-center gap-2 mt-2 transition-colors hover:text-blue-500">
                <Phone size={16} />
                +91 6264077137
              </a>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="text-gray-900 font-semibold mb-1">Follow Me</div>
              <div className="flex gap-2">
                <a href="#" aria-label="X profile" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                  <span className="font-bold text-lg text-gray-700">𝕏</span>
                </a>
                <a href="#" aria-label="Instagram profile" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                  <span className="font-bold text-lg text-gray-700">IG</span>
                </a>
                <a href="#" aria-label="Behance profile" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                  <span className="font-bold text-lg text-gray-700">BE</span>
                </a>
                <a href="#" aria-label="Portfolio link" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                  <Globe size={18} className="text-gray-700" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Call to action button */}
          <motion.div variants={itemVariants}>
            <a 
              href="#story" 
              className="inline-block px-8 py-4 bg-gray-900 text-white hover:bg-gray-700 rounded-full font-medium transition-colors duration-300 transform hover:scale-105"
            >
              EXPLORE MY WORK
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image with interactive elements */}
        <motion.div 
          className="relative order-first lg:order-last"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <div className="relative bg-gray-200 rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] max-w-sm mx-auto">
            <Image
              src="/widescreen.jpg"
              alt="Byom Nath Jha - Fullstack Engineer"
              width={500}
              height={667}
              quality={90}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Animated decorative element */}
          <motion.div 
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-blue-500 rounded-full opacity-10"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180] 
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;