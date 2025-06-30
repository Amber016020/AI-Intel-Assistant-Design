// src/components/dashboard/github-card.tsx
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, RefreshCw, Star, Github } from "lucide-react";
import { GitHubRepo } from "@/lib/api";
import { formatDate, truncateText } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface GitHubCardProps {
  repos: GitHubRepo[] | undefined;
  isLoading: boolean;
  onRefresh: () => void;
}

export function GitHubCard({ repos, isLoading, onRefresh }: GitHubCardProps) {
  return (
    <Card className="col-span-1 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>GitHub Trending</CardTitle>
          <CardDescription>Popular AI and ML repositories</CardDescription>
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
                <Skeleton className="h-12 w-full" />
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {repos?.map((repo) => (
              <div key={repo.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <h3 className="font-medium text-sm mb-1 flex items-center">
                <Github className="h-4 w-4 mr-1" />
                {repo.owner}/{repo.name.split('/')[1] || repo.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {truncateText(repo.description, 120)}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">{repo.language}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Star className="h-3 w-3 mr-0.5 fill-yellow-400 stroke-yellow-400" />
                    {repo.stars.toLocaleString()}
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">
                  Updated {formatDate(repo.updatedAt)}
                </span>
              </div>

              {/* Display keywords (if available) */}
              {repo.keywords && repo.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {repo.keywords.map((topic: string) => (
                    <Badge key={topic} variant="outline" className="text-xs">
                      #{topic}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            ))}
            {(!repos || repos.length === 0) && !isLoading && (
              <div className="text-center py-6 text-muted-foreground">
                No repositories available
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="outline" size="sm" className="w-full" asChild>
          <a href="https://github.com/topics/artificial-intelligence" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-3.5 w-3.5 mr-1" />
            Explore more repositories
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}