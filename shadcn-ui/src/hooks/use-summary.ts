// src/hooks/use-summary.ts
import { useState, useCallback } from "react";
import { summarizeContent } from "@/lib/api";
import { NewsItem, ResearchPaper } from "@/lib/api";

type Item = NewsItem | ResearchPaper;
type ContentField = "content" | "abstract";

export const useSummary = () => {
  const [isProcessingSummaries, setIsProcessingSummaries] = useState(false);

  // Process summaries for a collection of items
  const processSummaries = useCallback(
    async <T extends Item>(items: T[], contentField: ContentField): Promise<void> => {
      if (!items || items.length === 0 || isProcessingSummaries) return;

      setIsProcessingSummaries(true);

      try {
        // Process items in sequence to avoid rate limits
        for (const item of items) {
          if (!item.summary) {
            const contentToSummarize = item[contentField] as string;
            if (contentToSummarize) {
              const summary = await summarizeContent(contentToSummarize);
              // Update the item with the summary
              // Note: In a real implementation, this would likely update a state or database
              item.summary = summary;
            }
          }
        }
      } catch (error) {
        console.error("Error processing summaries:", error);
      } finally {
        setIsProcessingSummaries(false);
      }
    },
    [isProcessingSummaries]
  );

  return {
    processSummaries,
    isProcessingSummaries
  };
};