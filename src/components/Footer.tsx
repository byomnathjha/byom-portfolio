import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

/**
 * A responsive and stylish footer component for a portfolio website.
 * It includes a copyright notice and social media links, styled to match the hero section.
 */
function Footer() {
  return (
    <footer className="relative bg-[#F0F2F5] text-gray-700 py-10 px-4 font-sans border-t border-gray-300">
      {/* Background Gradient & Blob - A more subtle version to match the hero */}
      <div className="absolute inset-0 z-0 opacity-10 overflow-hidden">
        <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="w-56 h-56 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob-2 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto max-w-7xl flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
        
        {/* Copyright and Name Section */}
        <div className="text-center md:text-left text-sm font-medium tracking-wide">
          <p>&copy; {new Date().getFullYear()} Byom Nath Jha. All rights reserved.</p>
          <p className="mt-1">
            Crafted with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors font-semibold">React</a> & <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors font-semibold">Tailwind CSS</a>.
          </p>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-200 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-200 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-200 transform hover:scale-110"
          >
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

// The main App component to render the Footer
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F2F5]">
      {/* This is where your main portfolio content would go. */}
      <main className="flex-grow flex items-center justify-center p-6">
        
      </main>
      <Footer />
    </div>
  );
}
