'use client';

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: {
        staggerChildren: 0.2,
      }
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const mainRef = useRef<HTMLDivElement>(null);
  
  const [showHi, setShowHi] = useState(false);

  // Corrected variants for the "Hi" message by nesting the spring properties inside a 'transition' object.
  const hiVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { // This transition object is what the 'Variants' type expects.
        type: "spring", 
        stiffness: 300, 
        damping: 20,
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (mainRef.current) {
        const h1Elements = mainRef.current.querySelectorAll('h1');
        h1Elements.forEach(h1 => {
          if (h1.scrollWidth > h1.clientWidth) {
            let currentSize = parseFloat(getComputedStyle(h1).fontSize);
            h1.style.fontSize = `${currentSize * 0.95}px`;
          }
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-16 font-sans text-gray-900">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Background Gradient & Blob - now over video */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-80 h-80 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob-2 absolute bottom-1/4 right-1/3 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Main Hero Content */}
      <div ref={mainRef} className="relative z-10 flex items-center justify-center min-h-[90vh] px-4 md:px-8">
        <motion.div 
          className="w-full max-w-[1400px] mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Three Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-16 items-center">
            
            {/* Left Column - Name & Title */}
            <div className="md:col-span-4 flex flex-col justify-center">
              <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 text-center md:text-left">
                <p className="text-sm md:text-base text-white/90 drop-shadow-lg font-medium tracking-[0.25em] uppercase">
                  BYOM NATH JHA
                </p>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl leading-tight md:leading-[0.9]">
                  FULLSTACK
                </h1>
              </motion.div>
            </div>

            {/* Center Column - Image with Interactive Elements */}
            <div className="md:col-span-4 flex justify-center order-first md:order-none">
              <motion.div 
                className="relative"
                variants={imageVariants}
              >
                <div className="w-64 h-80 sm:w-80 sm:h-96 bg-gray-200 rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-white/50">
                  <Image
                    src="/byom.jpg"
                    alt="Byom Nath Jha - Fullstack Engineer"
                    width={400}
                    height={500}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Wave Icon with more subtle animation */}
                <motion.div 
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl shadow-xl cursor-pointer hover:bg-blue-600 transition-colors"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: 1,
                    rotate: [0, -15, 15, -15, 15, 0]
                  }}
                  transition={{ 
                    scale: { delay: 1.2, type: "spring", stiffness: 200 },
                    rotate: { delay: 1.8, duration: 1.5, repeat: Infinity, repeatDelay: 3 }
                  }}
                  onAnimationComplete={() => setShowHi(true)} 
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 20,
                    transition: { duration: 0.3 }
                  }}
                >
                  👋
                </motion.div>
                
                {/* Conditionally render and animate the "Hi" message */}
                {showHi && (
                  <motion.div
                    className="absolute -bottom-4 right-0 sm:-bottom-6 sm:right-0 bg-white px-4 py-2 rounded-full shadow-lg text-lg font-bold text-blue-500"
                    variants={hiVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    Hi!
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Right Column - Title & Description */}
            <div className="md:col-span-4 flex flex-col justify-center">
              <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 text-center md:text-left">
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl leading-tight md:leading-[0.9]">
                  ENGINEER
                </h1>
                <p className="text-sm md:text-lg text-white/90 drop-shadow-lg leading-relaxed max-w-sm mx-auto md:mx-0">
                  I'm a India-based fullstack engineer crafting beautiful, performant web experiences.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-1/4 right-[10%] w-2 h-2 bg-blue-500 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-[20%] left-[15%] w-12 h-12 border-2 border-gray-400 rounded-lg rotate-12"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 12, opacity: 0.5 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      ></motion.div>

    </section>
  );
}