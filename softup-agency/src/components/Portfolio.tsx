'use client';

import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'DeFi Trading Platform',
      category: 'Blockchain',
      description: 'Advanced decentralized trading platform with automated market making and yield farming capabilities.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Solidity', 'Web3.js', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Smart Contract Integration', 'Real-time Trading', 'Yield Farming', 'Multi-wallet Support']
    },
    {
      id: 2,
      title: 'AI-Powered Analytics Dashboard',
      category: 'AI/ML',
      description: 'Intelligent business analytics platform using machine learning for predictive insights and data visualization.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'ML Models', 'Data Visualization']
    },
    {
      id: 3,
      title: 'Enterprise Cloud Migration',
      category: 'Cloud',
      description: 'Complete cloud infrastructure migration for enterprise client with 99.9% uptime and improved performance.',
      image: '/api/placeholder/600/400',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Microservices Architecture', 'Auto-scaling', 'CI/CD Pipeline', 'Monitoring & Logging']
    },
    {
      id: 4,
      title: 'Mobile Fintech App',
      category: 'Mobile',
      description: 'Cross-platform mobile application for digital banking with biometric authentication and real-time transactions.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Biometric Auth', 'Real-time Payments', 'Push Notifications', 'Offline Support']
    },
    {
      id: 5,
      title: 'E-commerce Marketplace',
      category: 'Web',
      description: 'Scalable e-commerce platform with advanced search, payment processing, and vendor management system.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Multi-vendor Support', 'Advanced Search', 'Payment Gateway', 'Inventory Management']
    },
    {
      id: 6,
      title: 'Cybersecurity Audit Tool',
      category: 'Security',
      description: 'Automated security assessment platform for identifying vulnerabilities and compliance issues.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Vulnerability Scanning', 'Compliance Reporting', 'Risk Assessment', 'Automated Testing']
    }
  ];

  const categories = ['All', 'Blockchain', 'AI/ML', 'Cloud', 'Mobile', 'Web', 'Security'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-foreground mb-6 fade-in">
            Our <span className="text-secondary">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-8 fade-in"></div>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed fade-in">
            Explore our latest projects and success stories. Each project represents our commitment 
            to innovation, quality, and client satisfaction.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary text-background shadow-lg shadow-primary/30'
                  : 'bg-muted/50 text-foreground/70 hover:bg-primary/20 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group cyber-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-6xl font-orbitron font-bold text-primary/30">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-primary rounded-full text-background hover:bg-primary/80 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-secondary rounded-full text-background hover:bg-secondary/80 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-3">
                  {project.category}
                </span>

                {/* Project Title */}
                <h3 className="text-xl font-orbitron font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-muted/50 text-foreground/60 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-1 mb-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-foreground/60">
                      <div className="w-1 h-1 bg-secondary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* View Details Button */}
                <button className="group/btn flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 text-sm font-medium">
                  View Details
                  <ArrowRight 
                    size={16} 
                    className="group-hover/btn:translate-x-1 transition-transform duration-300" 
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in">
          <p className="text-lg text-foreground/70 mb-8">
            Interested in working with us on your next project?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="neon-button text-lg px-8 py-4"
          >
            Let&apos;s Collaborate
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-40 h-40 border border-secondary/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-28 h-28 border border-primary/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent rounded-full animate-float"></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-secondary rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Portfolio;