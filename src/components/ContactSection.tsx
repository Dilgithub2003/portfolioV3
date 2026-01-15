import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin } from 'lucide-react';
export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await fetch('https://formspree.io/f/xpwjbwzv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };
  return <section id="contact" className="py-20 bg-white">
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
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss technology? I'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    Location
                  </h4>
                  <p className="text-gray-600">Pitipana South, Homagama</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                  <a href="tel:+94701664179" className="text-gray-600 hover:text-blue-600 transition-colors">
                    (+94) 701664179
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <a href="mailto:avgthilinadilshan@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                    avgthilinadilshan@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-100 p-4 rounded-lg text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="bg-gray-100 p-4 rounded-lg text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:avgthilinadilshan@gmail.com" className="bg-gray-100 p-4 rounded-lg text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow outline-none bg-white" placeholder="John Doe" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow outline-none bg-white" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow outline-none bg-white resize-none" placeholder="How can I help you?" />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl">
                {isSubmitting ? <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                    Sending...
                  </> : <>
                    <Send className="-ml-1 mr-2 h-5 w-5" />
                    Send Message
                  </>}
              </button>

              {submitStatus === 'success' && <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm font-medium animate-fade-in text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>}

              {submitStatus === 'error' && <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm font-medium animate-fade-in text-center">
                  Error sending message. Please try again later.
                </div>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
}