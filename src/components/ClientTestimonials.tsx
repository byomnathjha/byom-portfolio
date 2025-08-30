'use client';

import React from 'react';
import { Star } from 'lucide-react';

const ClientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Harris",
      position: "Marketing Director",
      avatar: "/avatar1.jpg",
      rating: 5,
      text: "Duncan truly understood my vision and turned it into impactful designs. The results went beyond my expectations!",
      bgColor: "bg-white",
      borderColor: "border-gray-200"
    },
    {
      id: 2,
      name: "Michael Lee",
      position: "Product Manager", 
      avatar: "/avatar2.jpg",
      rating: 5,
      text: "He took the time to understand our goals and delivered a design that resonated perfectly with our audience.",
      bgColor: "bg-white",
      borderColor: "border-gray-200"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      position: "CEO",
      avatar: "/avatar3.jpg",
      rating: 5,
      text: "His design skills are unmatched. He transformed my ideas into a high-performing, visually striking website.",
      bgColor: "bg-white",
      borderColor: "border-gray-200"
    },
    {
      id: 4,
      name: "Laura Bennett",
      position: "Small Business Owner",
      avatar: "/avatar4.jpg",
      rating: 5,
      text: "As a small business owner, I appreciated how stress-free Duncan made the process.",
      bgColor: "bg-white",
      borderColor: "border-gray-200"
    },
    {
      id: 5,
      name: "David Chen",
      position: "Startup Founder",
      avatar: "/avatar5.jpg",
      rating: 5,
      text: "Outstanding creativity and professionalism. Duncan delivered exactly what we needed for our brand launch.",
      bgColor: "bg-white",
      borderColor: "border-gray-200"
    },
    {
      id: 6,
      name: "Emma Wilson",
      position: "E-commerce Manager",
      avatar: "/avatar6.jpg",
      rating: 5,
      text: "The attention to detail and user experience focus made our website conversion rates increase significantly.",
      bgColor: "bg-white",
      borderColor: "border-gray-200"
    }
  ];

  // Duplicate testimonials for seamless loop
  const extendedTestimonials = [...testimonials, ...testimonials];

  const StatCard = ({ number, label, sublabel, bgColor, textColor }: { 
    number: string; 
    label: string; 
    sublabel?: string;
    bgColor: string; 
    textColor: string; 
  }) => (
    <div className={`${bgColor} rounded-3xl p-8 text-center ${textColor} min-w-[320px] h-[280px] flex flex-col justify-center shadow-lg`}>
      <div className="text-6xl lg:text-7xl font-black mb-3">
        {number}
      </div>
      <div className="text-lg font-semibold mb-2 opacity-90">
        {label}
      </div>
      {sublabel && (
        <div className="text-sm opacity-70 font-medium">
          {sublabel}
        </div>
      )}
    </div>
  );

  const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
    <div className={`${testimonial.bgColor} ${testimonial.borderColor} rounded-3xl p-8 border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[320px] h-[280px] flex flex-col justify-between`}>
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_: undefined, i: number) => (
          <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      {/* Testimonial Text */}
      <p className="text-gray-700 mb-6 leading-relaxed text-sm flex-grow">
        "{testimonial.text}"
      </p>
      
      {/* Client Info */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center overflow-hidden shadow-md">
          <div className="text-white font-bold text-lg">
            {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
          </div>
        </div>
        <div>
          <div className="font-bold text-gray-900 text-lg">
            {testimonial.name}
          </div>
          <div className="text-sm text-gray-600 font-medium">
            {testimonial.position}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 overflow-hidden" id="testimonials">
      <div className="px-6 max-w-7xl mx-auto mb-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            WHAT MY CLIENTS SAY
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Here's what my clients have shared about their experiences 
            working with me. Their trust and satisfaction motivate me to 
            continue delivering designs that make an impact.
          </p>
        </div>

        {/* Statistics Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-center text-white shadow-xl">
            <div className="text-5xl font-black mb-2">10+</div>
            <div className="text-lg font-semibold opacity-90">Happy Clients</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 text-center text-white shadow-xl">
            <div className="text-5xl font-black mb-2">98%</div>
            <div className="text-lg font-semibold opacity-90">Satisfaction Rate</div>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-center text-white shadow-xl">
            <div className="text-5xl font-black mb-2">150%</div>
            <div className="text-lg font-semibold opacity-90">Revenue Growth</div>
          </div>
        </div>
      </div>

      {/* Animated Testimonials Carousel */}
      <div className="relative">
        {/* First Row - Moving Right */}
        <div className="mb-8">
          <div className="flex animate-scroll-right gap-8">
            {extendedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Second Row - Moving Left with Stats Cards */}
        <div className="mb-8">
          <div className="flex animate-scroll-left gap-8">
            <StatCard 
              number="50+" 
              label="Happy Clients"
              sublabel="Worldwide partnerships"
              bgColor="bg-gradient-to-br from-gray-800 to-gray-900" 
              textColor="text-white"
            />
            {extendedTestimonials.slice(2).map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
            <StatCard 
              number="98%" 
              label="Satisfaction"
              sublabel="Client happiness rate"
              bgColor="bg-gradient-to-br from-orange-500 to-red-500" 
              textColor="text-white"
            />
            <StatCard 
              number="200%" 
              label="Growth"
              sublabel="Average revenue boost"
              bgColor="bg-gradient-to-br from-blue-600 to-purple-600" 
              textColor="text-white"
            />
          </div>
        </div>

        {/* Third Row - Moving Right */}
        <div>
          <div className="flex animate-scroll-right gap-8">
            {extendedTestimonials.slice(1).map((testimonial, index) => (
              <TestimonialCard key={`row3-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Styles for Animation */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientTestimonials;