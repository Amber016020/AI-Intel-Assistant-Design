// src/components/Hero.tsx
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDownIcon } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const scrollToArchitecture = () => {
    const element = document.getElementById('architecture');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black"></div>
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="particle bg-purple-500/20 absolute rounded-full"
              style={{
                width: `${Math.random() * 12 + 5}px`,
                height: `${Math.random() * 12 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 rounded-full bg-purple-500/10 px-3 py-1 text-sm backdrop-blur">
            <span className="text-purple-400">Based on Multi-Agent Framework</span>
          </div>
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Metamorphosis:
            </span>
            <br />
            <span className="text-white">AI Intelligence Assistant</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-1000 delay-300 ease-out animate-in">
            A personal intelligence gathering system inspired by MetaGPT's multi-agent collaborative framework.
            Transform your workflow with AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 translate-y-8 transition-all duration-1000 delay-500 ease-out animate-in">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
              size="lg"
            >
              Explore the System
            </Button>
            <Button 
              variant="outline" 
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black"
              size="lg"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToArchitecture}
      >
        <ChevronDownIcon className="h-8 w-8 text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;