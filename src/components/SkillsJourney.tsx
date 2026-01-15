import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Server, Cpu, Layers, Terminal, Cloud } from 'lucide-react';
const timelineData = [{
  year: 'May 2013',
  title: 'HTML & CSS Basics',
  description: 'Started my journey with markup and styling, experimenting with structure, typography, and spacing.',
  icon: Code,
  color: 'bg-orange-500'
}, {
  year: 'Foundations',
  title: 'Introduction to Web Development',
  description: 'Learned basic HTML tags, semantic structure, and styling with CSS. Built static webpages and experimented with layouts. This foundation helped me understand how the web works and how content is structured visually.',
  icon: Globe,
  color: 'bg-blue-500'
}, {
  year: 'Intermediate',
  title: 'CSS Layouts & React',
  description: 'Dived deeper into CSS layout models like Flexbox and Grid. Built responsive layouts for various screen sizes. Also learned how to structure HTML for accessibility and maintainability.',
  icon: Layers,
  color: 'bg-cyan-500'
}, {
  year: 'Data Science',
  title: 'Python and Machine Learning',
  description: 'Studied Python fundamentals, then moved into NumPy, pandas, and scikit-learn for data analysis and machine learning. Built small ML models like decision trees, linear regression, and clustering algorithms.',
  icon: Cpu,
  color: 'bg-yellow-500'
}, {
  year: 'Full Stack',
  title: 'JavaScript Full-Stack',
  description: 'Learned JavaScript deeply and moved into React for building dynamic UIs. Built full-stack apps using Node.js + Express. Got hands-on with REST APIs, MongoDB, and client-server interaction.',
  icon: Server,
  color: 'bg-green-500'
}, {
  year: 'Current Stack',
  title: 'Modern Tech Stack',
  description: 'Frontend: React, TypeScript, Tailwind CSS | Backend: Spring Boot, Node.js, Express.js',
  icon: Terminal,
  color: 'bg-indigo-500'
}, {
  year: 'Infrastructure',
  title: 'Cloud & DevOps',
  description: 'AWS Foundations, Docker',
  icon: Cloud,
  color: 'bg-purple-500'
}, {
  year: 'Storage',
  title: 'Databases',
  description: 'PostgreSQL, MongoDB, MySQL',
  icon: Database,
  color: 'bg-slate-500'
}];
export function SkillsJourney() {
  return <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Skill Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From basic markup to full-stack development and machine learning,
            here's how my technical expertise has evolved.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />

          <div className="space-y-12">
            {timelineData.map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className={`relative flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Icon Marker */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full border-4 border-white shadow-md z-10 bg-white">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="flex items-center space-x-2 mb-2">
                      <item.icon className={`h-5 w-5 ${item.color.replace('bg-', 'text-')}`} />
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}