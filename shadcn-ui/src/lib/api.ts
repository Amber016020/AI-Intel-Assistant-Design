// src/lib/api.ts
export interface NewsItem {
  id: string;
  title: string;
  content: string;
  summary?: string;
  source: string;
  publishedAt: string;
  url: string;
}

export interface GitHubRepo {
  id: string;
  name: string;
  description: string;
  url: string;
  stars: number;
  owner: string;
  language: string;
  updatedAt: string;
  keywords?: string[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  summary?: string;
  publishedAt: string;
  url: string;
  journal?: string;
  keywords?: string[];
}

export interface IntegratedInsight {
  title: string;
  content: string;
  source: string;
  createdAt: string;
  trend?: string;
  applicationIdeas?: string[];
  keywords?: string[];
}

// Mock API for news
export const fetchNewsArticles = async (): Promise<NewsItem[]> => {
  // In a real implementation, this would call an actual API endpoint
  // For now, we'll return mock data
  const mockNews: NewsItem[] = [
    {
      id: '1',
      title: 'OpenAI Releases GPT-5 with Enhanced Reasoning Capabilities',
      content: 'OpenAI has announced the release of GPT-5, featuring significant improvements in reasoning capabilities. The new model shows superior performance in complex problem solving, mathematical reasoning, and coding tasks compared to its predecessor. According to OpenAI, GPT-5 scores 30% higher on benchmark tests and demonstrates a marked reduction in hallucinations.',
      source: 'AI News Daily',
      publishedAt: '2023-07-15T09:30:00Z',
      url: 'https://example.com/ai-news/gpt5-release',
    },
    {
      id: '2',
      title: 'Google Introduces New Quantum Computing Framework',
      content: 'Google has unveiled a new open-source framework for quantum computing development. Named QuantumFlow, the framework aims to simplify the creation of quantum algorithms and make quantum computing more accessible to researchers and developers without specialized knowledge. The framework includes pre-built quantum circuits, optimization tools, and compatibility with existing Google quantum hardware.',
      source: 'Tech Insights',
      publishedAt: '2023-07-14T14:45:00Z',
      url: 'https://example.com/tech/google-quantum-framework',
    },
    {
      id: '3',
      title: 'New Study Shows AI Models Can Learn From Significantly Less Data',
      content: 'Researchers from MIT and Stanford have published a groundbreaking paper demonstrating a new training method that allows AI models to achieve high performance with up to 70% less training data. The technique, called "Adaptive Synthetic Sampling," combines selective data augmentation with a novel feedback mechanism during training. This approach could dramatically reduce the computational resources needed for training large language models.',
      source: 'Science Daily',
      publishedAt: '2023-07-13T11:20:00Z',
      url: 'https://example.com/science/ai-training-breakthrough',
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => resolve(mockNews), 500);
  });
};

// Mock API for GitHub repositories
export const fetchGitHubRepositories = async (): Promise<GitHubRepo[]> => {
  // In a real implementation, this would call the GitHub API
  const mockRepos: GitHubRepo[] = [
    {
      id: '1',
      name: 'openai/whisper',
      description: 'Robust Speech Recognition via Large-Scale Weak Supervision',
      url: 'https://github.com/openai/whisper',
      stars: 24800,
      owner: 'openai',
      language: 'Python',
      updatedAt: '2023-07-14T18:30:00Z',
      keywords: ['Speech Recognition', 'Audio Processing', 'OpenAI', 'Deep Learning'],
    },
    {
      id: '2',
      name: 'facebook/llama',
      description: 'Inference code for LLaMA models',
      url: 'https://github.com/facebook/llama',
      stars: 19600,
      owner: 'facebook',
      language: 'Python',
      updatedAt: '2023-07-15T09:15:00Z',
      keywords: ['Language Model', 'LLM', 'Meta', 'Transformer'],
    },
    {
      id: '3',
      name: 'microsoft/AutoGen',
      description: 'Enable Next-Gen LLM Applications via Multi-Agent Conversation Framework',
      url: 'https://github.com/microsoft/autogen',
      stars: 15200,
      owner: 'microsoft',
      language: 'Python',
      updatedAt: '2023-07-13T22:45:00Z',
      keywords: ['Multi-Agent System', 'LLM', 'Automation', 'Microsoft'],
    },
  ];


  return new Promise((resolve) => {
    setTimeout(() => resolve(mockRepos), 500);
  });
};

