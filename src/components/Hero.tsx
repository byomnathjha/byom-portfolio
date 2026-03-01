'use client';

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Pure Center Zoom & Fade Animation for the Image
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // Smooth fade and scale for the new premium status badge
  const badgeScale = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);
  const badgeOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 }
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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
    setTimeout(handleResize, 100);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden font-sans text-gray-900 flex items-center justify-center pt-16">
        
        {/* Clean Background Video & Overlay */}
        <div className="absolute inset-0 z-0">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="/bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div> {/* Slightly darkened overlay for better contrast */}
        </div>
        
        {/* Main Hero Content */}
        <div ref={mainRef} className="relative z-10 flex items-center justify-center w-full max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div 
            className="w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-x-12 items-center w-full">
              
              {/* Left Column - Name & Title */}
              <div className="md:col-span-4 flex flex-col justify-center min-w-0">
                <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 text-center md:text-left w-full">
                  <p className="text-sm md:text-base text-white/90 drop-shadow-lg font-medium tracking-widest uppercase truncate">
                    BYOM NATH JHA
                  </p>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-black text-white drop-shadow-2xl leading-tight md:leading-[0.9] tracking-tight w-full">
                    FULLSTACK
                  </h1>
                </motion.div>
              </div>

              {/* Center Column - Pure Zoom & Fade Image */}
              <div className="md:col-span-4 flex justify-center order-first md:order-none relative z-20">
                <motion.div 
                  className="relative"
                  style={{ 
                    scale: imageScale, 
                    opacity: imageOpacity,
                  }}
                >
                  <div className="w-64 h-80 sm:w-80 sm:h-96 bg-gray-200 rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-white/10 relative z-10 border border-white/20">
                    <Image
                      src="/byom.jpg"
                      alt="Byom Nath Jha - Fullstack Engineer"
                      width={400}
                      height={500}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                </motion.div>
              </div>

              {/* Right Column - Title & Description */}
              <div className="md:col-span-4 flex flex-col justify-center min-w-0">
                <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 text-center md:text-left w-full">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-black text-white drop-shadow-2xl leading-tight md:leading-[0.9] tracking-tight w-full">
                    ENGINEER
                  </h1>
                  <p className="text-sm md:text-lg text-white/90 drop-shadow-lg leading-relaxed max-w-sm mx-auto md:mx-0">
                    I'm an India-based fullstack engineer crafting beautiful, performant web experiences.
                  </p>
                  <motion.a
                    variants={itemVariants}
                    href="/resume.pdf"
                    download="Byom_Nath_Jha_Resume.pdf"
                    className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-blue-500 bg-white hover:bg-gray-100 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download Resume
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}