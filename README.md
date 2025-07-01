# AI Intel Assistant Design

> A personal AI intelligence assistant system inspired by the Multi-Agent Framework of MetaGPT.  
 This project helps users track and summarize the latest developments in AI technology.

## Overview

We designed Metamorphosis, an interactive web-based dashboard that helps users collect, summarize, and understand the latest developments in AI technology. The system aggregates content from three key sources—news articles, GitHub repositories, and research papers—and generates concise summaries using AI. By simulating multi-agent collaboration, it automates the processes of information gathering, summarization, and insight generation.

🔗 [Live Demo](https://amber016020.github.io/AI-Intel-Assistant-Design/)


The website showcases the system architecture and interaction flow.
Clicking the "Explore the System" button will lead you to a preview of the core dashboard interface.
You may also access it directly here:
[https://amber016020.github.io/AI-Intel-Assistant-Design/#/dashboard](https://amber016020.github.io/AI-Intel-Assistant-Design/#/dashboard)

⚠️ Note: The interface is currently a front-end mockup and has not yet been connected to real APIs.

## Project Objective

This project serves as a conceptual demonstration to explore how Multi-Agent systems can be applied to personal information workflows, particularly for tracking AI technology trends. It also illustrates how such frameworks can be integrated into both organizational and individual work settings. The system follows the design pattern of MetaGPT by:

- Simulating multiple agents, such as a Source Collector, Summarizer, and Analyst
- Collecting real-time AI-related information from diverse platforms
- Automatically generating actionable insights through GPT-powered summarization
- Supporting personalization by allowing the system’s output to continuously adapt to the user’s ideas and preferred communication style


## Tech Stack

We built this project using modern front-end tools to ensure speed, flexibility, and ease of development:

- Vite – Fast front-end build tool
- React – UI library for building components
- TypeScript – Adds type safety
- Tailwind CSS – Utility-first styling
- shadcn/ui – Tailwind-compatible UI components

## File Structure

├── public/ # Static assets \
├── src/ \
│ ├── components/ # Custom and shadcn-ui components \
│ ├── dashboard/ # Dashboard feature components \
│ ├── hooks/ # Custom hooks for data fetching & summarization \
│ ├── lib/ # Utilities and API interfaces \
│ └── pages/ # Main Dashboard page \
├── index.html # HTML entry point \
├── tailwind.config.ts # Tailwind CSS configuration \
├── vite.config.ts # Vite build configuration \
├── package.json # Project dependencies and scripts \

## Features

### Multi-Source Dashboard

- Tab-based interface to browse AI-related content from:
  - News – Technology and AI media sites
  - GitHub – Trending AI repositories
  - Research Papers – Latest from arXiv

### Ask Your Question

- Input box with a default question: 「今日的 AI 發展趨勢」
- Users can submit custom questions to generate insights
- Uses GPT to analyze and summarize collected data

### Insight Panel

- Displays generated overview of current AI developments
- Re-generates content on demand via "Generate Insights" button
- Simulates the role of an analyst in a multi-agent workflow


## Agent Roster: Simulated Multi-Agent Collaboration
1. Source Collector Agent
Collects and organizes the latest content from multiple sources including news, GitHub, and academic papers.

2. Summarizer Agent
Processes raw information from the collector and condenses it into key points using GPT-based summarization techniques.

3. Personalization Agent
Core Role:
Transforms the system from general-purpose to personalized by learning from user behavior, preferences, and interaction history.

4. Cross-Topic Connector
Links related topics based on user queries (e.g., "Federated Learning" → "Privacy", "Edge Computing"). Supports Notion/Obsidian export and learns from user interactions.

5. Mini Brief Agent
Generates concise summaries with key trends and examples. Supports export to PDF, PowerPoint, and Markdown.

## Commands

### Install dependencies
```
pnpm install
```
### Run in development mode
```
pnpm run dev
```
### Build for production
```
pnpm run build
```