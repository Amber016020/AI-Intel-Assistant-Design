// src/components/Footer.tsx
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-purple-900/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center mr-3">
                <span className="font-bold text-lg">AI</span>
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI Intel Assistant
              </h2>
            </div>
            <p className="mt-4 text-slate-400 text-sm">
              A next-generation intelligence system powered by a collaborative multi-agent framework.
              Transform my research workflow with AI-powered insights.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="text-slate-400 hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-purple-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className="md:text-center">
            <h3 className="text-purple-400 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#architecture" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                  System Architecture
                </a>
              </li>
              <li>
                <a href="#agents" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                  Agent Roster
                </a>
              </li>
              <li>
                <a href="#simulation" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                  Workflow Simulation
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:text-right">
            <h3 className="text-purple-400 font-semibold mb-4">Contact</h3>
            <p className="text-slate-400 text-sm mb-2">
              Interested in learning more?
            </p>
            <a href="mailto:a0981369120@gmail.com" className="text-purple-400 hover:text-purple-300 text-sm">
              a0981369120@gmail.com
            </a>
            <p className="mt-4 text-slate-500 text-xs">
              © {new Date().getFullYear()} AI Intel Assistant. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;