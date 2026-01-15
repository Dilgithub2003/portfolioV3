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
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Have a project in mind or want to discuss technology? I'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
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
            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              Contact Information
            </h3>

            <div className="mb-12 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 text-blue-600 bg-blue-100 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    Location
                  </h4>
                  <p className="text-gray-600">Pitipana South, Homagama</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 text-blue-600 bg-blue-100 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                  <a href="tel:+94701664179" className="text-gray-600 transition-colors hover:text-blue-600">
                    (+94) 701664179
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 text-blue-600 bg-blue-100 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <a href="mailto:avgthilinadilshan@gmail.com" className="text-gray-600 transition-colors hover:text-blue-600">
                    avgthilinadilshan@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <h3 className="mb-6 text-2xl font-bold text-gray-900">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Dilgithub2003" className="p-4 text-gray-600 transition-all duration-300 transform bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white hover:-translate-y-1" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/thilina-dilshan-3718b92a3/" className="p-4 text-gray-600 transition-all duration-300 transform bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white hover:-translate-y-1" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:avgthilinadilshan@gmail.com" className="p-4 text-gray-600 transition-all duration-300 transform bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white hover:-translate-y-1" aria-label="Email">
                <Mail className="w-6 h-6" />
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
        }} className="p-8 border border-gray-100 shadow-sm bg-gray-50 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 transition-shadow bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="John Doe" />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 transition-shadow bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 transition-shadow bg-white border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="How can I help you?" />
              </div>

              <button type="submit" disabled={isSubmitting} className="flex items-center justify-center w-full px-8 py-4 text-base font-medium text-white transition-all bg-blue-600 border border-transparent rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-xl">
                {isSubmitting ? <>
                    <Loader2 className="w-5 h-5 mr-2 -ml-1 animate-spin" />
                    Sending...
                  </> : <>
                    <Send className="w-5 h-5 mr-2 -ml-1" />
                    Send Message
                  </>}
              </button>

              {submitStatus === 'success' && <div className="p-4 text-sm font-medium text-center text-green-700 rounded-lg bg-green-50 animate-fade-in">
                  Message sent successfully! I'll get back to you soon.
                </div>}

              {submitStatus === 'error' && <div className="p-4 text-sm font-medium text-center text-red-700 rounded-lg bg-red-50 animate-fade-in">
                  Error sending message. Please try again later.
                </div>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
}