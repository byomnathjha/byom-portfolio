import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

/**
 * A responsive and stylish footer component for a portfolio website.
 * It includes a copyright notice and social media links.
 */
function Footer() {
  return (
    // Changed py-10 to py-6 to reduce the internal vertical gap
    <footer className="relative bg-slate-50 text-slate-600 py-6 px-4 font-sans border-t border-slate-200">
      {/* Background Gradient & Blob - Kept subtle to match your theme */}
      <div className="absolute inset-0 z-0 opacity-10 overflow-hidden pointer-events-none">
        <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="w-56 h-56 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto max-w-7xl flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        
        {/* Copyright and Name Section */}
        <div className="text-center md:text-left text-sm font-medium tracking-wide">
          <p>&copy; {new Date().getFullYear()} Byom Nath Jha. All rights reserved.</p>
          <p className="mt-1 text-slate-500">
            Crafted with{' '}
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition-colors font-semibold">
              React
            </a>{' '}
            &{' '}
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition-colors font-semibold">
              Tailwind CSS
            </a>.
          </p>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex space-x-5">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-slate-400 hover:text-slate-900 hover:scale-110 transition-all duration-200"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-slate-400 hover:text-blue-600 hover:scale-110 transition-all duration-200"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="text-slate-400 hover:text-sky-500 hover:scale-110 transition-all duration-200"
          >
            <Twitter size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

// The main App component to render the Footer
export default function App() {
  return (
    // Removed min-h-screen and flex-grow logic that was forcing the footer to the bottom of the page
    <div className="bg-slate-50 font-sans text-slate-900">
      
      {/* This is where your main portfolio content (like the ContactSection) goes */}
      <main>
      </main>
      
      <Footer />
    </div>
  );
}