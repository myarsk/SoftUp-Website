'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'David Kim',
      company: 'TechCorp Industries',
      role: 'CEO',
      rating: 5,
      text: 'SoftUp Agency transformed our entire digital infrastructure. Their blockchain solution increased our transaction efficiency by 300% while reducing costs significantly.',
      avatar: 'DK',
      project: 'Enterprise Blockchain Platform'
    },
    {
      id: 2,
      name: 'Maria Gonzalez',
      company: 'FinanceFlow',
      role: 'CTO',
      rating: 5,
      text: 'The AI-powered analytics dashboard they built for us provides insights we never thought possible. Our decision-making process has become incredibly data-driven.',
      avatar: 'MG',
      project: 'AI Analytics Dashboard'
    },
    {
      id: 3,
      name: 'James Wilson',
      company: 'StartupX',
      role: 'Founder',
      rating: 5,
      text: 'From concept to deployment, SoftUp Agency exceeded every expectation. Their mobile app helped us secure Series A funding and scale to 100k+ users.',
      avatar: 'JW',
      project: 'Mobile Fintech App'
    },
    {
      id: 4,
      name: 'Lisa Chen',
      company: 'EcoTech Solutions',
      role: 'Product Manager',
      rating: 5,
      text: 'Their cloud migration strategy was flawless. We achieved 99.9% uptime and reduced our infrastructure costs by 40% while improving performance.',
      avatar: 'LC',
      project: 'Cloud Infrastructure Migration'
    },
    {
      id: 5,
      name: 'Robert Taylor',
      company: 'SecureBank',
      role: 'CISO',
      rating: 5,
      text: 'The cybersecurity audit revealed vulnerabilities we didn\'t know existed. Their comprehensive security implementation gave us complete peace of mind.',
      avatar: 'RT',
      project: 'Security Audit & Implementation'
    },
    {
      id: 6,
      name: 'Anna Petrov',
      company: 'RetailChain',
      role: 'VP Technology',
      rating: 5,
      text: 'The e-commerce platform they built handles millions of transactions seamlessly. Our revenue increased by 250% in the first quarter after launch.',
      avatar: 'AP',
      project: 'E-commerce Marketplace'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-foreground mb-6 fade-in">
            Client <span className="text-primary">Success</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 fade-in"></div>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed fade-in">
            Don&apos;t just take our word for it. Here&apos;s what our clients say about working with SoftUp Agency 
            and the results they&apos;ve achieved.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="cyber-card p-8 mx-4 rounded-xl">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <Quote className="text-primary" size={48} />
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg text-foreground/80 text-center leading-relaxed mb-8 italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex items-center justify-center gap-4">
                      {/* Avatar */}
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-background font-orbitron font-bold text-lg">
                        {testimonial.avatar}
                      </div>

                      {/* Client Details */}
                      <div className="text-center">
                        <div className="text-xl font-orbitron font-bold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-primary font-medium">
                          {testimonial.role}
                        </div>
                        <div className="text-foreground/60 text-sm">
                          {testimonial.company}
                        </div>
                        <div className="text-secondary text-xs mt-1">
                          {testimonial.project}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 p-3 bg-primary/20 hover:bg-primary/40 rounded-full transition-colors duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="text-primary" size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 p-3 bg-primary/20 hover:bg-primary/40 rounded-full transition-colors duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="text-primary" size={24} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-primary scale-125'
                  : 'bg-foreground/30 hover:bg-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border fade-in">
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-foreground/70 uppercase tracking-wider">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-secondary mb-2">100%</div>
            <div className="text-sm text-foreground/70 uppercase tracking-wider">Project Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-foreground/70 uppercase tracking-wider">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-primary mb-2">5.0</div>
            <div className="text-sm text-foreground/70 uppercase tracking-wider">Average Rating</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in">
          <p className="text-lg text-foreground/70 mb-8">
            Ready to join our list of successful clients?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="neon-button text-lg px-8 py-4"
          >
            Start Your Success Story
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 border border-primary/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-28 h-28 border border-secondary/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent rounded-full animate-float"></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Testimonials;