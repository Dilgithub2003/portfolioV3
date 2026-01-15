import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { SkillsJourney } from './components/SkillsJourney';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { ContactSection } from './components/ContactSection';
export function App() {
  return <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navigation />

      <main>
        <HeroSection />
        <SkillsJourney />
        <Education />
        <Projects />
        <Certifications />
        <ContactSection />
      </main>

      <footer className="py-12 text-white bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold text-white">TD.</span>
              <p className="mt-2 text-sm text-gray-400">
                © {new Date().getFullYear()} Thilina Dilshan. All rights
                reserved.
              </p>
            </div>

            <div className="flex space-x-6">
              <a href="#hero" className="text-sm text-gray-400 transition-colors hover:text-white">
                Home
              </a>
              <a href="#projects" className="text-sm text-gray-400 transition-colors hover:text-white">
                Projects
              </a>
              <a href="#contact" className="text-sm text-gray-400 transition-colors hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
}