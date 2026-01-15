import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { SkillsJourney } from './components/SkillsJourney';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { ContactSection } from './components/ContactSection';
export function App() {
  return <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navigation />

      <main>
        <HeroSection />
        <SkillsJourney />
        <Education />
        <Projects />
        <Certifications />
        <ContactSection />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold text-white">TD.</span>
              <p className="text-gray-400 text-sm mt-2">
                © {new Date().getFullYear()} Thilina Dilshan. All rights
                reserved.
              </p>
            </div>

            <div className="flex space-x-6">
              <a href="#hero" className="text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
}