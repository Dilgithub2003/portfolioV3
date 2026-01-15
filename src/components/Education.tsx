import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, School } from 'lucide-react';
export function Education() {
  const educationData = [{
    institution: 'University of Sri Jayewardenepura',
    degree: 'BSc in Information and Communication Technology',
    period: 'Faculty of Technology',
    description: 'Following BSc in Information and Communication Technology degree program.',
    coursework: 'Web Application Development, Object Oriented Analysis and Designing, Data Structures and Algorithms, Service Oriented Architecture and Web Designing, Database Management Systems',
    highlight: true,
    icon: GraduationCap
  }, {
    institution: 'Codewave Academy',
    degree: 'Machine Learning Certification',
    period: '2025 - 2026',
    description: 'Completed an industry-focused training program covering practical machine learning concepts, model development, and real-world applications.',
    icon: Award
  }, {
    institution: 'The Beeline English Academy',
    degree: 'Diploma in English',
    period: 'Completed',
    description: 'Advanced English language studies focusing on communication and professional writing.',
    icon: BookOpen
  }, {
    institution: 'Pitabeddara Secondary School',
    degree: 'GCE Advanced Level',
    period: 'Completed',
    description: 'Achieved 3 As in Engineering Technology, Science for Technology, and ICT.',
    details: 'District Rank: 8th (Matara) | Island Rank: 49th',
    icon: School
  }];
  return <section id="education" className="py-20 bg-gray-50">
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
            Education & Qualifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic background and professional training that laid the
            foundation for my career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item, index) => <motion.div key={index} initial={{
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
        }} className={`bg-white rounded-xl p-8 shadow-sm border ${item.highlight ? 'border-blue-200 ring-1 ring-blue-100' : 'border-gray-100'} hover:shadow-md transition-shadow`}>
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${item.highlight ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.institution}
                    </h3>
                    <span className="text-sm font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded mt-2 sm:mt-0 self-start">
                      {item.period}
                    </span>
                  </div>
                  <h4 className={`text-lg font-medium mb-3 ${item.highlight ? 'text-blue-600' : 'text-gray-700'}`}>
                    {item.degree}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {item.coursework && <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-500 font-medium mb-2">
                        Relevant Coursework:
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.coursework}
                      </p>
                    </div>}

                  {item.details && <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600 font-medium">
                        {item.details}
                      </p>
                    </div>}
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}