'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';

// Project data, already well-structured
const projects = [
  {
    id: 1,
    title: "CrowHub.in Website",
    category: "Web Development",
    description:
      "I developed the official website for CrowHub.in, focusing on responsive design, intuitive UI, and seamless user experience.",
    image: "/project1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Construction Company Website",
    category: "Web Development",
    description:
      "Built a professional website for a construction company, featuring project portfolios, service listings, and contact integration.",
    image: "/project2.png",
    link: "#",
  },
  {
    id: 3,
    title: "Market Basket Analysis Project",
    category: "Data Analytics",
    description:
      "Created a web-integrated Market Basket Analysis project that analyzes customer purchasing patterns and provides actionable insights.",
    image: "/project3.png",
    link: "#",
  },
];

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(0);

  // Auto-slide functionality is correctly implemented with useEffect and cleanup
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProject((prevIndex) => (prevIndex + 1) % projects.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []); // The empty dependency array ensures this runs once

  const currentProject = projects[activeProject];

  // Animation variants are correctly defined with explicit types for clarity
  const fadeVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
  };

  const staggerVariants: Variants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.15 } },
  };

  const staggerItem: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="relative py-20 md:py-32 px-4 sm:px-6 font-sans bg-gray-50 text-gray-900"
      id="projects"
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between max-w-7xl mx-auto mb-16">
        <motion.div
          className="space-y-4 lg:space-y-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerVariants}
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
            variants={staggerItem}
          >
            FEATURED PROJECTS
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl leading-relaxed"
            variants={staggerItem}
          >
            A showcase of my recent work, blending technical skill with creative vision to solve
            unique challenges and deliver exceptional results.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex items-center gap-2 mt-8 lg:mt-0 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">Available for work</span>
        </motion.div>
      </div>

      <motion.div
        className="relative h-[450px] md:h-[600px] xl:h-[700px] max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* AnimatePresence is correctly used to handle the smooth transition between projects. */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              fill
              quality={85}
              priority={activeProject === 0}
              className="object-cover w-full h-full transition-all duration-700"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 z-10 p-8 lg:p-16 flex flex-col justify-end text-white text-center sm:text-left bg-gradient-to-t from-black/50 via-black/20 to-transparent">
          {/* AnimatePresence is correctly used here as well for the text content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-4"
            >
              <span className={`text-xs md:text-sm font-medium px-4 py-1 rounded-full bg-white/30 backdrop-blur-sm inline-block`}>
                {currentProject.category}
              </span>
              <h3 className="text-3xl md:text-5xl font-bold max-w-4xl leading-tight drop-shadow-lg">
                {currentProject.title}
              </h3>
              <p className="text-base md:text-lg max-w-2xl leading-relaxed drop-shadow-md">
                {currentProject.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <a
          href={currentProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-8 right-8 z-20 px-6 py-3 bg-white text-gray-900 rounded-full font-medium shadow-xl transition-all hover:bg-gray-100 active:scale-95 hidden sm:inline-block"
        >
          View Project
        </a>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`relative p-4 md:p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] border-2 ${
              activeProject === index
                ? 'border-blue-500 bg-blue-50 shadow-lg'
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
            }`}
            onClick={() => setActiveProject(index)}
          >
            <div className="h-16 md:h-24 rounded-xl mb-4 relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                quality={70}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="transition-colors duration-300">
              <h4 className={`font-bold text-sm md:text-base mb-1 leading-tight ${activeProject === index ? 'text-blue-900' : 'text-gray-900'}`}>
                {project.title}
              </h4>
              <p className="text-xs md:text-sm text-gray-600 opacity-90">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;