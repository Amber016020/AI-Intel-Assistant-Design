// src/pages/Index.tsx
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SystemArchitecture from '@/components/SystemArchitecture';
import AgentRoster from '@/components/AgentRoster';
import ScenarioSimulation from '@/components/ScenarioSimulation';
import Footer from '@/components/Footer';
import { initializeAnimations } from '@/lib/animations';

export default function Index() {
  useEffect(() => {
    // Initialize animations when component mounts
    initializeAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        <SystemArchitecture />
        <AgentRoster />
        <ScenarioSimulation />
      </main>
      <Footer />
    </div>
  );
}