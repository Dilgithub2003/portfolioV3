import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
const projects = [{
  title: 'Movie Explorer',
  description: 'A full-stack movie discovery platform using the MERN stack and JWT authentication, integrating The Movie Database API. Enables users to search movies, manage personalized watchlists, and receive similar movie recommendations.',
  tags: ['React', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'],
  github: '#',
  image: 'bg-gradient-to-br from-purple-500 to-indigo-600' // Placeholder gradient
}, {
  title: 'CareerNest',
  description: 'Internships/jobs seeking platform enabling users to create profiles, search job listings, and find mentoring. Enhanced team collaboration efficiency by ~40% through version control workflows.',
  tags: ['React', 'Express', 'AWS', 'Git/GitHub'],
  github: '#',
  image: 'bg-gradient-to-br from-blue-500 to-cyan-500' // Placeholder gradient
}, {
  title: 'TrackNextus',
  description: 'Real-time GPS tracking system for an IoT device, enabling continuous location monitoring and telemetry streaming.',
  tags: ['Spring Boot', 'Amazon EC2', 'Docker', 'MQTT', 'WebSocket'],
  github: '#',
  image: 'bg-gradient-to-br from-green-500 to-emerald-600' // Placeholder gradient
}, {
  title: 'TutorsLanka',
  description: 'A website that facilitates students to find tutors easier for lower rates. Helps students book tutors, view subject contents and tutor profiles.',
  tags: ['WordPress', 'HTML', 'CSS', 'PHP'],
  github: '#',
  image: 'bg-gradient-to-br from-orange-400 to-red-500' // Placeholder gradient
}];
export function Projects() {
  return <section id="projects" className="py-20 bg-white">
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
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects, ranging from full-stack web
            applications to IoT solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => <motion.div key={index} initial={{
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
        }} className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              {/* Image Placeholder */}
              <div className={`h-48 w-full ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-50 group-hover:opacity-100 transition-opacity">
                  <FolderGit2 className="h-12 w-12" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <a href={project.github} className="text-gray-400 hover:text-gray-900 transition-colors" aria-label={`View ${project.title} on GitHub`}>
                    <Github className="h-5 w-5" />
                  </a>
                </div>

                <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full border border-gray-200">
                      {tag}
                    </span>)}
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}