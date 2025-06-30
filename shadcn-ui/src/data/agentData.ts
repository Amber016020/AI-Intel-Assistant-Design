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
    subtitle: 'Workflow Strategist & Dispatcher',
    description: 
      'The Orchestrator Agent serves as the strategic dispatcher of the system. It interprets user queries, breaks them down into structured subtasks, and assigns each to the appropriate specialized agent.',
    capabilities: [
      'Understanding and classifying user intent',
      'Decomposing complex queries into subtasks',
      'Delegating tasks to appropriate agents'
    ],
    gradient: 'from-purple-600 to-purple-400',
    iconBg: 'bg-gradient-to-br from-purple-600 to-purple-400',
    icon: BrainIcon,
    inputExample: 'User query: "Research the latest trends in Multi-Agent systems for game development"',
    outputExample: `Project_GameDev_MA
  - Task #1: Information Gathering (assigned to News, Academic, GitHub Agents)
  - Task #2: Synthesis and Insight Extraction (assigned to Analyst Agent)
  - Task #3: User Relevance Personalization (assigned to Personalizer Agent)`
  }
  ,
    {
    id: 'news',
    title: 'News Monitoring Agent',
    subtitle: 'Real-time Industry Intelligence',
    description: 
      'The News Monitoring Agent tracks and curates news content from reliable industry sources. It identifies relevant developments, summarizes key information, and surfaces emerging trends relevant to the research topic of the user.',
    capabilities: [
      'Scanning and filtering from trusted media and tech sites',
      'Relevance detection based on user-defined topics',
      'Article summarization and metadata extraction',
      'Trend spotting across multiple articles',
      'Timely alerts on significant breakthroughs'
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
      'The Academic Research Agent searches academic databases and conferences to extract core findings, experimental methods, and insights from peer-reviewed papers relevant to your research focus.',
    capabilities: [
      'Identifying relevant papers from scholarly sources',
      'Extracting technical concepts and methodologies',
      'Simplifying domain-specific jargon',
      'Highlighting experimental results and comparative analyses',
      'Connecting ideas across multiple publications'
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
      'The GitHub Agent explores repositories to uncover real-world code implementations, libraries, and tools. It assesses code quality, extracts usage examples, and summarizes project documentation.',
    capabilities: [
      'Filtering by stars, forks, update frequency',
      'Recognizing relevant code patterns and usage examples',
      'Summarizing README files and setup instructions',
      'Flagging commonly used libraries and frameworks',
      'Analyzing issue discussions and community feedback'
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
      'The Analyst Agent integrates information from all collector agents to identify recurring patterns, highlight contradictions, and derive strategic insights tailored to the project goal.',
    capabilities: [
      'Comparing and aligning findings across sources',
      'Highlighting inconsistencies and convergences',
      'Suggesting knowledge gaps and next research steps',
      'Prioritizing insights based on impact and novelty',
      'Organizing insights into structured formats'
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
    subtitle: 'User-Centered Adaptation',
    description: 
      'The Personalizer Agent fine-tunes results by learning from the user’s past interactions, expertise, and evolving interests. It ensures that every output—whether a report, summary, or recommendation—is aligned with the user’s current context and preferences.',
    capabilities: [
      'Tracking user history and preferred content types',
      'Analyzing feedback signals like selections and dismissals',
      'Adjusting tone, detail level, and technical depth',
      'Highlighting information relevant to ongoing projects',
      'Recommending content based on past interests and workflows'
    ],
    gradient: 'from-pink-600 to-red-400',
    iconBg: 'bg-gradient-to-br from-pink-600 to-red-400',
    icon: UserIcon,
    inputExample: 'Input: Analyst report, User profile (background in game narrative design, interest in AI tools for NPC interaction)',
    outputExample: `PERSONALIZED BRIEF:\n[RELEVANT] Multi-Agent Dialogue Systems for Narrative Games\n- Emphasis on dialogue consistency techniques (aligned with user role)\n- Skips generic LLM intro, goes directly into behavior modeling\n- Provides comparative table of dialogue engines used in recent indie titles\n- Mentions previously saved topic: "Branching Narrative Tools"`
  }
];