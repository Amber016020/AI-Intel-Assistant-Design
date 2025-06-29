// src/components/SystemArchitecture.tsx
import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const SystemArchitecture = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateNodes();
        }
      },
      { threshold: 0.2 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const animateNodes = () => {
    const nodeElements = document.querySelectorAll('.arch-node');
    nodeElements.forEach((node, index) => {
      setTimeout(() => {
        node.classList.add('active');
      }, index * 200);
    });
  };

  const nodes = [
    { id: 'user', label: 'User Input', description: 'Initiates the workflow with a research query' },
    { id: 'orchestrator', label: 'Orchestrator Agent', description: 'Analyzes the request and creates a task workflow' },
    { id: 'collectors', label: 'Collector Agents', description: 'Gather information from different sources' },
    { id: 'analyst', label: 'Analyst Agent', description: 'Synthesizes collected information' },
    { id: 'personalizer', label: 'Personalizer Agent', description: 'Customizes output based on user preferences' },
    { id: 'output', label: 'Final Output', description: 'Delivers actionable insights to the user' },
  ];

  return (
    <section id="architecture" className="py-24 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-purple-500 text-purple-400">
            System Design
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              System Architecture
            </span>
          </h2>
          <p className="text-slate-300">
            Inspired by MetaGPT's multi-agent framework, our system orchestrates specialized AI agents to work together, creating a powerful intelligence gathering and analysis pipeline.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative max-w-5xl mx-auto bg-black/50 border border-purple-800/40 rounded-lg p-6 backdrop-blur-sm"
        >
          {/* Architecture diagram - interactive nodes and connections */}
          <div className="architecture-diagram min-h-[400px] md:min-h-[500px] relative flex flex-col md:flex-row items-center justify-center gap-8 flex-wrap">
            <div className="absolute inset-0 z-0">
              <svg className="w-full h-full" preserveAspectRatio="none">
                {/* Connection between User and Orchestrator */}
                <line x1="20%" y1="20%" x2="50%" y2="20%" className="arch-connection" stroke="#9333ea" strokeWidth="2" strokeDasharray="5" />
                {/* Connection between Orchestrator and Collectors */}
                <line x1="50%" y1="20%" x2="20%" y2="50%" className="arch-connection" stroke="#9333ea" strokeWidth="2" strokeDasharray="5" />
                <line x1="50%" y1="20%" x2="50%" y2="50%" className="arch-connection" stroke="#9333ea" strokeWidth="2" strokeDasharray="5" />
                <line x1="50%" y1="20%" x2="80%" y2="50%" className="arch-connection" stroke="#9333ea" strokeWidth="2" strokeDasharray="5" />
                {/* Connections from Collectors to Analyst */}
                <line x1="20%" y1="50%" x2="50%" y2="80%" className="arch-connection" stroke="#9333ea" strokeWidth="2" strokeDasharray="5" />
                <line x1="50%" y1="50%" x2="50%" y2="80%" className="arch-connection" stroke="#9333ea" strokeWidth="2" strokeDasharray="5" />
                <line x1="80%" y1="50%" x2="50%" y2="80%" className="arch-connection" stroke="#9333ea" strokeWidth="2" strokeDasharray="5" />
                {/* Connection between Analyst and Personalizer */}
                <line x1="50%" y1="80%" x2="80%" y2="80%" className="arch-connection" stroke="#9333ea" strokeWidth="2" strokeDasharray="5" />
              </svg>
            </div>
            
            {/* User Input Node */}
            <div 
              className="arch-node user-node absolute left-[20%] top-[20%] transform -translate-x-1/2 -translate-y-1/2 z-10"
              onMouseEnter={() => setActiveNode('user')}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="mt-2 text-center text-sm font-medium text-white">User Input</div>
            </div>
            
            {/* Orchestrator Node */}
            <div 
              className="arch-node orchestrator-node absolute left-[50%] top-[20%] transform -translate-x-1/2 -translate-y-1/2 z-10"
              onMouseEnter={() => setActiveNode('orchestrator')}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div className="mt-2 text-center text-sm font-medium text-white">Orchestrator</div>
            </div>
            
            {/* Collector Nodes */}
            <div 
              className="arch-node collector-node-1 absolute left-[20%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10"
              onMouseEnter={() => setActiveNode('collectors')}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-green-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div className="mt-2 text-center text-xs font-medium text-white">News Agent</div>
            </div>
            
            <div 
              className="arch-node collector-node-2 absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10"
              onMouseEnter={() => setActiveNode('collectors')}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-green-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="mt-2 text-center text-xs font-medium text-white">Academic Agent</div>
            </div>
            
            <div 
              className="arch-node collector-node-3 absolute left-[80%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10"
              onMouseEnter={() => setActiveNode('collectors')}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-green-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="mt-2 text-center text-xs font-medium text-white">GitHub Agent</div>
            </div>
            
            {/* Analyst Node */}
            <div 
              className="arch-node analyst-node absolute left-[50%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 z-10"
              onMouseEnter={() => setActiveNode('analyst')}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="mt-2 text-center text-sm font-medium text-white">Analyst</div>
            </div>
            
            {/* Personalizer Node */}
            <div 
              className="arch-node personalizer-node absolute left-[80%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 z-10"
              onMouseEnter={() => setActiveNode('personalizer')}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-600 to-red-400 flex items-center justify-center shadow-lg shadow-pink-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="mt-2 text-center text-sm font-medium text-white">Personalizer</div>
            </div>
          </div>
          
          {/* Description panel that changes based on active node */}
          <div className="mt-8">
            <Card className="border-purple-800/30 bg-black/60 backdrop-blur">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">
                  {activeNode ? nodes.find(n => n.id === activeNode)?.label || 'System Overview' : 'System Overview'}
                </h3>
                <p className="text-slate-300 text-sm md:text-base">
                  {activeNode 
                    ? nodes.find(n => n.id === activeNode)?.description || 'Hover over a component to see details'
                    : 'This architecture enables specialized AI agents to collaborate on complex intelligence tasks. Hover over each component to learn more.'}
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-slate-300 italic">
            "Multi-Agent systems represent the next evolution in AI, transitioning from single-purpose tools to collaborative teams that leverage collective intelligence."
          </p>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;