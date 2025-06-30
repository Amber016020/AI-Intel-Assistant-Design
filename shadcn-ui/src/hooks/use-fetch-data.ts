// src/hooks/use-fetch-data.ts
import { useState, useEffect, useCallback } from "react";
import { 
  fetchNewsArticles, 
  fetchGitHubRepositories, 
  fetchResearchPapers,
  generateIntegratedInsights,
  NewsItem,
  GitHubRepo,
  ResearchPaper,
  IntegratedInsight
} from "@/lib/api";

export const useFetchData = () => {
  // State for data
  const [news, setNews] = useState<NewsItem[]>([]);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [papers, setPapers] = useState<ResearchPaper[]>([]);
  const [insight, setInsight] = useState<IntegratedInsight | undefined>(undefined);
  
  // State for loading indicators
  const [loadingNews, setLoadingNews] = useState(true);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [loadingPapers, setLoadingPapers] = useState(true);
  const [loadingInsight, setLoadingInsight] = useState(false);

  // Fetch news articles
  const fetchNews = useCallback(async () => {
    setLoadingNews(true);
    try {
      const data = await fetchNewsArticles();
      setNews(data);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoadingNews(false);
    }
  }, []);

  // Fetch GitHub repositories
  const fetchRepos = useCallback(async () => {
    setLoadingRepos(true);
    try {
      const data = await fetchGitHubRepositories();
      setRepos(data);
    } catch (error) {
      console.error("Error fetching repos:", error);
    } finally {
      setLoadingRepos(false);
    }
  }, []);

  // Fetch research papers
  const fetchPapers = useCallback(async () => {
    setLoadingPapers(true);
    try {
      const data = await fetchResearchPapers();
      setPapers(data);
    } catch (error) {
      console.error("Error fetching papers:", error);
    } finally {
      setLoadingPapers(false);
    }
  }, []);

  // Generate integrated insights
  const generateInsights = useCallback(async () => {
    if (news.length === 0 || repos.length === 0 || papers.length === 0) {
      return;
    }
    
    setLoadingInsight(true);
    try {
      const data = await generateIntegratedInsights(news, repos, papers);
      setInsight(data);
    } catch (error) {
      console.error("Error generating insights:", error);
    } finally {
      setLoadingInsight(false);
    }
  }, [news, repos, papers]);

  // Refresh functions
  const refreshNews = useCallback(() => {
    fetchNews();
  }, [fetchNews]);

  const refreshRepos = useCallback(() => {
    fetchRepos();
  }, [fetchRepos]);

  const refreshPapers = useCallback(() => {
    fetchPapers();
  }, [fetchPapers]);

  // Initial data fetch
  useEffect(() => {
    fetchNews();
    fetchRepos();
    fetchPapers();
  }, [fetchNews, fetchRepos, fetchPapers]);

  return {
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
  };
};