// Mock API for research papers
export const fetchResearchPapers = async (): Promise<ResearchPaper[]> => {
  // In a real implementation, this would call an API like arxiv or Semantic Scholar
  const mockPapers: ResearchPaper[] = [
    {
      id: '1',
      title: 'Mamba: Linear-Time Sequence Modeling with Selective State Spaces',
      authors: ['Albert Gu', 'Karan Goel', 'Christopher Ré'],
      abstract: 'We introduce a new state space model architecture, Mamba, that extends recent theoretical advances in state space models to perform efficient sequence modeling. Mamba is a selective SSM that introduces an input-dependent gating mechanism, allowing each token to control how much information to retain from past states. This simplifies the architecture while improving training and inference efficiency. Our experiments demonstrate that Mamba outperforms Transformers on long-range modeling tasks.',
      publishedAt: '2023-12-01T00:00:00Z',
      url: 'https://arxiv.org/abs/2312.00752',
      journal: 'arXiv',
    },
    {
      id: '2',
      title: 'High-Resolution Image Synthesis with Latent Diffusion Models',
      authors: ['Robin Rombach', 'Andreas Blattmann', 'Björn Ommer'],
      abstract: 'By decomposing the image formation process into a sequential application of denoising autoencoders, diffusion models have achieved state-of-the-art synthesis results on image data. We present a method that enables efficient training of diffusion models in the latent space of pretrained autoencoders, resulting in high-quality image synthesis at a fraction of the computational cost.',
      publishedAt: '2022-03-25T00:00:00Z',
      url: 'https://arxiv.org/abs/2112.10752',
      journal: 'arXiv',
    },
    {
      id: '3',
      title: 'Training language models to follow instructions with human feedback',
      authors: ['Long Ouyang', 'Jeff Wu', 'Xu Jiang', 'Diogo Almeida', 'Carroll Wainwright'],
      abstract: 'We present a method for fine-tuning language models to align with human preferences. Our approach leverages human feedback to train a reward model, which is then used to optimize policies via reinforcement learning. The resulting models—InstructGPT—are better at following instructions, more truthful, and less toxic than GPT-3.',
      publishedAt: '2022-03-04T00:00:00Z',
      url: 'https://arxiv.org/abs/2203.02155',
      journal: 'arXiv',
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => resolve(mockPapers), 500);
  });
};

// Mock API for LLM-based integration and insights
export const generateIntegratedInsights = async (
  news: NewsItem[], 
  repos: GitHubRepo[], 
  papers: ResearchPaper[]
): Promise<IntegratedInsight> => {
  // In a real implementation, this would call an LLM API (like OpenAI)
  // to analyze and integrate the information from different sources
  
  // Mock response based on the provided data
  const insight: IntegratedInsight = {
    title: "AI Development Trend: Efficiency and Accessibility",
    content: "Recent developments across research papers, open-source projects, and news indicate a strong trend toward making AI systems more efficient and accessible. OpenAI's GPT-5 shows improved reasoning with fewer hallucinations, while MIT researchers have found methods to train models with 70% less data. In the open-source domain, projects like Google's QuantumFlow and Meta's LLaMA are democratizing access to cutting-edge AI and quantum computing technologies. Research papers on Mamba, latent diffusion models, and instruction-following via human feedback all point to more efficient architectures and training methods.",
    source: "AI Integration Engine",
    createdAt: new Date().toISOString(),
    trend: "Increasing focus on computational efficiency and democratizing AI access",
    applicationIdeas: [
      "Develop lightweight AI models for edge devices using the reduced data training techniques",
      "Create a tool that integrates human feedback mechanisms into model training pipelines",
      "Build an application that leverages quantum computing frameworks for AI optimization"
    ]
  };

  return new Promise((resolve) => {
    setTimeout(() => resolve(insight), 1000);
  });
};

// Mock API for summarizing content using an LLM
export const summarizeContent = async (content: string): Promise<string> => {
  // In a real implementation, this would call an LLM API to generate a summary
  // For now, we'll just return a shortened version of the content
  
  if (!content || content.length < 50) {
    return content;
  }
  
  // Simple mock summary (in real app, this would be generated by an LLM)
  return content.slice(0, Math.min(content.length, 150)) + '...';
};