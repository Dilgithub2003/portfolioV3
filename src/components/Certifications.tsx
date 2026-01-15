import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle } from 'lucide-react';
const certifications = [{
  title: 'AWS Cloud Practitioner',
  issuer: 'Amazon Web Services',
  date: 'Issued 2024',
  skills: ['AWS Cloud Services', 'Cloud Architecture'],
  color: 'bg-orange-50'
}, {
  title: 'React Course',
  issuer: 'DP Education IT Campus',
  date: 'Jan 2024',
  skills: ['React.js', 'JavaScript'],
  color: 'bg-blue-50'
}, {
  title: 'React.js and JavaScript',
  issuer: 'University of Moratuwa',
  date: 'Nov 2022',
  id: 'Credential ID: O22ns10TZc',
  skills: ['React.js', 'JavaScript'],
  color: 'bg-cyan-50'
}, {
  title: 'English Literate and Public Speaking',
  issuer: 'The Beeline English Academy',
  date: 'Completed',
  skills: ['English as a Second Language (ESL)', 'Communication'],
  color: 'bg-purple-50'
}];
export function Certifications() {
  return <section id="certifications" className="py-20 bg-gray-50">
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
            Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my
            technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => <motion.div key={index} initial={{
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
        }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
              <div className={`w-12 h-12 rounded-lg ${cert.color} flex items-center justify-center mb-4`}>
                <Award className="h-6 w-6 text-gray-700" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {cert.title}
              </h3>

              <p className="text-gray-600 font-medium mb-1">{cert.issuer}</p>

              <div className="flex items-center text-gray-500 text-sm mb-4">
                <Calendar className="h-4 w-4 mr-1.5" />
                {cert.date}
              </div>

              {cert.id && <p className="text-xs text-gray-400 mb-4 font-mono">
                  {cert.id}
                </p>}

              <div className="mt-auto pt-4 border-t border-gray-50">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map(skill => <span key={skill} className="inline-flex items-center text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded">
                      <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                      {skill}
                    </span>)}
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}