'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData(prev => ({
      ...prev,
      service: service
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will be in touch shortly.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 bg-gray-50 font-sans" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left Side - Heading & Info */}
        <div className="relative order-2 lg:order-1">
          <div className="text-center lg:text-left mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4">
              LET'S CREATE <span className="text-blue-600">SOMETHING GREAT</span> TOGETHER.
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Ready to turn your vision into a reality? Get in touch and let's discuss your project, big or small. I'm excited to hear your ideas.
            </p>
          </div>



          {/* Floating Icon */}
          <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse mx-auto lg:mx-0">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="order-1 lg:order-2 relative">
          <div className="contact-box">
            <p className="title">Contact Me</p>
            <div className="space-y-6">
              <div className="user-box">
                <input 
                  required 
                  name="name" 
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label>Full Name</label>
              </div>
              
              <div className="user-box">
                <input 
                  required 
                  name="email" 
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label>Email Address</label>
              </div>
              
              <div className="user-box dropdown-box" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`dropdown-button ${formData.service ? 'has-value' : ''}`}
                >
                  {formData.service || ''}
                </button>
                <label className={formData.service ? 'active' : ''}>Service Needed</label>
                <ChevronDown className={`dropdown-icon ${isDropdownOpen ? 'rotate-180' : ''}`} />
                
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
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
                  required 
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="textarea"
                />
                <label>Project Details</label>
              </div>
              
              <button onClick={handleSubmit} className="submit-btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom */}
      <div className="text-center mt-16 md:mt-24">
        <div className="inline-flex items-center gap-4 text-gray-400">
          <div className="w-16 h-px bg-gray-300"></div>
          <span className="text-sm font-medium">Ready to get started?</span>
          <div className="w-16 h-px bg-gray-300"></div>
        </div>
      </div>

      <style jsx>{`
        .contact-box {
          position: relative;
          width: 500px;
          max-width: 90vw;
          padding: 40px;
          background: rgba(0,0,0,.9);
          box-sizing: border-box;
          box-shadow: 0 15px 25px rgba(0,0,0,.6);
          border-radius: 10px;
        }

        .title {
          margin: 0 0 30px;
          padding: 0;
          color: #fff;
          text-align: center;
          font-size: 1.5rem;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .user-box {
          position: relative;
          margin-bottom: 30px;
        }

        .user-box input,
        .user-box .textarea {
          width: 100%;
          padding: 10px 0;
          font-size: 16px;
          color: #fff;
          border: none;
          border-bottom: 1px solid #fff;
          outline: none;
          background: transparent;
          font-family: inherit;
        }

        .user-box .textarea {
          resize: vertical;
          min-height: 60px;
        }

        .user-box label {
          position: absolute;
          top: 0;
          left: 0;
          padding: 10px 0;
          font-size: 16px;
          color: #fff;
          pointer-events: none;
          transition: .5s;
        }

        .user-box input:focus ~ label,
        .user-box input:valid ~ label,
        .user-box .textarea:focus ~ label,
        .user-box .textarea:valid ~ label,
        .user-box label.active {
          top: -20px;
          left: 0;
          color: #fff;
          font-size: 12px;
        }

        .dropdown-box {
          position: relative;
        }

        .dropdown-button {
          width: 100%;
          padding: 10px 0;
          font-size: 16px;
          color: #fff;
          border: none;
          border-bottom: 1px solid #fff;
          outline: none;
          background: transparent;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
        }

        .dropdown-button.has-value ~ label {
          top: -20px;
          font-size: 12px;
        }

        .dropdown-icon {
          position: absolute;
          right: 0;
          top: 12px;
          width: 20px;
          height: 20px;
          color: #fff;
          transition: transform 0.3s ease;
        }

        .dropdown-icon.rotate-180 {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(0,0,0,.95);
          border: 1px solid #fff;
          border-radius: 5px;
          z-index: 50;
          max-height: 200px;
          overflow-y: auto;
          margin-top: 5px;
        }

        .dropdown-item {
          width: 100%;
          padding: 12px 16px;
          color: #fff;
          background: transparent;
          border: none;
          text-align: left;
          cursor: pointer;
          transition: background 0.3s ease;
          font-family: inherit;
        }

        .dropdown-item:hover {
          background: rgba(255,255,255,.1);
        }

        .submit-btn {
          position: relative;
          display: inline-block;
          padding: 10px 20px;
          font-weight: bold;
          color: #fff;
          font-size: 16px;
          text-decoration: none;
          text-transform: uppercase;
          overflow: hidden;
          transition: .5s;
          margin-top: 20px;
          letter-spacing: 3px;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }

        .submit-btn:hover {
          background: #fff;
          color: #272727;
          border-radius: 5px;
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
          background: linear-gradient(90deg, transparent, #fff);
          animation: btn-anim1 1.5s linear infinite;
        }

        @keyframes btn-anim1 {
          0% {
            left: -100%;
          }
          50%,100% {
            left: 100%;
          }
        }

        .submit-btn span:nth-child(2) {
          top: -100%;
          right: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, transparent, #fff);
          animation: btn-anim2 1.5s linear infinite;
          animation-delay: .375s;
        }

        @keyframes btn-anim2 {
          0% {
            top: -100%;
          }
          50%,100% {
            top: 100%;
          }
        }

        .submit-btn span:nth-child(3) {
          bottom: 0;
          right: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(270deg, transparent, #fff);
          animation: btn-anim3 1.5s linear infinite;
          animation-delay: .75s;
        }

        @keyframes btn-anim3 {
          0% {
            right: -100%;
          }
          50%,100% {
            right: 100%;
          }
        }

        .submit-btn span:nth-child(4) {
          bottom: -100%;
          left: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(360deg, transparent, #fff);
          animation: btn-anim4 1.5s linear infinite;
          animation-delay: 1.125s;
        }

        @keyframes btn-anim4 {
          0% {
            bottom: -100%;
          }
          50%,100% {
            bottom: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;