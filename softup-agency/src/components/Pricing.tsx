'use client';

import { Check, Zap, Star, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      icon: <Zap className="text-primary" size={32} />,
      price: '$5,000',
      period: 'per project',
      description: 'Perfect for small businesses looking to establish their digital presence',
      features: [
        'Custom Website Development',
        'Responsive Design',
        'Basic SEO Optimization',
        'Contact Form Integration',
        '3 Months Support',
        'Source Code Delivery',
        '2 Revision Rounds'
      ],
      popular: false,
      color: 'primary'
    },
    {
      name: 'Professional',
      icon: <Star className="text-secondary" size={32} />,
      price: '$15,000',
      period: 'per project',
      description: 'Ideal for growing companies needing advanced functionality and integrations',
      features: [
        'Full-Stack Web Application',
        'Database Integration',
        'API Development',
        'User Authentication',
        'Payment Gateway Integration',
        '6 Months Support',
        'Performance Optimization',
        'Security Implementation',
        '5 Revision Rounds'
      ],
      popular: true,
      color: 'secondary'
    },
    {
      name: 'Enterprise',
      icon: <Crown className="text-accent" size={32} />,
      price: '$50,000+',
      period: 'per project',
      description: 'Comprehensive solutions for large-scale applications and complex requirements',
      features: [
        'Custom Enterprise Solution',
        'Microservices Architecture',
        'Cloud Infrastructure Setup',
        'DevOps & CI/CD Pipeline',
        'Advanced Security Features',
        '12 Months Support',
        'Performance Monitoring',
        'Team Training',
        'Unlimited Revisions',
        'Dedicated Project Manager'
      ],
      popular: false,
      color: 'accent'
    }
  ];

  const addons = [
    { name: 'Mobile App Development', price: '+$10,000' },
    { name: 'Blockchain Integration', price: '+$15,000' },
    { name: 'AI/ML Implementation', price: '+$20,000' },
    { name: 'Advanced Analytics', price: '+$8,000' },
    { name: 'Third-party Integrations', price: '+$5,000' },
    { name: 'Custom Admin Panel', price: '+$7,000' }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-foreground mb-6 fade-in">
            Our <span className="text-primary">Pricing</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 fade-in"></div>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed fade-in">
            Transparent pricing for every stage of your digital journey. Choose the plan that fits 
            your needs and scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`group cyber-card p-8 rounded-xl hover:scale-105 transition-all duration-300 relative fade-in ${
                plan.popular ? 'ring-2 ring-secondary shadow-lg shadow-secondary/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-background px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-foreground/70 text-sm mb-6">
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className={`text-4xl font-orbitron font-bold text-${plan.color}`}>
                    {plan.price}
                  </span>
                  <span className="text-foreground/60 text-sm ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className={`text-${plan.color} flex-shrink-0`} size={16} />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-3 px-6 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                  plan.popular
                    ? 'bg-secondary text-background hover:bg-secondary/80 shadow-lg shadow-secondary/30'
                    : `border-2 border-${plan.color} text-${plan.color} hover:bg-${plan.color} hover:text-background`
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="fade-in">
          <h3 className="text-3xl font-orbitron font-bold text-foreground mb-8 text-center">
            Additional <span className="text-secondary">Services</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="cyber-card p-6 rounded-xl hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{addon.name}</span>
                  <span className="text-primary font-orbitron font-bold">{addon.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Quote Section */}
        <div className="cyber-card p-8 rounded-xl text-center fade-in">
          <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4">
            Need Something <span className="text-primary">Custom</span>?
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Every project is unique. If none of our standard packages fit your needs, 
            we&apos;ll create a custom solution tailored specifically for your requirements.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="neon-button text-lg px-8 py-4"
          >
            Request Custom Quote
          </button>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 fade-in">
          <h3 className="text-3xl font-orbitron font-bold text-foreground mb-8 text-center">
            Frequently Asked <span className="text-accent">Questions</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-orbitron font-bold text-foreground mb-2">
                  What&apos;s included in the support period?
                </h4>
                <p className="text-foreground/70 text-sm">
                  Our support includes bug fixes, minor updates, security patches, and technical assistance 
                  via email and video calls.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-orbitron font-bold text-foreground mb-2">
                  Do you offer payment plans?
                </h4>
                <p className="text-foreground/70 text-sm">
                  Yes, we offer flexible payment plans with milestone-based payments. Typically 50% upfront 
                  and 50% upon completion.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-orbitron font-bold text-foreground mb-2">
                  What if I need changes after delivery?
                </h4>
                <p className="text-foreground/70 text-sm">
                  All plans include revision rounds during development. Post-delivery changes can be handled 
                  under our maintenance plans or as separate projects.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-orbitron font-bold text-foreground mb-2">
                  How long does a typical project take?
                </h4>
                <p className="text-foreground/70 text-sm">
                  Project timelines vary based on complexity. Starter projects: 4-6 weeks, Professional: 8-12 weeks, 
                  Enterprise: 16+ weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-40 h-40 border border-primary/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-secondary/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent rounded-full animate-float"></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Pricing;