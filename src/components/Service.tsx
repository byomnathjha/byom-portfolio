'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  video?: string; // Updated to optional video
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "UI/UX DESIGN",
    subtitle: "User-Centric Interfaces",
    description:
      "I design clean, modern, and user-focused interfaces that balance aesthetics with usability, ensuring smooth user journeys.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Design Systems & Components",
      "Usability Testing & Iteration"
    ],
    video: "/ui.mp4",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "WEB DEVELOPMENT",
    subtitle: "Fullstack Engineering",
    description:
      "I build scalable, secure, and responsive websites with modern frameworks, covering everything from front-end experiences to backend APIs.",
    features: [
      "Next.js & React Development",
      "Node.js & Express",
      "Database Integration (SQL/NoSQL)",
      "Performance Optimization"
    ],
    video: "/web.mp4",
    color: "from-green-500 to-blue-600"
  },
  {
    id: 3,
    title: "DATA ANALYTICS",
    subtitle: "Insights & Forecasting",
    description:
      "I turn raw data into meaningful insights through visualization, trend analysis, and predictive modeling for informed decision-making.",
    features: [
      "Data Cleaning & Preprocessing",
      "Exploratory Data Analysis",
      "Interactive Dashboards",
      "Forecasting & Trend Analysis"
    ],
    video: "/datavid.mp4",
    color: "from-yellow-500 to-orange-600"
  },
  {
    id: 4,
    title: "VIDEO EDITING",
    subtitle: "Creative Storytelling",
    description:
      "I create visually compelling video content that communicates stories effectively, blending creativity with professional editing tools.",
    features: [
      "Cinematic Video Editing",
      "Motion Graphics & Transitions",
      "Color Grading & Audio Sync",
      "YouTube/Promo Video Production"
    ],
    video: "/editing.mp4",
    color: "from-pink-500 to-red-600"
  }
];

// Re-ordering the services array for a more natural flow
const orderedServices = [services[0], services[2], services[1], services[3]];

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const toggleService = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const currentService = services.find(s => s.id === (hoveredService || expandedService));

  return (
    <section className="relative min-h-screen bg-gray-50 py-24 md:py-32 font-sans text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header and Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.h2 
                className="text-5xl lg:text-6xl font-black leading-tight text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                WHAT I DO.
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I am a full-stack creative, turning ideas into engaging digital products with a focus on human-centered design and pixel-perfect execution.
              </motion.p>
            </div>

            {/* Services Accordion List */}
            <div className="space-y-4">
              {orderedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  <div 
                    className={`flex items-center justify-between p-6 rounded-2xl cursor-pointer transition-all duration-300 group ${
                      expandedService === service.id 
                        ? 'bg-white shadow-lg ring-2 ring-gray-100' 
                        : 'bg-white/50 backdrop-blur-sm hover:bg-white/90'
                    }`}
                    onClick={() => toggleService(service.id)}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className="flex items-center space-x-4">
                      <span className={`text-2xl font-black ${
                        expandedService === service.id 
                          ? `bg-gradient-to-r ${service.color} bg-clip-text text-transparent`
                          : 'text-gray-900'
                      }`}>
                        {service.id}.
                      </span>
                      <h3 className={`text-xl font-bold tracking-wide transition-colors ${
                        expandedService === service.id 
                          ? `bg-gradient-to-r ${service.color} bg-clip-text text-transparent`
                          : 'text-gray-900 group-hover:text-gray-700'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: expandedService === service.id ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        expandedService === service.id ? `bg-gradient-to-r ${service.color}` : 'bg-gray-200 group-hover:bg-gray-300'
                      }`}
                    >
                      <span className={`text-lg font-bold ${expandedService === service.id ? 'text-white' : 'text-gray-600'}`}>
                        +
                      </span>
                    </motion.div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden bg-white rounded-b-2xl shadow-inner"
                      >
                        <div className="px-6 pb-6 pt-2 space-y-4">
                          <div className={`h-1 w-16 bg-gradient-to-r ${service.color} rounded-full`} />
                          <h4 className="text-lg font-semibold text-gray-800">
                            {service.subtitle}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

{/* Right Side - Interactive Video Panel */}
<div className="relative h-[600px] hidden lg:block">
  <motion.div 
    className="absolute inset-0 p-8 flex items-center justify-center"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1, delay: 0.4 }}
  >
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
      {/* Background Video */}
      <video
        src="/workspace.mp4"  // your main background video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-3xl"
      />

      {/* Dynamic Service Video Overlay */}
      <AnimatePresence>
        {currentService && currentService.video && (
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <video
              src={currentService.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    {/* Decorative Border & Text */}
    <div className="absolute inset-0 rounded-3xl border-4 border-gray-100/50" />
    <AnimatePresence>
      {currentService && (
        <motion.div
          key={`text-${currentService.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-10 left-10 p-4 bg-white/80 rounded-xl shadow-lg"
        >
          <h3 className={`text-xl font-bold bg-gradient-to-r ${currentService.color} bg-clip-text text-transparent`}>
            {currentService.title}
          </h3>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
</div>
        </div>
      </div>
    </section>
  );
}
