// src/components/dashboard/papers-card.tsx
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, RefreshCw, FileText } from "lucide-react";
import { ResearchPaper } from "@/lib/api";
import { formatDate, truncateText } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface PapersCardProps {
  papers: ResearchPaper[] | undefined;
  isLoading: boolean;
  onRefresh: () => void;
}

export function PapersCard({ papers, isLoading, onRefresh }: PapersCardProps) {
  return (
    <Card className="col-span-1 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Research Papers</CardTitle>
          <CardDescription>Latest AI research publications</CardDescription>
        </div>
        <Button variant="ghost" size="icon" onClick={onRefresh} disabled={isLoading}>
          <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
        </Button>
      </CardHeader>
      <CardContent className="pb-0 pt-2">
        {isLoading ? (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="space-y-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-16 w-full" />
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {papers?.map((paper) => (
              <div key={paper.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <h3 className="font-medium text-sm mb-1 flex items-start">
                  <FileText className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                  <span>{paper.title}</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {paper.summary || truncateText(paper.abstract, 150)}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-xs text-muted-foreground">
                    {paper.authors.slice(0, 3).join(', ')}
                    {paper.authors.length > 3 && ' et al.'}
                  </div>
                  <div className="flex items-center gap-2">
                    {paper.journal && (
                      <Badge variant="outline" className="text-xs">
                        {paper.journal}
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {formatDate(paper.publishedAt)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {(!papers || papers.length === 0) && !isLoading && (
              <div className="text-center py-6 text-muted-foreground">
                No research papers available
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="outline" size="sm" className="w-full" asChild>
          <a href="https://arxiv.org/list/cs.AI/recent" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-3.5 w-3.5 mr-1" />
            Browse more papers
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}