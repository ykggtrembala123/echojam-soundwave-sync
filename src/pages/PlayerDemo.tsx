import { Play, Pause, SkipBack, SkipForward, Volume2, Download, Users, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import DownloadBanner from '@/components/DownloadBanner';
import Footer from '@/components/Footer';
import playerMockup from '@/assets/player-mockup.png';

const PlayerDemo = () => {
  const connectedUsers = [
    { name: 'Você', avatar: '🎧', status: 'host' },
    { name: 'DJ_Kai', avatar: '🎵', status: 'active' },
    { name: 'MusicLover', avatar: '🎤', status: 'active' },
    { name: 'BeatMaster', avatar: '🎹', status: 'listening' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              Player Demo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aqui você pode ver como seria o player real. No app EchoJam, 
              todos esses controles funcionam perfeitamente em tempo real.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Player Principal */}
            <div className="lg:col-span-2">
              <div className="card-glass p-6">
                {/* Header da Sala */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold">Jam da Madrugada 🌙</h3>
                    <p className="text-sm text-muted-foreground">Sala criada por DJ_Kai</p>
                  </div>
                  <Badge variant="secondary" className="bg-accent/20 text-accent">
                    <Users className="mr-1 h-3 w-3" />
                    {connectedUsers.length} online
                  </Badge>
                </div>

                {/* Mockup do Player */}
                <div className="relative mb-6">
                  <img 
                    src={playerMockup} 
                    alt="EchoJam Player" 
                    className="w-full rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                    <div className="text-center">
                      <p className="text-white text-lg font-semibold mb-2">
                        Prévia do Player
                      </p>
                      <p className="text-white/80 text-sm">
                        Funcionalidade completa apenas no app
                      </p>
                    </div>
                  </div>
                </div>

                {/* Controles Desabilitados */}
                <div className="space-y-4">
                  {/* Playback Controls */}
                  <div className="flex items-center justify-center space-x-4">
                    <Button variant="ghost" size="sm" disabled className="opacity-50">
                      <SkipBack className="h-5 w-5" />
                    </Button>
                    <Button size="lg" disabled className="opacity-50 rounded-full w-16 h-16">
                      <Play className="h-8 w-8" />
                    </Button>
                    <Button variant="ghost" size="sm" disabled className="opacity-50">
                      <SkipForward className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Volume Controls */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Volume2 className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium w-16">Volume</span>
                      <div className="flex-1 relative">
                        <Slider 
                          defaultValue={[70]} 
                          max={100} 
                          step={1} 
                          disabled
                          className="opacity-50"
                        />
                        <div className="absolute inset-0 flex items-center justify-end pr-4">
                          <Badge variant="outline" className="text-xs">
                            Exclusivo no App
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Settings className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium w-16">Bass</span>
                      <div className="flex-1 relative">
                        <Slider 
                          defaultValue={[50]} 
                          max={100} 
                          step={1} 
                          disabled
                          className="opacity-50"
                        />
                        <div className="absolute inset-0 flex items-center justify-end pr-4">
                          <Badge variant="outline" className="text-xs">
                            Exclusivo no App
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Settings className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium w-16">Treble</span>
                      <div className="flex-1 relative">
                        <Slider 
                          defaultValue={[60]} 
                          max={100} 
                          step={1} 
                          disabled
                          className="opacity-50"
                        />
                        <div className="absolute inset-0 flex items-center justify-end pr-4">
                          <Badge variant="outline" className="text-xs">
                            Exclusivo no App
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-center text-sm text-muted-foreground mb-3">
                    Curta o controle total de áudio no EchoJam real
                  </p>
                  <Button className="btn-neon-primary w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Desbloqueie todas as funções baixando o app
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar - Usuários Conectados */}
            <div className="space-y-6">
              {/* Usuários Online */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Users className="mr-2 h-5 w-5 text-primary" />
                  Conectados ({connectedUsers.length})
                </h3>
                <div className="space-y-3">
                  {connectedUsers.map((user, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/20 transition-colors">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-sm">
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{user.name}</p>
                        <div className="flex items-center space-x-1">
                          <div className={`w-2 h-2 rounded-full ${
                            user.status === 'host' ? 'bg-accent' : 
                            user.status === 'active' ? 'bg-secondary' : 'bg-muted-foreground'
                          }`}></div>
                          <span className="text-xs text-muted-foreground capitalize">
                            {user.status === 'host' ? 'Anfitrião' : 
                             user.status === 'active' ? 'Ativo' : 'Ouvindo'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Próximas Músicas */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-semibold mb-4">Fila de Reprodução</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/20 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium">🎵 Tocando agora</p>
                    <p className="text-xs text-muted-foreground">Unstoppable - RADMAN.EMPIRE</p>
                  </div>
                  
                  <div className="space-y-2 opacity-50">
                    <div className="p-2 bg-muted/10 rounded text-xs">
                      <p className="font-medium">Próxima: Midnight City - M83</p>
                      <p className="text-muted-foreground">Adicionada por DJ_Kai</p>
                    </div>
                    <div className="p-2 bg-muted/10 rounded text-xs">
                      <p className="font-medium">One More Time - Daft Punk</p>
                      <p className="text-muted-foreground">Adicionada por MusicLover</p>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="w-full justify-center mt-3">
                    Fila completa apenas no app
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <DownloadBanner />
    </div>
  );
};

export default PlayerDemo;