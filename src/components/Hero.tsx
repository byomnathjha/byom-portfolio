'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- Scroll Animations ---
  
  // 1. Mathematically Perfect Text Translation
  // 2rem is the exact equivalent of the md:gap-8 utility class.
  // This ensures both words travel the precise distance to share the exact same left-edge axis.
  const leftTextX = useTransform(scrollYProgress, [0, 0.4], ["calc(100% + 2rem)", "0%"]);
  const leftTextY = useTransform(scrollYProgress, [0, 0.4], ["-45%", "0%"]);
  
  const rightTextX = useTransform(scrollYProgress, [0, 0.4], ["calc(-100% - 2rem)", "0%"]);
  const rightTextY = useTransform(scrollYProgress, [0, 0.4], ["45%", "0%"]);
  
  const textScale = useTransform(scrollYProgress, [0, 0.4], [1.15, 1]);

  // 2. Image Reveal
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  // 3. Sub-content Fade In
  const extraContentOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const extraContentY = useTransform(scrollYProgress, [0.3, 0.6], [20, 0]);

  useEffect(() => {
    const handleResize = () => {
      if (mainRef.current) {
        const h1Elements = mainRef.current.querySelectorAll('h1');
        h1Elements.forEach(h1 => {
          // Reset size to allow true measurement, then clamp if needed
          h1.style.fontSize = '';
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
    <section ref={containerRef} className="relative h-[250vh]">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden font-sans text-gray-900 flex items-center justify-center pt-16">
        
        {/* Background Video & Overlay */}
        <div className="absolute inset-0 z-0">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="/bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        
        {/* Main Hero Content */}
        <div ref={mainRef} className="relative z-10 flex items-center justify-center w-full max-w-[1400px] mx-auto px-4 md:px-8">
          
          {/* Changed to a clean 3-column grid with a fixed gap size to guarantee layout math */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-8 items-center w-full">
            
            {/* Left Column */}
            <div className="flex flex-col justify-center min-w-0 z-40 pointer-events-none">
              <div className="relative w-full flex justify-center md:justify-start">
                
                <motion.div 
                  style={{ opacity: extraContentOpacity, y: extraContentY }}
                  className="absolute bottom-full mb-4 md:mb-6 left-0 right-0 md:right-auto text-center md:text-left pointer-events-auto"
                >
                  <p className="text-sm md:text-base text-white/90 drop-shadow-lg font-medium tracking-widest uppercase truncate">
                    BYOM NATH JHA
                  </p>
                </motion.div>
                
                <motion.h1 
                  style={{ x: leftTextX, y: leftTextY, scale: textScale }}
                  // origin-left ensures left edges stay pinned when scaling down
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-black text-white drop-shadow-2xl leading-none tracking-tight w-full origin-left text-center md:text-left"
                >
                  FULLSTACK
                </motion.h1>

              </div>
            </div>

            {/* Center Column - Image */}
            <div className="flex justify-center order-first md:order-none relative z-20">
              <motion.div 
                className="relative"
                style={{ scale: imageScale, opacity: imageOpacity }}
              >
                <div className="w-64 h-80 sm:w-80 sm:h-96 bg-gray-200 rounded-[2rem] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] ring-4 ring-white/10 relative z-10 border border-white/20">
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

            {/* Right Column */}
            <div className="flex flex-col justify-center min-w-0 z-30 pointer-events-none">
              <div className="relative w-full flex justify-center md:justify-start">
                
                <motion.h1 
                  style={{ x: rightTextX, y: rightTextY, scale: textScale }}
                  // CHANGED to origin-left so it matches FULLSTACK's anchor point identically 
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-black text-white drop-shadow-2xl leading-none tracking-tight w-full origin-left text-center md:text-left"
                >
                  ENGINEER
                </motion.h1>
                
                <motion.div 
                  style={{ opacity: extraContentOpacity, y: extraContentY }}
                  className="absolute top-full mt-4 md:mt-8 left-0 right-0 md:right-auto pointer-events-auto flex flex-col items-center md:items-start space-y-6 w-full"
                >
                  <p className="text-sm md:text-lg text-white/90 drop-shadow-lg leading-relaxed max-w-sm mx-auto md:mx-0 text-center md:text-left">
                    I'm an India-based fullstack engineer crafting beautiful, performant web experiences.
                  </p>
                  <a
                    href="/resume.pdf"
                    download="Byom_Nath_Jha_Resume.pdf"
                    className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-black bg-white hover:scale-105 active:scale-95 transition-transform duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download Resume
                  </a>
                </motion.div>

              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}