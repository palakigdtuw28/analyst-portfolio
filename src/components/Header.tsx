import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl text-gray-900 tracking-tight hover:text-blue-600 transition-colors"
          >
            Palak Gupta
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 space-y-4 border-t border-gray-200">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}