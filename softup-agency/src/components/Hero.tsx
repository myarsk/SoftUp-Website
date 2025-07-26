'use client';

import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { ArrowRight, Play } from 'lucide-react';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#00FFFF"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Parallax effect for background elements
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const moveX = (clientX - centerX) * 0.01;
      const moveY = (clientY - centerY) * 0.01;

      if (heroRef.current) {
        const elements = heroRef.current.querySelectorAll('.parallax-element');
        elements.forEach((element, index) => {
          const multiplier = (index + 1) * 0.5;
          (element as HTMLElement).style.transform = 
            `translate(${moveX * multiplier}px, ${moveY * multiplier}px)`;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
        </Canvas>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="parallax-element absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-slow"></div>
        <div className="parallax-element absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-float"></div>
        <div className="parallax-element absolute bottom-40 left-20 w-1 h-1 bg-accent rounded-full animate-pulse"></div>
        <div className="parallax-element absolute bottom-20 right-10 w-4 h-4 bg-primary/50 rounded-full animate-float"></div>
        
        {/* Geometric shapes */}
        <div className="parallax-element absolute top-1/3 left-1/4 w-16 h-16 border border-primary/30 rotate-45 animate-spin-slow"></div>
        <div className="parallax-element absolute bottom-1/3 right-1/4 w-12 h-12 border border-secondary/30 animate-pulse-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="glitch font-orbitron text-4xl sm:text-6xl lg:text-8xl font-black mb-6" data-text="SOFTUP">
            SOFTUP
          </h1>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-foreground mb-4">
            AGENCY
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </div>

        <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 mb-4 font-light">
          Next-Gen Software Solutions
        </p>
        <p className="text-lg sm:text-xl text-foreground/60 mb-12 max-w-3xl mx-auto leading-relaxed">
          Pioneering the future with cutting-edge blockchain, AI, and web development. 
          Transform your vision into reality with our advanced technology solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection('#services')}
            className="group flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-background px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
          >
            Explore Services
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
          
          <button
            onClick={() => scrollToSection('#portfolio')}
            className="group flex items-center gap-3 border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:bg-primary hover:text-background transition-all duration-300 transform hover:scale-105"
          >
            <Play size={20} />
            View Work
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-orbitron font-bold text-primary mb-2">50+</div>
            <div className="text-sm sm:text-base text-foreground/70 uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-orbitron font-bold text-secondary mb-2">5+</div>
            <div className="text-sm sm:text-base text-foreground/70 uppercase tracking-wider">Years</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-orbitron font-bold text-accent mb-2">24/7</div>
            <div className="text-sm sm:text-base text-foreground/70 uppercase tracking-wider">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;