import { useState } from 'react';
import { Heart, Play, Users, Lock, Download, TrendingUp, Trophy, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DownloadBanner from '@/components/DownloadBanner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { downloadLinks } from '@/config/downloads';

interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  likes: number;
  isLiked: boolean;
}

const CORRECT_CODE = '665262';

const playlistSongs: Song[] = [
  { id: 1, title: 'Você Vai Me Destruir', artist: 'Tuyo', album: 'Pra Doer', duration: '3:52', likes: 645, isLiked: true },
  { id: 2, title: 'Tempo Perdido', artist: 'Legião Urbana', album: 'Dois', duration: '4:22', likes: 1123, isLiked: false },
  { id: 3, title: 'Ainda Gosto Dela', artist: 'Skank ft. Negra Li', album: 'Estandarte', duration: '3:39', likes: 512, isLiked: false },
  { id: 4, title: 'Solar', artist: 'Plutão Já Foi Planeta', album: 'A Última Palavra Feche a Porta', duration: '3:48', likes: 432, isLiked: true },
  { id: 5, title: 'É Proibido Fumar', artist: 'Os Mutantes', album: 'Os Mutantes', duration: '2:48', likes: 789, isLiked: false },
  { id: 6, title: 'Amor Pra Depois', artist: 'Lagum', album: 'Memórias (de onde eu nunca fui)', duration: '3:26', likes: 698, isLiked: true },
  { id: 7, title: 'Lisergia', artist: 'Jovem Dionísio', album: 'Acorda, Pedrinho', duration: '3:05', likes: 954, isLiked: false },
  { id: 8, title: 'Dois', artist: 'Tiago Iorc', album: 'Reconstrução', duration: '3:33', likes: 823, isLiked: true },
  { id: 9, title: 'Pra Você Guardei o Amor', artist: 'Nando Reis ft. Ana Cañas', album: 'Drês', duration: '4:27', likes: 678, isLiked: true },
  { id: 10, title: 'Lamento', artist: 'Apeles', album: 'Crux', duration: '3:59', likes: 345, isLiked: false },
  { id: 11, title: 'Aquarela', artist: 'Toquinho', album: 'Aquarela', duration: '3:57', likes: 1210, isLiked: false },
  { id: 12, title: 'Amor Marginal', artist: 'Johnny Hooker', album: 'Eu Vou Fazer uma Macumba pra Te Amarrar, Maldito!', duration: '4:14', likes: 842, isLiked: true },
  { id: 13, title: 'Sutilmente', artist: 'Skank', album: 'Estandarte', duration: '3:42', likes: 934, isLiked: false },
  { id: 14, title: 'Eu Não Sei Quem Sou', artist: 'Rubel', album: 'Casas', duration: '4:05', likes: 756, isLiked: true },
  { id: 15, title: 'Talvez', artist: 'O Terno', album: 'Atrás/Além', duration: '3:47', likes: 689, isLiked: false },
  { id: 16, title: 'Velha Infância', artist: 'Tribalistas', album: 'Tribalistas', duration: '4:29', likes: 1023, isLiked: true },
  { id: 17, title: 'Ventura', artist: 'Supercombo', album: 'Rogério', duration: '3:19', likes: 512, isLiked: false },
  { id: 18, title: 'Eu Amo Você', artist: 'Tim Maia', album: 'Tim Maia', duration: '4:07', likes: 1321, isLiked: true },
  { id: 19, title: 'Despedida', artist: 'Boogarins', album: 'Lá Vem a Morte', duration: '3:28', likes: 564, isLiked: false },
  { id: 20, title: 'Morrer de Amor', artist: 'Gilsons ft. Duda Beat', album: 'Pra Gente Acordar', duration: '3:33', likes: 897, isLiked: true },
];


const topPlaylists = [
  { rank: 1, name: 'Sertanejo Raiz 🤠', likes: 127, prize: 'R$ 300', status: 'qualificado' },
  { rank: 2, name: 'Rock BR 90s 🎸', likes: 89, prize: 'R$ 200', status: 'qualificado' },
  { rank: 3, name: 'Trap Nacional 🔥', likes: 73, prize: 'R$ 150', status: 'qualificado' },
  { rank: 4, name: 'Indie BR Vibes ✨', likes: 48, prize: 'R$ 150', status: 'playlist Jogar/Relaxar <3', highlight: true },
  { rank: 5, name: 'MPB Clássica 🎵', likes: 45, prize: '-', status: 'pendente' },
];

