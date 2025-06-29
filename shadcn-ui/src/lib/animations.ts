// src/lib/animations.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const initializeAnimations = () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  // Add animation classes for elements that should animate in
  document.querySelectorAll('.animate-in').forEach(element => {
    element.classList.add('opacity-100', 'translate-y-0');
  });
  
  // Animate architecture nodes and connections
  animateArchitectureDiagram();
  
  // Setup particle animations for the hero section
  setupParticleAnimations();
};

const animateArchitectureDiagram = () => {
  // Animation for architecture connections (lines between nodes)
  const connections = document.querySelectorAll('.arch-connection');
  if (connections.length > 0) {
    gsap.set(connections, { 
      attr: { 'stroke-dashoffset': 100 },
      opacity: 0.2
    });
    
    ScrollTrigger.batch(connections, {
      onEnter: batch => {
        gsap.to(batch, {
          attr: { 'stroke-dashoffset': 0 },
          opacity: 0.7,
          stagger: 0.15,
          duration: 1.5,
          ease: "power2.out"
        });
      },
      start: "top 80%"
    });
  }

  // Animation for architecture nodes
  const nodes = document.querySelectorAll('.arch-node');
  if (nodes.length > 0) {
    gsap.set(nodes, { 
      scale: 0.5,
      opacity: 0
    });
    
    ScrollTrigger.batch(nodes, {
      onEnter: batch => {
        gsap.to(batch, {
          scale: 1,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(1.7)"
        });
      },
      start: "top 80%"
    });
  }
};

const setupParticleAnimations = () => {
  const particles = document.querySelectorAll('.particle');
  
  if (particles.length > 0) {
    particles.forEach((particle) => {
      const particleEl = particle as HTMLElement;
      
      // Create random floating animation
      gsap.to(particleEl, {
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        duration: `random(10, 20)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      // Vary the opacity
      gsap.to(particleEl, {
        opacity: `random(0.1, 0.7)`,
        duration: `random(2, 5)`,
        repeat: -1,
        yoyo: true
      });
    });
  }
};