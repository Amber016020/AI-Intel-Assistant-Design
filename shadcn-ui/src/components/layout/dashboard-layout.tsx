// src/components/layout/dashboard-layout.tsx
import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-black/90 text-white backdrop-blur">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="flex items-center mr-4 space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M8 13h2" />
              <path d="M8 17h2" />
              <path d="M14 13h2" />
              <path d="M14 17h2" />
            </svg>
            <span className="font-bold text-lg text-white">Metamorphosis</span>
          </div>

          <div className="flex-1" />

          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="mr-2 text-white"
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="container py-6 max-w-screen-2xl">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-4">
        <div className="container max-w-screen-2xl flex flex-wrap justify-between text-xs text-slate-300">
          <p>© 2023 InfoFusion | Multi-source information integration system</p>
          <p>Data sourced from public APIs for demonstration purposes</p>
        </div>
      </footer>
    </div>
  );
}
