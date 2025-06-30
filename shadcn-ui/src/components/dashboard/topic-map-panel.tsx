// src/components/dashboard/topic-map-panel.tsx

import React from "react";

interface TopicMapPanelProps {
  query: string;
}

const relatedTopicsMap: Record<string, string[]> = {
  "Federated Learning": ["Privacy Preservation", "Edge Computing", "Distributed Training"],
  "LLM": ["Prompt Engineering", "Knowledge Distillation", "Inference Optimization"],
  "AI Agent": ["Multi-Agent Systems", "Autonomous Planning", "Task Decomposition"],
  "今日的AI發展趨勢": ["AGI", "AI Governance", "Agent Simulation"]
};

export const TopicMapPanel: React.FC<TopicMapPanelProps> = ({ query }) => {
  const relatedTopics = relatedTopicsMap[query] || ["No related topics found"];

  return (
    <div className="bg-black/30 border border-white/10 p-4 rounded-lg text-white">
      <h2 className="text-lg font-semibold text-purple-300 mb-2">
        Cross-Topic Connector
      </h2>
      <p className="text-slate-300 mb-4">
        Related topics based on: <span className="font-mono text-white">{query}</span>
      </p>
      <div className="flex flex-wrap gap-2">
        {relatedTopics.map((topic, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm bg-purple-700/70 text-white rounded-full border border-purple-400"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};
