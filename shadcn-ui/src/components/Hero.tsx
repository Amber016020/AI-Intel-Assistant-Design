// src/components/Hero.tsx
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDownIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

const agents = [
  {
    name: 'Planner',
    role: 'Task Analyzer',
    img: 'https://public-frontend-1300249583.cos-website.ap-nanjing.myqcloud.com/assets/04-00493084.png',
  },
  {
    name: 'Researcher',
    role: 'Data & Document Finder',
    img: 'https://public-frontend-1300249583.cos-website.ap-nanjing.myqcloud.com/assets/02-c8d04b22.png',
  },
  {
    name: 'Analysis',
    role: 'Information Synthesizer & Insight Generator',
    img: 'https://public-frontend-1300249583.cos-website.ap-nanjing.myqcloud.com/assets/01-04bbe54b.png',
  },
  {
    name: 'Presenter',
    role: 'Summary & Report Generator',
    img: 'https://public-frontend-1300249583.cos-website.ap-nanjing.myqcloud.com/assets/alice-d69e9fbc.png',
  },
];

const Hero = () => {
  const navigate = useNavigate(); 
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToArchitecture = () => {
    const element = document.getElementById('architecture');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black"></div>

      {/* Animated particles */}
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
        <div className="max-w-4xl mx-auto text-left">

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-6">
            {/* Left: Text Block */}
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Your AI-Powered Intelligence Assistant:
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent text-purple-400">Metamorphosis</span>
              </h2>
              <p className="text-base md:text-lg text-purple-300 mt-2">
                A personal intelligence assistant system inspired by MetaGPT's multi-agent collaboration model. It simulates a team of AI agents that collaborate to analyze user-defined tasks, collect relevant documents from multiple sources, synthesize insights, and automatically generate structured reports.
              </p>
            </div>

            {/* Right: Illustration */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img
                src="https://public-frontend-1300249583.cos-website.ap-nanjing.myqcloud.com/assets/homecode-d4699607.svg"
                alt="Code Illustration"
                className="max-w-xs md:max-w-md scale-[0.82]"
              />
            </div>
          </div>


          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {agents.map(({ name, role, img }, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-xl p-4 w-[140px] text-center text-white backdrop-blur shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-30 h-30 mx-auto mb-2 rounded-full border-2 border-purple-400 hover:scale-105 transition-transform"
                />
                <div className="font-semibold">{name}</div>
                <div className="text-sm text-purple-300">{role}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
              size="lg"
              onClick={() => navigate('/dashboard')} 
            >
              Explore the System
            </Button>
            <Button
              variant="outline"
              className="hidden border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black"
              size="lg"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
