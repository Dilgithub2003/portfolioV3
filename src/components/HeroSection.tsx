import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
export function HeroSection() {
  return <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              Available for Opportunities
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Hi, I am <br />
            <span className="text-blue-600">Thilina Dilshan</span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-gray-600 font-medium mb-6">
            Software Engineering Undergraduate
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
            An undergraduate at the University of Sri Jayewardenepura with a
            deep passion for technology and innovation. As a tech enthusiast and
            continuous learner, I'm always eager to explore emerging trends and
            stay ahead in the ever-evolving tech landscape.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#" // Placeholder for CV
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
              <Download className="mr-2 h-5 w-5" />
              Get CV
            </a>
            <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:avgthilinadilshan@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>

        {/* Image/Visual */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

            {/* Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white border-4 border-white">
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                {/* Placeholder for user image */}
                <div className="text-center p-4">
                  <span className="block text-6xl mb-2">👨‍💻</span>
                  <p className="text-sm">Profile Photo</p>
                  <p className="text-xs text-gray-500">
                    (Transparent BG, White Shirt)
                  </p>
                </div>
                {/* In production, replace the above div with:
                 <img
                 src="/path-to-image.png"
                 alt="Thilina Dilshan"
                 className="w-full h-full object-cover"
                 />
                 */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}