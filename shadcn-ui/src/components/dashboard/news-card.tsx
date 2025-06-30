// src/components/dashboard/news-card.tsx
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, RefreshCw } from "lucide-react";
import { NewsItem } from "@/lib/api";
import { formatDate, getSourceIcon, truncateText } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface NewsCardProps {
  news: NewsItem[] | undefined;
  isLoading: boolean;
  onRefresh: () => void;
}

export function NewsCard({ news, isLoading, onRefresh }: NewsCardProps) {
  return (
    <Card className="col-span-1 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Latest News</CardTitle>
          <CardDescription>AI and technology news updates</CardDescription>
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
                <Skeleton className="h-20 w-full" />
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {news?.map((item) => (
              <div key={item.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {item.summary || truncateText(item.content, 150)}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-lg" aria-hidden="true">{getSourceIcon(item.source)}</span>
                    <span className="text-xs text-muted-foreground">{item.source}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {formatDate(item.publishedAt)}
                  </Badge>
                </div>
              </div>
            ))}
            {(!news || news.length === 0) && !isLoading && (
              <div className="text-center py-6 text-muted-foreground">
                No news articles available
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="outline" size="sm" className="w-full" asChild>
          <a href="https://news.google.com/search?q=artificial+intelligence" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-3.5 w-3.5 mr-1" />
            View more news
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}