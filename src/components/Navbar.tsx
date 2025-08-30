'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const controls = useAnimation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      controls.start('open');
      document.body.style.overflow = 'hidden';
    } else {
      controls.start('closed');
      document.body.style.overflow = 'auto';
    }
  }, [open, controls]);

  const toggleMenu = () => setOpen(!open);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blogs', href: '#blogs' },
  ];

  const menuVariants = {
    closed: { x: '100%', transition: { type: 'spring', stiffness: 400, damping: 40 } },
    open: { x: 0, transition: { type: 'spring', stiffness: 400, damping: 40, delayChildren: 0.2 } },
  };

  const linkVariants = {
    closed: { y: 50, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  const desktopItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-white/10 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Name */}
            <motion.div variants={desktopItemVariants}>
              <Link href="#" className="flex items-center gap-2">
                <Image
                  src="/byom.jpg"
                  alt="Byom Nath Jha"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full"
                />
                <span className={`font-bold tracking-tight hidden sm:block text-lg md:text-xl ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Byom Nath Jha
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation Links */}
            <motion.div className="hidden md:flex items-center space-x-10 lg:space-x-14" variants={desktopItemVariants}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-semibold md:text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 ${
                    isScrolled
                      ? 'text-gray-900 hover:text-gray-700'
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>

            {/* Contact Button & Mobile Menu Button */}
            <motion.div className="flex items-center space-x-4 md:space-x-0" variants={desktopItemVariants}>
              <Link
                href="#contact"
                className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg active:scale-95 ${
                  isScrolled ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                Let's Talk
                <ArrowUpRight size={18} />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className={`${isScrolled ? 'text-gray-900' : 'text-white'} md:hidden p-2 z-[60] relative`}
                aria-label="Toggle menu"
              >
                {open ? <X size={28} /> : <Menu size={28} />}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="space-y-8" variants={menuVariants} initial="closed" animate="open" exit="closed">
              {navLinks.map((link) => (
                <motion.div variants={linkVariants} key={link.name}>
                  <Link
                    href={link.href}
                    className="block text-4xl md:text-5xl font-bold text-white hover:text-gray-300 transition-all duration-200 transform hover:scale-105"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={linkVariants}>
                <Link
                  href="#contact"
                  className="mt-6 flex items-center justify-center gap-2 w-full px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Let's Talk
                  <ArrowUpRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
