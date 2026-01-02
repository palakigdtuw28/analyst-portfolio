import { useState } from 'react';
import { Mail, Linkedin, Github, Send, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '08428736-974f-4164-ae73-e5871ed6a2dd',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you! Your message has been sent successfully.');
      } else {
        setSubmitStatus('error');
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      alert('Failed to send message. Please try again or contact via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-600 mb-4"></div>
          <p className="text-gray-600 text-lg">
            Open to discussing data analytics projects, internship opportunities, and collaborative ventures
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-sm transition-all duration-200 group">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-gray-900">palak052btmae24@igdtuw.ac.in</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-sm transition-all duration-200 group">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="text-gray-900">+91 95823 06115</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-sm transition-all duration-200 group">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-gray-900">Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-gray-900 mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-50 hover:bg-blue-600 text-gray-700 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-200 hover:scale-110 hover:-translate-y-1 hover:shadow-md"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-50 hover:bg-blue-600 text-gray-700 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-200 hover:scale-110 hover:-translate-y-1 hover:shadow-md"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:palak052btmae24@igdtuw.ac.in"
                  className="w-10 h-10 bg-gray-50 hover:bg-blue-600 text-gray-700 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-200 hover:scale-110 hover:-translate-y-1 hover:shadow-md"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-gray-900 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition-all duration-200 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[rgb(0,0,0)] text-[rgb(255,255,255)] px-8 py-3 rounded-lg hover:bg-[rgb(0,0,0)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[rgb(0,0,0)] disabled:hover:translate-y-0"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}