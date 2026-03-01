'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    'Web Design & Development',
    'Brand Identity',
    'UI/UX Prototyping',
    'Graphic Design & Illustration',
    'E-commerce Solutions',
    'Mobile App Design',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData(prev => ({ ...prev, service }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will be in touch shortly.');
    setFormData({ name: '', email: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 bg-slate-50 font-sans" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left Side - Heading & Contact Info */}
        <div className="relative order-2 lg:order-1 flex flex-col justify-center h-full">
          <div className="text-center lg:text-left mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
              LET'S CREATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">SOMETHING GREAT</span> TOGETHER.
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Ready to turn your vision into a reality? Get in touch and let's discuss your project, big or small. I'm excited to hear your ideas.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 max-w-xl mx-auto lg:mx-0">
            <div className="flex items-center gap-5 group cursor-pointer">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md shadow-slate-200/50 group-hover:scale-110 group-hover:shadow-blue-200 transition-all duration-300">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                <p className="text-lg font-medium text-slate-800 group-hover:text-blue-600 transition-colors">byomnathjha@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group cursor-pointer">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md shadow-slate-200/50 group-hover:scale-110 group-hover:shadow-blue-200 transition-all duration-300">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                <p className="text-lg font-medium text-slate-800 group-hover:text-blue-600 transition-colors">+91 6264077137</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group cursor-pointer">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md shadow-slate-200/50 group-hover:scale-110 group-hover:shadow-blue-200 transition-all duration-300">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                <p className="text-lg font-medium text-slate-800 group-hover:text-blue-600 transition-colors">Raipur, Chhattisgarh, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          <form className="contact-box" onSubmit={handleSubmit}>
            <p className="title">Send a Message</p>
            <div className="space-y-6">
              
              <div className="user-box">
                <input 
                  id="name"
                  required 
                  name="name" 
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label htmlFor="name">Full Name</label>
              </div>
              
              <div className="user-box">
                <input 
                  id="email"
                  required 
                  name="email" 
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="email">Email Address</label>
              </div>
              
              <div className="user-box dropdown-box" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`dropdown-button ${formData.service ? 'has-value' : ''}`}
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                >
                  {formData.service || ''}
                </button>
                <label className={formData.service ? 'active' : ''}>Service Needed</label>
                <ChevronDown className={`dropdown-icon ${isDropdownOpen ? 'rotate-180' : ''}`} />
                
                {isDropdownOpen && (
                  <div className="dropdown-menu" role="listbox">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        role="option"
                        aria-selected={formData.service === service}
                        onClick={() => handleServiceSelect(service)}
                        className="dropdown-item"
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="user-box">
                <textarea 
                  id="message"
                  required 
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="textarea"
                />
                <label htmlFor="message">Project Details</label>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'opacity-75 cursor-wait' : ''}`}
                disabled={isSubmitting}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-box {
          position: relative;
          width: 100%;
          max-width: 520px;
          padding: 48px;
          background: #0f172a; /* Slate 900 */
          box-sizing: border-box;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border-radius: 16px;
        }

        .title {
          margin: 0 0 36px;
          padding: 0;
          color: #fff;
          text-align: left;
          font-size: 1.75rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .user-box {
          position: relative;
          margin-bottom: 32px;
        }

        .user-box input,
        .user-box .textarea {
          width: 100%;
          padding: 10px 0;
          font-size: 16px;
          color: #f8fafc;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          outline: none;
          background: transparent;
          font-family: inherit;
          transition: border-color 0.3s ease;
        }

        .user-box input:focus,
        .user-box .textarea:focus,
        .dropdown-button:focus {
          border-bottom: 1px solid #3b82f6;
        }

        .user-box .textarea {
          resize: vertical;
          min-height: 80px;
        }

        .user-box label {
          position: absolute;
          top: 0;
          left: 0;
          padding: 10px 0;
          font-size: 16px;
          color: rgba(255,255,255,0.5);
          pointer-events: none;
          transition: 0.3s ease all;
        }

        .user-box input:focus ~ label,
        .user-box input:valid ~ label,
        .user-box .textarea:focus ~ label,
        .user-box .textarea:valid ~ label,
        .user-box label.active {
          top: -24px;
          left: 0;
          color: #3b82f6;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .dropdown-box {
          position: relative;
        }

        .dropdown-button {
          width: 100%;
          padding: 10px 0;
          font-size: 16px;
          color: #f8fafc;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          outline: none;
          background: transparent;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
          min-height: 44px;
          transition: border-color 0.3s ease;
        }

        .dropdown-button.has-value ~ label {
          top: -24px;
          font-size: 12px;
          color: #3b82f6;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .dropdown-icon {
          position: absolute;
          right: 0;
          top: 12px;
          width: 20px;
          height: 20px;
          color: rgba(255,255,255,0.5);
          transition: transform 0.3s ease;
          pointer-events: none;
        }

        .dropdown-icon.rotate-180 {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #1e293b; /* Slate 800 */
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          z-index: 50;
          max-height: 220px;
          overflow-y: auto;
          margin-top: 8px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
        }

        /* Custom Scrollbar for dropdown */
        .dropdown-menu::-webkit-scrollbar {
          width: 6px;
        }
        .dropdown-menu::-webkit-scrollbar-track {
          background: #1e293b;
          border-radius: 8px;
        }
        .dropdown-menu::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 8px;
        }

        .dropdown-item {
          width: 100%;
          padding: 14px 16px;
          color: #cbd5e1;
          background: transparent;
          border: none;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: inherit;
          font-size: 15px;
        }

        .dropdown-item:hover {
          background: rgba(59, 130, 246, 0.15);
          color: #fff;
          padding-left: 20px;
        }

        .submit-btn {
          position: relative;
          display: inline-block;
          padding: 14px 28px;
          font-weight: 600;
          color: #fff;
          font-size: 15px;
          text-decoration: none;
          text-transform: uppercase;
          overflow: hidden;
          transition: 0.5s;
          margin-top: 16px;
          letter-spacing: 2px;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: inherit;
          width: 100%;
        }

        .submit-btn:hover:not(:disabled) {
          background: #3b82f6;
          color: #fff;
          border-radius: 6px;
          box-shadow: 0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 40px #3b82f6;
        }

        .submit-btn span {
          position: absolute;
          display: block;
        }

        .submit-btn span:nth-child(1) {
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6);
          animation: btn-anim1 1.5s linear infinite;
        }

        @keyframes btn-anim1 {
          0% { left: -100%; }
          50%,100% { left: 100%; }
        }

        .submit-btn span:nth-child(2) {
          top: -100%;
          right: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, transparent, #3b82f6);
          animation: btn-anim2 1.5s linear infinite;
          animation-delay: 0.375s;
        }

        @keyframes btn-anim2 {
          0% { top: -100%; }
          50%,100% { top: 100%; }
        }

        .submit-btn span:nth-child(3) {
          bottom: 0;
          right: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(270deg, transparent, #3b82f6);
          animation: btn-anim3 1.5s linear infinite;
          animation-delay: 0.75s;
        }

        @keyframes btn-anim3 {
          0% { right: -100%; }
          50%,100% { right: 100%; }
        }

        .submit-btn span:nth-child(4) {
          bottom: -100%;
          left: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(360deg, transparent, #3b82f6);
          animation: btn-anim4 1.5s linear infinite;
          animation-delay: 1.125s;
        }

        @keyframes btn-anim4 {
          0% { bottom: -100%; }
          50%,100% { bottom: 100%; }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;