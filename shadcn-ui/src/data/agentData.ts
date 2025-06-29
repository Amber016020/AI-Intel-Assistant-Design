// src/data/agentData.ts
import React from 'react';
import { BrainIcon, NewspaperIcon, BookIcon, CodeIcon, BarChart4Icon, UserIcon, TerminalIcon } from 'lucide-react';

interface AgentData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  gradient: string;
  iconBg: string;
  icon: React.ComponentType<{ className?: string }>;
  inputExample: string;
  outputExample: string;
}

export const agents: AgentData[] = [
  {
    id: 'orchestrator',
    title: 'Orchestrator Agent',
    subtitle: 'The Strategic Command Center',
    description: 
      'The Orchestrator is the central coordinator of the system. It interprets user requests, breaks them down into structured workflows, and delegates tasks to the appropriate specialized agents.',
    capabilities: [
      'Request analysis and intent classification',
      'Task decomposition and workflow creation',
      'Agent coordination and synchronization',
      'SOP (Standard Operating Procedure) execution',
      'Final output quality control'
    ],
    gradient: 'from-purple-600 to-purple-400',
    iconBg: 'bg-gradient-to-br from-purple-600 to-purple-400',
    icon: BrainIcon,
    inputExample: 'User query: "Research the latest trends in Multi-Agent systems for game development"',
    outputExample: `Project_GameDev_MA\n- Task #1: Information Gathering (assigned to Collector Agents)\n- Task #2: Information Analysis (assigned to Analyst Agent)\n- Task #3: Personalization (assigned to Personalizer Agent)\n- Task #4: Final Report Generation`
  },
  {
    id: 'news',
    title: 'News Monitoring Agent',
    subtitle: 'Real-time Industry Intelligence',
    description: 
      'The News Monitoring Agent continuously scans trusted news sources, industry blogs, and technology publications to gather the latest developments and announcements related to your research interests.',
    capabilities: [
      'Source credibility assessment',
      'Topic relevance filtering',
      'Content extraction and summarization',
      'Trend identification across multiple sources',
      'Breaking news alerts for critical developments'
    ],
    gradient: 'from-green-500 to-emerald-400',
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-400',
    icon: NewspaperIcon,
    inputExample: 'Domain: "AI in game development", Sources: Gamasutra, 80.lv, VentureBeat, Time Range: Last 30 days',
    outputExample: `TRENDING (3 articles):\n1. "Unity Unveils New AI NPC Framework" - Gamasutra, June 15\n   Key points: Dynamic behavior trees, LLM integration, Easy customization\n2. "Procedural NPC Dialogue: The End of Static Scripts?" - 80.lv, June 10\n   Key points: GPT integration, voice synthesis pipeline, memory systems`
  },
  {
    id: 'academic',
    title: 'Academic Research Agent',
    subtitle: 'Scholarly Knowledge Mining',
    description: 
      'The Academic Research Agent searches through scientific papers, conference proceedings, and academic journals to extract technical information, methodologies, and cutting-edge research findings.',
    capabilities: [
      'Citation analysis and source validation',
      'Technical concept extraction and explanation',
      'Research methodology assessment',
      'Cross-paper correlation and contradiction detection',
      'Domain-specific terminology translation to plain language'
    ],
    gradient: 'from-blue-500 to-cyan-400',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-400',
    icon: BookIcon,
    inputExample: 'Topic: "Large Language Models for Dynamic Task Generation", Sources: ArXiv, ACL, IEEE, Max Papers: 5',
    outputExample: `PAPERS ANALYZED (2):\n1. "LLM-Driven Dynamic Task Generation in Open-World Games" (ArXiv:2306.xxxx)\n   Methodology: Fine-tuned GPT-4 with reinforcement learning from player feedback\n   Key findings: 43% increase in perceived mission variety, 37% reduction in development time\n2. "Comparative Study of Quest Generation Algorithms" (GDC Proceedings 2023)`
  },
  {
    id: 'github',
    title: 'GitHub Agent',
    subtitle: 'Open Source Implementation Scanner',
    description: 
      'The GitHub Agent searches code repositories, documentation, and discussions to find practical implementations, tools, and libraries that match your research needs.',
    capabilities: [
      'Repository quality assessment (stars, issues, activity)',
      'Code pattern recognition and extraction',
      'Documentation parsing and summarization',
      'Implementation examples identification',
      'Community sentiment analysis'
    ],
    gradient: 'from-gray-600 to-gray-400',
    iconBg: 'bg-gradient-to-br from-gray-600 to-gray-400',
    icon: CodeIcon,
    inputExample: 'Search: "Unity AI behavior tree", "LLM dialogue generation framework", Language: C#/Python, Min Stars: 100',
    outputExample: `REPOSITORIES FOUND (2):\n1. unity-behavior-toolkit (★ 2.4k, 45 contribs)\n   Key features: Modular behavior trees, Visual editor, Runtime debugging\n   Sample code extracted: \`BehaviorTree.Create().AddSequence(...);\`\n2. llm-dialogue-framework (★ 850, updated 2 days ago)\n   Dependencies: Python 3.9+, PyTorch, Transformers\n   Installation: \`pip install llm-dialogue-framework\``
  },
  {
    id: 'analyst',
    title: 'Analyst Agent',
    subtitle: 'Pattern Recognition & Synthesis',
    description: 
      'The Analyst Agent processes raw information from all collector agents, identifying patterns, correlations, and key insights across diverse data sources to create a cohesive analysis.',
    capabilities: [
      'Cross-source information correlation',
      'Contradiction and consensus identification',
      'Gap analysis and research recommendations',
      'Insight extraction and prioritization',
      'Structured knowledge representation'
    ],
    gradient: 'from-amber-500 to-orange-400',
    iconBg: 'bg-gradient-to-br from-amber-500 to-orange-400',
    icon: BarChart4Icon,
    inputExample: 'Raw inputs: 3 news articles, 2 academic papers, 2 GitHub repositories on Multi-Agent systems in game development',
    outputExample: `CORE INSIGHTS:\n1. Convergent trend: LLM integration with behavior trees is dominant approach (found in 2 papers, 4 implementations)\n2. Key innovation: "Generative NPC systems" combining procedural tasks with contextual dialogue\n3. Implementation gap: Most solutions lack memory systems for persistent NPC personality\n4. Recommended focus: LLM fine-tuning approaches specifically for narrative consistency`
  },
  {
    id: 'personalizer',
    title: 'Personalizer Agent',
    subtitle: 'User-Adapted Intelligence',
    description: 
      'The Personalizer Agent customizes information based on your historical preferences, expertise level, and current context to deliver the most relevant and actionable intelligence.',
    capabilities: [
      'User knowledge graph maintenance',
      'Implicit and explicit feedback processing',
      'Content format and depth adaptation',
      'Interest drift detection',
      'Cross-topic connection identification'
    ],
    gradient: 'from-pink-600 to-red-400',
    iconBg: 'bg-gradient-to-br from-pink-600 to-red-400',
    icon: UserIcon,
    inputExample: 'Analyst report, User profile (expertise: narrative design, past interests: AI dialogue systems, NPC behavior)',
    outputExample: `PERSONALIZED BRIEF:\n[HIGHLIGHTED] Narrative Applications of Multi-Agent Systems\n- Dialogue generation framework prioritized (matches user expertise)\n- Character consistency mechanics explained in depth\n- Technical implementation details summarized but available in appendix\n- Connected to previous interest: "Dynamic Dialogue Trees" (from user history)`
  }
];