// src/components/dashboard/integration-panel.tsx
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, Zap, Lightbulb } from "lucide-react";
import { IntegratedInsight } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";
import { getRandomColor } from "@/lib/utils";

interface IntegrationPanelProps {
  insight: IntegratedInsight | undefined;
  isLoading: boolean;
  onGenerate: () => void;
}

export function IntegrationPanel({ insight, isLoading, onGenerate }: IntegrationPanelProps) {
  return (
    <Card className="col-span-3 lg:col-span-3 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="flex items-center">
            <Zap className="h-5 w-5 mr-2 text-yellow-500" />
            Smart Insights
          </CardTitle>
          <CardDescription>
            AI-powered insights from combined sources
          </CardDescription>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onGenerate} 
          disabled={isLoading}
          className="flex items-center"
        >
          <RefreshCw className={`h-3.5 w-3.5 mr-1.5 ${isLoading ? 'animate-spin' : ''}`} />
          {isLoading ? 'Generating...' : 'Generate Insights'}
        </Button>
      </CardHeader>
      <CardContent className="pb-0 pt-2">
        {isLoading ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-32 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-5 w-48" />
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-8 w-60" />
                <Skeleton className="h-8 w-72" />
                <Skeleton className="h-8 w-52" />
              </div>
            </div>
          </div>
        ) : insight ? (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">{insight.title}</h3>
              <p className="text-muted-foreground">{insight.content}</p>
            </div>
            
            {insight.trend && (
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-2">
                    <Zap className="h-3.5 w-3.5" />
                  </span>
                  Identified Trend
                </h4>
                <p className="text-sm pl-7">{insight.trend}</p>
              </div>
            )}
            
            {insight.applicationIdeas && insight.applicationIdeas.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <span className="bg-amber-100 text-amber-800 p-1 rounded-full mr-2">
                    <Lightbulb className="h-3.5 w-3.5" />
                  </span>
                  Application Ideas
                </h4>
                <div className="flex flex-wrap gap-2 pl-7">
                  {insight.applicationIdeas.map((idea, index) => (
                    <Badge key={index} className={getRandomColor()}>
                      {idea}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <Zap className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>Click "Generate Insights" to analyze data from all sources</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-4 text-xs text-muted-foreground">
        {insight && (
          <div className="w-full flex justify-between items-center">
            <span>Source: {insight.source}</span>
            <span>Generated: {new Date(insight.createdAt).toLocaleString()}</span>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}