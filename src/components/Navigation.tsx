import React, { useEffect, useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#hero'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Education',
    href: '#education'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Certifications',
    href: '#certifications'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#hero" onClick={e => handleLinkClick(e, '#hero')} className="flex items-center space-x-2 text-blue-600 font-bold text-xl">
            <Code2 className="h-8 w-8" />
            <span>TD.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => handleLinkClick(e, link.href)} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                {link.name}
              </a>)}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-white border-t border-gray-100 overflow-hidden">
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
              {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => handleLinkClick(e, link.href)} className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  {link.name}
                </a>)}
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
}