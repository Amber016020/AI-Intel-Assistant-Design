// src/components/ScenarioSimulation.tsx
import { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlayIcon, PauseIcon, RotateCwIcon } from 'lucide-react';

type Step = {
  time: string;
  agent: string;
  title: string;
  description: string;
  icon: string;
  color: string;
};

const steps: Step[] = [
  {
    time: '09:00 AM',
    agent: 'User',
    title: 'Task Initiation',
    description: 'You ask: "Research the latest trends in Multi-Agent systems for game development."',
    icon: 'user',
    color: 'bg-blue-500'
  },
  {
    time: '09:01 AM',
    agent: 'Orchestrator',
    title: 'Workflow Planning',
    description: 'The Orchestrator analyzes your request and creates Project_GameDev_MA with a detailed task chain for all agents.',
    icon: 'cpu',
    color: 'bg-purple-600'
  },
  {
    time: '09:02 AM',
    agent: 'News Agent',
    title: 'Industry News Collection',
    description: 'Monitors Gamasutra, 80.lv and other game development resources, finding 3 articles on AI-driven NPCs.',
    icon: 'newspaper',
    color: 'bg-green-500'
  },
  {
    time: '09:03 AM',
    agent: 'Academic Agent',
    title: 'Research Analysis',
    description: 'Discovers 2 papers on "LLM-based Dynamic Task Generation" and "RL-driven NPC Behavior" from ArXiv and GDC Vault.',
    icon: 'book',
    color: 'bg-green-500'
  },
  {
    time: '09:04 AM',
    agent: 'GitHub Agent',
    title: 'Code Repository Search',
    description: 'Finds high-star repositories: a Unity AI behavior tree tool and an LLM dialogue generation framework.',
    icon: 'code',
    color: 'bg-green-500'
  },
  {
    time: '09:05 AM',
    agent: 'Analyst',
    title: 'Information Synthesis',
    description: 'Integrates all sources, identifies key connection between "Generative AI NPCs" and "LLM Task Generation."',
    icon: 'bar-chart',
    color: 'bg-amber-500'
  },
  {
    time: '09:06 AM',
    agent: 'Personalizer',
    title: 'Customization',
    description: 'References your knowledge graph, prioritizes content on narrative design over engine architecture based on your preferences.',
    icon: 'user-check',
    color: 'bg-pink-600'
  },
  {
    time: '09:10 AM',
    agent: 'Delivery',
    title: 'Final Output',
    description: 'Creates a 5-page briefing with key insights, summaries, and implementation guides, synchronized to your Notion and calendar.',
    icon: 'file-text',
    color: 'bg-blue-600'
  }
];

const ScenarioSimulation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setActiveStep(prev => {
          const nextStep = prev + 1;
          if (nextStep >= steps.length) {
            setIsPlaying(false);
            return prev;
          }
          return nextStep;
        });
      }, 2000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying]);
  
  const handleStart = () => {
    setIsPlaying(true);
    setHasStarted(true);
  };
  
  const handlePause = () => {
    setIsPlaying(false);
  };
  
  const handleReset = () => {
    setActiveStep(0);
    setIsPlaying(false);
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'user':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'cpu':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      case 'newspaper':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      case 'book':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'bar-chart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'user-check':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'file-text':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="simulation" className="py-24 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-purple-500 text-purple-400">
            Workflow Simulation
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              See Agents in Action
            </span>
          </h2>
          <p className="text-slate-300">
            Watch how our multi-agent system processes a research task from start to finish,
            with each specialized agent contributing to the final intelligence product.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-purple-800/30 bg-black/60 backdrop-blur overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-3">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-10 w-10 rounded-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black"
                    onClick={isPlaying ? handlePause : handleStart}
                  >
                    {isPlaying ? <PauseIcon className="h-4 w-4" /> : <PlayIcon className="h-4 w-4" />}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-10 w-10 rounded-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black"
                    onClick={handleReset}
                    disabled={!hasStarted}
                  >
                    <RotateCwIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-24 top-0 bottom-0 w-px bg-purple-800/30"></div>
                
                {/* Timeline events */}
                <div className="space-y-8">
                  {steps.map((step, idx) => (
                    <div 
                      key={idx} 
                      className={`flex flex-col md:flex-row items-start relative transition-all duration-500 ${idx <= activeStep ? 'opacity-100' : 'opacity-30'}`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-24 w-5 h-5 rounded-full bg-black border-2 border-purple-500 transform -translate-x-1/2 mt-1.5 z-10"></div>
                      
                      {/* Time */}
                      <div className="hidden md:block md:w-24 text-right pr-8 text-sm text-slate-400 font-mono">
                        {step.time}
                      </div>
                      
                      {/* Content */}
                      <div className="pl-8 md:pl-12 flex-1">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full ${step.color} bg-opacity-20 mb-2`}>
                          <span className={`mr-2 flex items-center justify-center h-5 w-5 rounded-full ${step.color}`}>
                            {renderIcon(step.icon)}
                          </span>
                          <span className="text-sm font-medium">{step.agent}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-1">{step.title}</h4>
                        <p className="text-slate-300 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress indicator */}
              <div className="mt-8">
                <div className="h-1 bg-purple-800/30 rounded overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                    style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>Start</span>
                  <span>{`${activeStep + 1} of ${steps.length} steps`}</span>
                  <span>Complete</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScenarioSimulation;