import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
const projects = [{
  title: 'Movie Explorer',
  description: 'A full-stack movie discovery platform using the MERN stack and JWT authentication, integrating The Movie Database API. Enables users to search movies, manage personalized watchlists, and receive similar movie recommendations.',
  tags: ['React', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'],
  github: 'https://github.com/Dilgithub2003/movieExplorer',
  image: 'bg-gradient-to-br from-purple-500 to-indigo-600' // Placeholder gradient
}, {
  title: 'CareerNest',
  description: 'Internships/jobs seeking platform enabling users to create profiles, search job listings, and find mentoring. Enhanced team collaboration efficiency by ~40% through version control workflows.',
  tags: ['React', 'Express', 'AWS', 'Git/GitHub'],
  github: 'https://github.com/CareerNest-dev',
  image: 'bg-gradient-to-br from-blue-500 to-cyan-500' // Placeholder gradient
}, {
  title: 'TrackNextus',
  description: 'Real-time GPS tracking system for an IoT device, enabling continuous location monitoring and telemetry streaming.',
  tags: ['Spring Boot', 'Amazon EC2', 'Docker', 'MQTT', 'WebSocket'],
  github: 'https://github.com/Dilgithub2003/trackNextus-backend',
  image: 'bg-gradient-to-br from-green-500 to-emerald-600' // Placeholder gradient
}, {
  title: 'TutorsLanka',
  description: 'A website that facilitates students to find tutors easier for lower rates. Helps students book tutors, view subject contents and tutor profiles.',
  tags: ['WordPress', 'HTML', 'CSS', 'PHP'],
  github: '#https://github.com/Dilgithub2003?tab=repositories',
  image: 'bg-gradient-to-br from-orange-400 to-red-500' // Placeholder gradient
}];
export function Projects() {
  return <section id="projects" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
      }} className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            A showcase of my technical projects, ranging from full-stack web
            applications to IoT solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
        }} className="flex flex-col h-full overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-sm group rounded-xl hover:shadow-xl">
              {/* Image Placeholder */}
              <div className={`h-48 w-full ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 transition-colors duration-300 bg-black/10 group-hover:bg-black/0" />
                <div className="absolute inset-0 flex items-center justify-center text-white transition-opacity opacity-50 group-hover:opacity-100">
                  <FolderGit2 className="w-12 h-12" />
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                    {project.title}
                  </h3>
                  <a href={project.github} className="text-gray-400 transition-colors hover:text-gray-900" aria-label={`View ${project.title} on GitHub`}>
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <p className="flex-1 mb-6 leading-relaxed text-gray-600">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => <span key={tag} className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded-full">
                      {tag}
                    </span>)}
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}