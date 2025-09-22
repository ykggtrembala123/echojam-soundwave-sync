import { Download, Monitor, Smartphone, HardDrive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { downloadLinks } from '@/config/downloads';

const DownloadBanner = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl bg-background/90 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">🎧</div>
            <div>
              <div className="font-semibold text-sm">Baixe o EchoJam agora</div>
              <div className="text-xs text-muted-foreground">Grátis, sem anúncios, sem cadastro</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <Button 
              className="btn-neon-primary text-xs px-3 py-2 h-auto"
              onClick={() => window.open(downloadLinks.windows, '_blank')}
            >
              <Monitor className="mr-1 h-3 w-3" />
              Windows
            </Button>
            <Button 
              className="btn-neon-secondary text-xs px-3 py-2 h-auto"
              onClick={() => window.open(downloadLinks.mac, '_blank')}
            >
              <Smartphone className="mr-1 h-3 w-3" />
              Mac
            </Button>
            <Button 
              className="btn-neon-accent text-xs px-3 py-2 h-auto"
              onClick={() => window.open(downloadLinks.linux, '_blank')}
            >
              <HardDrive className="mr-1 h-3 w-3" />
              Linux
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadBanner;