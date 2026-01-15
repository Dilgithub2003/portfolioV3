import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
export function HeroSection() {
  return <section id="hero" className="flex items-center justify-center min-h-screen px-4 pt-20 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 to-white sm:px-6 lg:px-8">
      <div className="grid items-center w-full grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-2">
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
      }} className="order-2 text-center lg:order-1 lg:text-left">
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
            <span className="inline-block px-3 py-1 mb-6 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
              Available for Opportunities
            </span>
          </motion.div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Hi, I am <br />
            <span className="text-blue-600">Thilina Dilshan</span>
          </h1>

          <h2 className="mb-6 text-xl font-medium text-gray-600 sm:text-2xl">
            Software Engineering Undergraduate
          </h2>

          <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed text-gray-600 lg:mx-0">
            An undergraduate at the University of Sri Jayewardenepura with a
            deep passion for technology and innovation. As a tech enthusiast and
            continuous learner, I'm always eager to explore emerging trends and
            stay ahead in the ever-evolving tech landscape.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a href="/ThilinaDilshanCV.pdf" download // Placeholder for CV
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
              <Download className="w-5 h-5 mr-2" />
              Get CV
            </a>
            <a href="#contact" className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-700 transition-colors bg-white border border-gray-300 rounded-lg sm:w-auto hover:bg-gray-50">
              Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start">
            <a href="https://github.com/Dilgithub2003" className="text-gray-400 transition-colors hover:text-gray-900">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/thilina-dilshan-3718b92a3/" className="text-gray-400 transition-colors hover:text-blue-600">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:avgthilinadilshan@gmail.com" className="text-gray-400 transition-colors hover:text-red-500">
              <Mail className="w-6 h-6" />
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
      }} className="relative flex justify-center order-1 lg:order-2 lg:justify-end">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-100 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 bg-purple-100 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

            {/* Image Container */}
            <div className="relative w-full h-full overflow-hidden bg-white border-4 border-white shadow-2xl rounded-2xl">
              <div className="flex items-center justify-center w-full h-full text-gray-400 bg-gray-100">
                {/* Placeholder for user image */}
                
                
                 <img
                 src="/thilina dilshan portfolio.png" 
                 alt="Thilina Dilshan"
                 className="object-cover w-full h-full bg-gray-300/50"
                 />
                 
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}