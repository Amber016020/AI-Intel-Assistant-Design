// src/components/Header.tsx
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, MenuIcon, XIcon } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md py-2 shadow-lg shadow-purple-500/10'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center mr-3">
            <span className="font-bold text-lg">AI</span>
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            AI Intel Assistant
          </h2>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            className="text-sm font-medium hover:text-purple-400 transition-colors"
            onClick={() => scrollTo('hero')}
          >
            Home
          </button>
          <button 
            className="text-sm font-medium hover:text-purple-400 transition-colors"
            onClick={() => scrollTo('architecture')}
          >
            Architecture
          </button>
          <button 
            className="text-sm font-medium hover:text-purple-400 transition-colors"
            onClick={() => scrollTo('agents')}
          >
            Agents
          </button>
          <button 
            className="text-sm font-medium hover:text-purple-400 transition-colors"
            onClick={() => scrollTo('simulation')}
          >
            Simulation
          </button>
          <Button 
            variant="outline" 
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black"
          >
            Learn More
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              className="text-sm font-medium hover:text-purple-400 transition-colors py-2"
              onClick={() => scrollTo('hero')}
            >
              Home
            </button>
            <button 
              className="text-sm font-medium hover:text-purple-400 transition-colors py-2"
              onClick={() => scrollTo('architecture')}
            >
              Architecture
            </button>
            <button 
              className="text-sm font-medium hover:text-purple-400 transition-colors py-2"
              onClick={() => scrollTo('agents')}
            >
              Agents
            </button>
            <button 
              className="text-sm font-medium hover:text-purple-400 transition-colors py-2"
              onClick={() => scrollTo('simulation')}
            >
              Simulation
            </button>
            <Button 
              variant="outline" 
              className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black"
            >
              Learn More
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;