const MinhaPlaylist = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [code, setCode] = useState('');
  const [songs, setSongs] = useState(playlistSongs);

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === CORRECT_CODE) {
      setIsUnlocked(true);
      toast({
        title: "✅ Código correto!",
        description: "Bem-vindo à sua playlist",
      });
    } else {
      toast({
        title: "❌ Código incorreto",
        description: "Tente novamente",
        variant: "destructive",
      });
    }
  };

  const showDownloadCTA = (action: string) => {
    toast({
      title: "🎧 Baixe o EchoJam",
      description: `Para ${action}, baixe o app completo. A versão web não suporta todas as funcionalidades.`,
      action: (
        <Button
          size="sm"
          onClick={() => window.open(downloadLinks.windows, '_blank')}
          className="btn-neon-primary"
        >
          <Download className="mr-2 h-4 w-4" />
          Baixar
        </Button>
      ),
    });
  };

  const handleLike = (songId: number) => {
    setSongs(songs.map(song => 
      song.id === songId ? { ...song, isLiked: !song.isLiked, likes: song.isLiked ? song.likes - 1 : song.likes + 1 } : song
    ));
    showDownloadCTA('salvar esta curtida permanentemente');
  };

  if (!isUnlocked) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen pt-24 pb-32 px-4 flex items-center justify-center bg-gradient-to-b from-background via-background/95 to-primary/5">
          <Card className="w-full max-w-md border-primary/20 shadow-xl">
            <CardHeader className="text-center space-y-2">
              <Lock className="w-16 h-16 mx-auto text-primary mb-4" />
              <CardTitle className="text-3xl">Área Exclusiva</CardTitle>
              <CardDescription>
                Digite o código de acesso para ver sua playlist
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCodeSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Digite o código"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="text-center text-2xl tracking-widest"
                  maxLength={6}
                />
                <Button type="submit" className="w-full btn-neon-primary">
                  Desbloquear Playlist
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <Footer />
        <DownloadBanner />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-32 px-4 bg-gradient-to-b from-background via-background/95 to-primary/5">
        <div className="max-w-7xl mx-auto">
          {/* Header da Playlist */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                <Play className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Indie BR Vibes ✨</h1>
                <p className="text-muted-foreground">Playlist Jogar/Relaxar <3 • 20 músicas • 48 curtidas</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button 
                className="btn-neon-primary"
                onClick={() => showDownloadCTA('iniciar um jam')}
              >
                <Users className="mr-2 h-4 w-4" />
                Iniciar Jam
              </Button>
              <Button 
                variant="outline"
                onClick={() => showDownloadCTA('compartilhar esta playlist')}
              >
                <Download className="mr-2 h-4 w-4" />
                Compartilhar
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista de Músicas */}
            <div className="lg:col-span-2 space-y-2">
              <Card>
                <CardContent className="p-0">
                  {songs.map((song, index) => (
                    <div
                      key={song.id}
                      className="flex items-center gap-4 p-4 hover:bg-accent/50 transition-colors border-b last:border-b-0 border-primary/10"
                    >
                      <span className="text-muted-foreground w-8 text-center">{index + 1}</span>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-10 w-10 rounded-full"
                        onClick={() => showDownloadCTA('tocar esta música')}
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold truncate">{song.title}</p>
                        <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
                      </div>
                      <div className="hidden md:block text-sm text-muted-foreground truncate max-w-[150px]">
                        {song.album}
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleLike(song.id)}
                        className={song.isLiked ? 'text-primary' : ''}
                      >
                        <Heart className={`h-4 w-4 ${song.isLiked ? 'fill-current' : ''}`} />
                      </Button>
                      <span className="text-sm text-muted-foreground w-12 text-right">{song.duration}</span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Heart className="h-3 w-3" />
                        <span>{song.likes}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Ranking */}
            <div className="space-y-4">
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Desafio Semanal</CardTitle>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Termina em 23h 47min
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-primary mb-1">R$ 150,00</p>
                    <p className="text-sm text-muted-foreground">Para playlists com 50+ curtidas</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <h3 className="font-semibold">Top Playlists</h3>
                    </div>
                    {topPlaylists.map((playlist) => (
                      <div
                        key={playlist.rank}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                          playlist.highlight
                            ? 'bg-primary/20 border-2 border-primary animate-pulse'
                            : 'bg-accent/30'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          playlist.rank <= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }`}>
                          {playlist.rank}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`font-semibold truncate ${playlist.highlight ? 'text-primary' : ''}`}>
                            {playlist.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {playlist.likes} curtidas • {playlist.status}
                          </p>
                        </div>
                        {playlist.prize !== '-' && (
                          <span className="text-sm font-bold text-primary">{playlist.prize}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* CTA para conseguir mais curtidas */}
                  <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                    <p className="text-sm font-semibold mb-2 text-center">
                      Falta apenas 1 curtida! 🔥
                    </p>
                    <Button
                      className="w-full btn-neon-primary"
                      onClick={() => showDownloadCTA('compartilhar e conseguir mais curtidas')}
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Compartilhar Playlist
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Info adicional */}
              <Card className="border-primary/20">
                <CardContent className="pt-6 space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-4 w-4 text-primary mt-0.5" />
                    <p className="text-muted-foreground">
                      Sua playlist está quase no prêmio! Continue compartilhando.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Download className="h-4 w-4 text-primary mt-0.5" />
                    <p className="text-muted-foreground">
                      Baixe o app para gerenciar playlists, iniciar jams e muito mais!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <DownloadBanner />
    </>
  );
};

export default MinhaPlaylist;
