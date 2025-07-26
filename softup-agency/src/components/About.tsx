'use client';

import { Users, Target, Zap, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users size={32} />, number: '50+', label: 'Expert Developers' },
    { icon: <Target size={32} />, number: '200+', label: 'Projects Completed' },
    { icon: <Zap size={32} />, number: '5+', label: 'Years Experience' },
    { icon: <Award size={32} />, number: '98%', label: 'Client Satisfaction' },
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      specialty: 'Blockchain Architecture',
      description: 'Visionary leader with 10+ years in blockchain and fintech innovation.',
      avatar: 'AC'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO',
      specialty: 'AI/ML Engineering',
      description: 'AI expert specializing in machine learning and neural network architectures.',
      avatar: 'SR'
    },
    {
      name: 'Marcus Johnson',
      role: 'Lead Developer',
      specialty: 'Full-Stack Development',
      description: 'Full-stack developer with expertise in React, Node.js, and cloud technologies.',
      avatar: 'MJ'
    },
    {
      name: 'Elena Petrov',
      role: 'Security Architect',
      specialty: 'Cybersecurity',
      description: 'Cybersecurity specialist focused on blockchain security and smart contract audits.',
      avatar: 'EP'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and push the boundaries of what\'s possible.',
      icon: <Zap className="text-primary" size={24} />
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our success. We build solutions tailored to your unique needs.',
      icon: <Target className="text-secondary" size={24} />
    },
    {
      title: 'Quality Assurance',
      description: 'We maintain the highest standards in code quality, security, and performance.',
      icon: <Award className="text-accent" size={24} />
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-foreground mb-6 fade-in">
            About <span className="text-accent">SoftUp</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8 fade-in"></div>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed fade-in">
            We are a team of passionate technologists dedicated to transforming businesses 
            through innovative software solutions and cutting-edge technologies.
          </p>
        </div>

        {/* Company Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="slide-in-left">
            <h3 className="text-3xl font-orbitron font-bold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              At SoftUp Agency, we believe in the transformative power of technology. Our mission 
              is to empower businesses with innovative software solutions that drive growth, 
              efficiency, and competitive advantage in the digital age.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              We specialize in emerging technologies like blockchain, artificial intelligence, 
              and cloud computing, helping our clients stay ahead of the curve and capitalize 
              on new opportunities.
            </p>
            
            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 bg-muted rounded-lg">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-orbitron font-bold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-foreground/70">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slide-in-right">
            <div className="cyber-card p-8 rounded-xl">
              <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6 text-center">
                Our Impact
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3 text-primary">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-orbitron font-bold text-foreground mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-foreground/70 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="fade-in">
          <h3 className="text-3xl font-orbitron font-bold text-foreground mb-12 text-center">
            Meet Our <span className="text-primary">Team</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group cyber-card p-6 rounded-xl text-center hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Avatar */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-background font-orbitron font-bold text-xl">
                  {member.avatar}
                </div>

                {/* Member Info */}
                <h4 className="text-xl font-orbitron font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-primary font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-secondary text-sm mb-3">
                  {member.specialty}
                </p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in">
          <p className="text-lg text-foreground/70 mb-8">
            Ready to work with a team that puts innovation first?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="neon-button text-lg px-8 py-4"
          >
            Join Our Journey
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-36 h-36 border border-accent/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-10 w-24 h-24 border border-primary/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-secondary rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default About;