'use client';

import { 
  Code, 
  Smartphone, 
  Brain, 
  Link, 
  Cloud, 
  Shield, 
  Zap, 
  Globe 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: '01',
      icon: <Code size={48} />,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies like React, Next.js, and Node.js for optimal performance and scalability.',
      features: ['React/Next.js', 'TypeScript', 'API Integration', 'Responsive Design']
    },
    {
      id: '02',
      icon: <Smartphone size={48} />,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'iOS/Android', 'App Store Optimization']
    },
    {
      id: '03',
      icon: <Brain size={48} />,
      title: 'AI Integration',
      description: 'Intelligent solutions powered by machine learning and artificial intelligence to automate processes and enhance user experiences.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      id: '04',
      icon: <Link size={48} />,
      title: 'Blockchain Development',
      description: 'Decentralized applications, smart contracts, and blockchain solutions for Web3 and cryptocurrency projects.',
      features: ['Smart Contracts', 'DeFi Protocols', 'NFT Platforms', 'Web3 Integration']
    },
    {
      id: '05',
      icon: <Cloud size={48} />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps solutions using AWS, Google Cloud, and Azure for enterprise-grade applications.',
      features: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD Pipelines', 'Microservices']
    },
    {
      id: '06',
      icon: <Shield size={48} />,
      title: 'Cybersecurity',
      description: 'Comprehensive security audits, penetration testing, and implementation of robust security measures for digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Risk Assessment']
    },
    {
      id: '07',
      icon: <Zap size={48} />,
      title: 'Performance Optimization',
      description: 'Speed optimization, performance monitoring, and scalability improvements for existing applications and systems.',
      features: ['Performance Audits', 'Code Optimization', 'Database Tuning', 'CDN Setup']
    },
    {
      id: '08',
      icon: <Globe size={48} />,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize legacy systems and processes for the digital age.',
      features: ['Legacy Migration', 'Process Automation', 'Digital Strategy', 'Technology Consulting']
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-foreground mb-6 fade-in">
            Our <span className="text-primary">Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 fade-in"></div>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed fade-in">
            Comprehensive technology solutions designed to propel your business into the future. 
            From concept to deployment, we deliver excellence at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group cyber-card p-6 rounded-xl hover:scale-105 transition-all duration-300 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Number */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-primary/50 font-orbitron font-bold text-lg">
                  {service.id}
                </span>
                <div className="text-primary group-hover:text-secondary transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-orbitron font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Service Features */}
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-xs text-foreground/60">
                    <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in">
          <p className="text-lg text-foreground/70 mb-8">
            Ready to transform your business with cutting-edge technology?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="neon-button text-lg px-8 py-4"
          >
            Start Your Project
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-secondary/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-accent rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Services;