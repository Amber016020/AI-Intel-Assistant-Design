import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { NewsCard } from "@/components/dashboard/news-card";
import { GitHubCard } from "@/components/dashboard/github-card";
import { PapersCard } from "@/components/dashboard/papers-card";
import { IntegrationPanel } from "@/components/dashboard/integration-panel";
import { TopicMapPanel } from "@/components/dashboard/topic-map-panel";
import { BriefExportPanel } from "@/components/dashboard/brief-export-panel";
import { useFetchData } from "@/hooks/use-fetch-data";
import { useSummary } from "@/hooks/use-summary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  const {
    news,
    repos,
    papers,
    insight,
    loadingNews,
    loadingRepos,
    loadingPapers,
    loadingInsight,
    refreshNews,
    refreshRepos,
    refreshPapers,
    generateInsights
  } = useFetchData();

  const {
    processSummaries,
    isProcessingSummaries
  } = useSummary();

  React.useEffect(() => {
    if (news?.length && !isProcessingSummaries) {
      processSummaries(news, "content");
    }
  }, [news, processSummaries, isProcessingSummaries]);

  React.useEffect(() => {
    if (papers?.length && !isProcessingSummaries) {
      processSummaries(papers, "abstract");
    }
  }, [papers, processSummaries, isProcessingSummaries]);

  const [activeTab, setActiveTab] = useState<string>("all");
  const [userQuestion, setUserQuestion] = useState("今日的AI發展趨勢");

  const handleQuestionSubmit = () => {
    console.log("使用者提問：", userQuestion);
    generateInsights(userQuestion); 
  };

  return (
    <DashboardLayout>
      {/* Main Dashboard Title */}
      <div className="mb-6 bg-black/50 backdrop-blur p-6 rounded-lg">
        <h1 className="text-3xl font-bold tracking-tight text-purple-400">Multi-Source Information Dashboard</h1>
        <p className="mt-2 text-slate-300">
          Aggregated insights from news sources, research papers, and GitHub repositories
        </p>
      </div>

      {/* Ask Your Question */}
      <div className="mb-6 bg-black/50 backdrop-blur p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-purple-400 mb-2">Ask Your Question</h2>
        <p className="text-slate-300 mb-4">
          What do you want to know? We'll fetch and summarize relevant information for you.
        </p>
        <div className="flex gap-2">
          <input
            className="flex-1 bg-black/30 border border-white/20 text-white px-4 py-2 rounded placeholder:text-slate-400"
            placeholder="e.g. What's new in AI agent research this week?"
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleQuestionSubmit()}
          />
          <button
            onClick={handleQuestionSubmit}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Integration Panel */}
      <div className="grid grid-cols-1 gap-6 mb-6 bg-black/50 backdrop-blur p-6 rounded-lg">
        <IntegrationPanel
          insight={insight}
          isLoading={loadingInsight}
          onGenerate={handleQuestionSubmit} 
        />
      </div>
      {/* Mini Brief Exporter */}
      <div className="grid grid-cols-1 gap-6 mb-6 bg-black/50 backdrop-blur p-6 rounded-lg">
        <BriefExportPanel insight={insight?.content || ""} />
      </div>

      {/* Tabs for Sources */}
      <Tabs
        defaultValue="all"
        value={activeTab}
        onValueChange={setActiveTab}
        className="mb-6 bg-black/50 backdrop-blur p-6 rounded-lg text-white"
      >
        <TabsList className="bg-black/30 border border-purple-700">
          <TabsTrigger value="all" className="text-white data-[state=active]:text-purple-400">All Sources</TabsTrigger>
          <TabsTrigger value="news" className="text-white data-[state=active]:text-purple-400">News</TabsTrigger>
          <TabsTrigger value="github" className="text-white data-[state=active]:text-purple-400">GitHub</TabsTrigger>
          <TabsTrigger value="papers" className="text-white data-[state=active]:text-purple-400">Research Papers</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NewsCard news={news} isLoading={loadingNews} onRefresh={refreshNews} />
            <GitHubCard repos={repos} isLoading={loadingRepos} onRefresh={refreshRepos} />
            <PapersCard papers={papers} isLoading={loadingPapers} onRefresh={refreshPapers} />
          </div>
        </TabsContent>

        <TabsContent value="news" className="mt-6">
          <div className="grid grid-cols-1 gap-6">
            <NewsCard news={news} isLoading={loadingNews} onRefresh={refreshNews} />
          </div>
        </TabsContent>

        <TabsContent value="github" className="mt-6">
          <div className="grid grid-cols-1 gap-6">
            <GitHubCard repos={repos} isLoading={loadingRepos} onRefresh={refreshRepos} />
          </div>
        </TabsContent>

        <TabsContent value="papers" className="mt-6">
          <div className="grid grid-cols-1 gap-6">
            <PapersCard papers={papers} isLoading={loadingPapers} onRefresh={refreshPapers} />
          </div>
        </TabsContent>
      </Tabs>

    </DashboardLayout>
  );
}
