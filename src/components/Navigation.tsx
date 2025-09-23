import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import echoJamLogo from '@/assets/echojam-new-logo.png';
import { downloadLinks } from '@/config/downloads';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Criar Sala', path: '/criar-sala' },
    { name: 'Player Demo', path: '/player' },
    { name: 'Comunidade', path: '/comunidade' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Sobre', path: '/sobre' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/80 border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={echoJamLogo} 
              alt="EchoJam" 
              className="h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Download Button */}
          <div className="hidden md:flex">
            <Button 
              className="btn-neon-primary"
              onClick={() => window.open(downloadLinks.windows, '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              Baixar Grátis
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card-glass backdrop-blur-xl rounded-lg mt-2 border border-border/20">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <Button 
                  className="btn-neon-primary w-full"
                  onClick={() => window.open(downloadLinks.windows, '_blank')}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Baixar Grátis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;