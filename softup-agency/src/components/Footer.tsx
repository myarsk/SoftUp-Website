'use client';

import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Code,
  Smartphone,
  Brain,
  Link as LinkIcon
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <Github size={24} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={24} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={24} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={24} />, href: 'mailto:hello@softupagency.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Web Development', icon: <Code size={16} /> },
    { name: 'Mobile Apps', icon: <Smartphone size={16} /> },
    { name: 'AI Integration', icon: <Brain size={16} /> },
    { name: 'Blockchain', icon: <LinkIcon size={16} /> }
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: 'hello@softupagency.com' },
    { icon: <Phone size={16} />, text: '+1 (555) 123-4567' },
    { icon: <MapPin size={16} />, text: 'San Francisco, CA' }
  ];

  return (
    <footer className="relative bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-3xl font-orbitron font-bold text-primary mb-4">
                  SoftUp
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Pioneering the future with cutting-edge software solutions. 
                  We transform ideas into digital reality through innovation and excellence.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group p-3 bg-background/50 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <div className="text-foreground/70 group-hover:text-primary transition-colors duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-orbitron font-bold text-foreground mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-foreground/70 hover:text-primary transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-orbitron font-bold text-foreground mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="text-primary">
                      {service.icon}
                    </div>
                    <span className="text-foreground/70 hover:text-primary transition-colors duration-300 cursor-pointer">
                      {service.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-orbitron font-bold text-foreground mb-6">
                Get In Touch
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="text-primary">
                      {info.icon}
                    </div>
                    <span className="text-foreground/70 text-sm">
                      {info.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="mt-6">
                <h5 className="text-sm font-orbitron font-bold text-foreground mb-3">
                  Stay Updated
                </h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-background/50 border border-border rounded-l-lg text-sm text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary"
                  />
                  <button className="px-4 py-2 bg-primary text-background rounded-r-lg hover:bg-primary/80 transition-colors duration-300">
                    <Mail size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-foreground/60 text-sm">
              © 2024 SoftUp Agency. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary/20 hover:bg-primary/40 backdrop-blur-sm rounded-full border border-primary/30 hover:border-primary transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="text-primary" size={24} />
      </button>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 border border-primary/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-secondary/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-accent rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;