import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';
import echoJamLogo from '@/assets/echojam-new-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-border/20 pb-20 md:pb-4">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={echoJamLogo} 
                alt="EchoJam" 
                className="h-8 w-8 rounded-full"
              />
              <div className="text-xl font-bold text-gradient">EchoJam</div>
            </div>
            <p className="text-sm text-muted-foreground">
              O primeiro app 100% grátis para ouvir músicas em tempo real com amigos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Produto */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2">
              <li><Link to="/criar-sala" className="text-sm text-muted-foreground hover:text-primary transition-colors">Criar Sala</Link></li>
              <li><Link to="/player" className="text-sm text-muted-foreground hover:text-primary transition-colors">Player Demo</Link></li>
              <li><Link to="/comunidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">Comunidade</Link></li>
              <li><Link to="/produtos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Ecossistema</Link></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><Link to="/documentacao" className="text-sm text-muted-foreground hover:text-primary transition-colors">Documentação</Link></li>
              <li><Link to="/status" className="text-sm text-muted-foreground hover:text-primary transition-colors">Status</Link></li>
              <li><Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/termos-uso" className="text-sm text-muted-foreground hover:text-primary transition-colors">Termos de Uso</Link></li>
              <li><Link to="/politica" className="text-sm text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/licenca" className="text-sm text-muted-foreground hover:text-primary transition-colors">Licença</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} EchoJam. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>100% Grátis</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span>Sem Anúncios</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>Código Aberto</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;