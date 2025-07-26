'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We&apos;ll get back to you within 24 hours.');
    
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: 'Email Us',
      details: 'hello@softupagency.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="text-secondary" size={24} />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm EST'
    },
    {
      icon: <MapPin className="text-accent" size={24} />,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Silicon Valley Tech Hub'
    }
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'Blockchain Development',
    'AI/ML Integration',
    'Cloud Solutions',
    'Cybersecurity',
    'Digital Transformation',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000'
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-foreground mb-6 fade-in">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 fade-in"></div>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed fade-in">
            Ready to transform your ideas into reality? Let&apos;s discuss your project and create 
            something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="slide-in-left">
            <div className="cyber-card p-8 rounded-xl">
              <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6">
                Start Your Project
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground/80 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300"
                    placeholder="Your Company"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground/80 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground/80 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-secondary text-background px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="slide-in-right">
            <div className="space-y-8">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="cyber-card p-6 rounded-xl hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-muted rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-orbitron font-bold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-foreground/70 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Actions */}
              <div className="cyber-card p-6 rounded-xl">
                <h4 className="text-lg font-orbitron font-bold text-foreground mb-4">
                  Quick Actions
                </h4>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors duration-300">
                    <MessageCircle size={20} />
                    <span>Schedule a Call</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-secondary/20 hover:text-secondary transition-colors duration-300">
                    <Calendar size={20} />
                    <span>Book Consultation</span>
                  </button>
                </div>
              </div>

              {/* Response Time */}
              <div className="cyber-card p-6 rounded-xl text-center">
                <h4 className="text-lg font-orbitron font-bold text-foreground mb-2">
                  We Respond Fast
                </h4>
                <p className="text-foreground/70 text-sm mb-4">
                  Average response time: <span className="text-primary font-bold">2 hours</span>
                </p>
                <div className="flex justify-center gap-4 text-xs text-foreground/60">
                  <span>• Free Consultation</span>
                  <span>• No Obligation</span>
                  <span>• 24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-36 h-36 border border-primary/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-10 w-28 h-28 border border-secondary/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-accent rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Contact;