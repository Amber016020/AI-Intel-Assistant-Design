// src/components/AgentRoster.tsx
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { agents } from '@/data/agentData';

const AgentRoster = () => {
  const [selectedAgent, setSelectedAgent] = useState(agents[0].id);

  return (
    <section id="agents" className="py-24 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-purple-500 text-purple-400">
            Agent Roster
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Specialized AI Agents
            </span>
          </h2>
          <p className="text-slate-300">
            Each agent in the system is designed with a specific role and expertise, working together to transform raw information into actionable intelligence.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs 
            defaultValue={agents[0].id} 
            onValueChange={setSelectedAgent}
            className="w-full"
          >
            <div className="mb-8">
              <TabsList className="w-full flex overflow-x-auto justify-start md:justify-center p-1 bg-black/50 border border-purple-800/30 rounded-lg">
                {agents.map(agent => (
                  <TabsTrigger 
                    key={agent.id}
                    value={agent.id}
                    className="py-3 px-4 data-[state=active]:bg-purple-800/20 data-[state=active]:text-purple-400 transition-all duration-300"
                  >
                    {agent.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {agents.map(agent => (
              <TabsContent 
                key={agent.id} 
                value={agent.id}
                className="focus-visible:outline-none focus-visible:ring-0"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <Card className="border-purple-800/30 bg-black/60 backdrop-blur overflow-hidden">
                      <CardHeader className={`bg-gradient-to-r ${agent.gradient} p-6`}>
                        <CardTitle className="text-2xl text-white">{agent.title}</CardTitle>
                        <CardDescription className="text-white/80">
                          {agent.subtitle}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-slate-300 mb-4">
                          {agent.description}
                        </p>
                        <h4 className="font-semibold text-purple-400 mb-2">Key Capabilities:</h4>
                        <ul className="space-y-2">
                          {agent.capabilities.map((capability, index) => (
                            <li key={index} className="flex items-start">
                              <span className="inline-flex items-center justify-center rounded-full bg-purple-800/30 p-1 mr-2 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              <span className="text-slate-300 text-sm">{capability}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-30"></div>
                      <div className="relative bg-black rounded-lg p-6 h-full">
                        <div className={`w-20 h-20 rounded-full ${agent.iconBg} flex items-center justify-center mx-auto mb-6`}>
                          <agent.icon className="h-10 w-10 text-white" />
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-purple-400 mb-2">Input Processing</h4>
                          <div className="bg-black/50 border border-purple-800/20 rounded p-3 mb-3">
                            <div className="text-slate-400 text-xs">{agent.inputExample}</div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-purple-400 mb-2">Output Generation</h4>
                          <div className="bg-black/50 border border-purple-800/20 rounded p-3">
                            <div className="text-slate-400 text-xs">{agent.outputExample}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AgentRoster;