// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(inputDate: string): string {
  const date = new Date(inputDate);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export function truncateText(text: string, maxLength: number = 100): string {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function getSourceIcon(source: string): string {
  // Simple mapping of sources to emoji icons
  // In a real app, you might use actual icons or logos
  const sourceMap: Record<string, string> = {
    'AI News Daily': '🤖',
    'Tech Insights': '💻',
    'Science Daily': '🔬',
    'arXiv': '📄',
    'GitHub': '👩‍💻',
    'AI Integration Engine': '🧠',
  };

  return sourceMap[source] || '📰';
}

export function getRandomColor(): string {
  const colors = [
    'bg-red-100 text-red-800',
    'bg-blue-100 text-blue-800',
    'bg-green-100 text-green-800',
    'bg-yellow-100 text-yellow-800',
    'bg-purple-100 text-purple-800',
    'bg-pink-100 text-pink-800',
    'bg-indigo-100 text-indigo-800',
  ];
  
  return colors[Math.floor(Math.random() * colors.length)];
}

export function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch (e) {
    return url;
  }
}

export function groupByDate<T extends { publishedAt: string }>(items: T[]): Record<string, T[]> {
  const groupedItems: Record<string, T[]> = {};
  
  items.forEach(item => {
    const date = new Date(item.publishedAt);
    const dateKey = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date);
    
    if (!groupedItems[dateKey]) {
      groupedItems[dateKey] = [];
    }
    
    groupedItems[dateKey].push(item);
  });
  
  return groupedItems;
}