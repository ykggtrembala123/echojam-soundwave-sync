import { Crown, Users, Music, Download, TrendingUp, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Navigation from '@/components/Navigation';
import DownloadBanner from '@/components/DownloadBanner';
import Footer from '@/components/Footer';

const Comunidade = () => {
  const activeRooms = [
    {
      name: 'Jam da Madrugada',
      users: 12,
      genre: 'Electronic',
      host: 'DJ_Kai',
      duration: '2h 30m',
      trending: true,
    },
    {
      name: 'Rock Classics 🎸',
      users: 8,
      genre: 'Rock',
      host: 'RockMaster',
      duration: '1h 45m',
      trending: false,
    },
    {
      name: 'Lo-Fi Study Session',
      users: 15,
      genre: 'Lo-Fi',
      host: 'ChillVibe',
      duration: '4h 12m',
      trending: true,
    },
    {
      name: 'Brazilian Hits 🇧🇷',
      users: 6,
      genre: 'MPB',
      host: 'SambaLover',
      duration: '55m',
      trending: false,
    },
  ];

  const topUsers = [
    {
      name: 'DJ_Kai',
      avatar: '🎧',
      sessions: 142,
      hours: 356,
      badge: 'Master DJ',
      rank: 1,
    },
    {
      name: 'MusicLover',
      avatar: '🎵',
      sessions: 98,
      hours: 287,
      badge: 'Music Curator',
      rank: 2,
    },
    {
      name: 'BeatMaster',
      avatar: '🎹',
      sessions: 87,
      hours: 234,
      badge: 'Rhythm Expert',
      rank: 3,
    },
    {
      name: 'SoundWave',
      avatar: '🌊',
      sessions: 72,
      hours: 189,
      badge: 'Audio Enthusiast',
      rank: 4,
    },
    {
      name: 'VinylCollector',
      avatar: '💿',
      sessions: 65,
      hours: 156,
      badge: 'Classic Hunter',
      rank: 5,
    },
  ];

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'text-yellow-400';
      case 2: return 'text-gray-300';
      case 3: return 'text-amber-600';
      default: return 'text-muted-foreground';
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank <= 3) return <Crown className="h-4 w-4" />;
    return <span className="text-sm font-bold">#{rank}</span>;
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              A comunidade já está vibrando
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Veja as salas mais movimentadas e os usuários mais ativos. 
              No app você participa ao vivo, cria sua Jam e entra para o ranking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Salas Ativas */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold flex items-center">
                  <Music className="mr-2 h-6 w-6 text-primary" />
                  Salas Ativas Agora
                </h2>
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  {activeRooms.reduce((total, room) => total + room.users, 0)} usuários online
                </Badge>
              </div>

              <div className="space-y-4">
                {activeRooms.map((room, index) => (
                  <div key={index} className="card-glass p-6 hover:scale-[1.02] transition-transform">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold">{room.name}</h3>
                          {room.trending && (
                            <Badge className="bg-primary/20 text-primary border-primary/30">
                              <TrendingUp className="mr-1 h-3 w-3" />
                              Trending
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Users className="mr-1 h-4 w-4" />
                            {room.users} conectados
                          </div>
                          <div className="flex items-center">
                            <Music className="mr-1 h-4 w-4" />
                            {room.genre}
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            {room.duration}
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">
                        Host: {room.host}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[...Array(Math.min(room.users, 6))].map((_, i) => (
                          <Avatar key={i} className="h-8 w-8 border-2 border-background">
                            <AvatarFallback className="text-xs">
                              {String.fromCodePoint(0x1F3A7 + i)}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                        {room.users > 6 && (
                          <div className="h-8 w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium">
                            +{room.users - 6}
                          </div>
                        )}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        disabled 
                        className="opacity-50"
                      >
                        Entrar (App Only)
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center p-6 card-glass">
                <p className="text-muted-foreground mb-4">
                  Quer criar sua própria sala ou entrar em uma existente?
                </p>
                <Button className="btn-neon-primary">
                  <Download className="mr-2 h-4 w-4" />
                  Participe da comunidade, baixe grátis
                </Button>
              </div>
            </div>

            {/* Ranking de Usuários */}
            <div>
              <div className="card-glass p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <Crown className="mr-2 h-5 w-5 text-yellow-400" />
                  Top Usuários
                </h2>

                <div className="space-y-4">
                  {topUsers.map((user) => (
                    <div key={user.name} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/20 transition-colors">
                      <div className={`flex items-center justify-center w-6 h-6 ${getRankColor(user.rank)}`}>
                        {getRankIcon(user.rank)}
                      </div>
                      
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.badge}</p>
                      </div>

                      <div className="text-right text-xs text-muted-foreground">
                        <p>{user.sessions} jams</p>
                        <p>{user.hours}h ouvidas</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-center text-sm text-muted-foreground mb-3">
                    Seu ranking será exibido aqui quando você usar o app!
                  </p>
                  <Button className="btn-neon-secondary w-full text-sm">
                    <Download className="mr-2 h-4 w-4" />
                    Entrar para o Ranking
                  </Button>
                </div>
              </div>

              {/* Stats da Comunidade */}
              <div className="card-glass p-6 mt-6">
                <h3 className="text-lg font-semibold mb-4">Stats da Comunidade</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Usuários ativos hoje</span>
                    <span className="font-semibold text-accent">2,847</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Salas criadas</span>
                    <span className="font-semibold text-secondary">1,234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Músicas tocadas</span>
                    <span className="font-semibold text-primary">45,892</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Horas de música</span>
                    <span className="font-semibold text-accent">12,456h</span>
                  </div>
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

export default Comunidade;