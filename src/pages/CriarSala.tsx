import { useState } from 'react';
import { Plus, Users, Lock, Globe, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Navigation from '@/components/Navigation';
import DownloadBanner from '@/components/DownloadBanner';
import Footer from '@/components/Footer';

const CriarSala = () => {
  const [showModal, setShowModal] = useState(false);
  const [roomName, setRoomName] = useState('');
  const [roomType, setRoomType] = useState('public');

  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              Crie sua própria Jam
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No app, você pode criar salas privadas ou públicas e convidar seus amigos. 
              Teste abaixo uma prévia do que está por vir.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <div className="card-glass p-8">
              <form onSubmit={handleCreateRoom} className="space-y-6">
                {/* Room Name */}
                <div className="space-y-2">
                  <Label htmlFor="roomName" className="text-lg font-semibold">
                    Nome da Sala
                  </Label>
                  <Input
                    id="roomName"
                    type="text"
                    placeholder="Ex: Jam da Madrugada 🌙"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    className="h-12 text-lg bg-background/50 border-primary/30 focus:border-primary"
                    required
                  />
                </div>

                {/* Room Type */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Tipo da Sala</Label>
                  <RadioGroup value={roomType} onValueChange={setRoomType}>
                    <div className="flex items-center space-x-2 p-4 rounded-lg border border-border/30 hover:border-primary/50 transition-colors">
                      <RadioGroupItem value="public" id="public" />
                      <Globe className="h-5 w-5 text-accent" />
                      <div>
                        <Label htmlFor="public" className="font-medium cursor-pointer">
                          Pública
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Qualquer pessoa pode encontrar e entrar na sua sala
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 p-4 rounded-lg border border-border/30 hover:border-primary/50 transition-colors">
                      <RadioGroupItem value="private" id="private" />
                      <Lock className="h-5 w-5 text-secondary" />
                      <div>
                        <Label htmlFor="private" className="font-medium cursor-pointer">
                          Privada
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Apenas pessoas com o link podem entrar
                        </p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Features Preview */}
                <div className="space-y-4 bg-muted/20 p-6 rounded-lg border border-border/20">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    Recursos disponíveis no app
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Controle de fila de músicas compartilhada
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Sistema de votação para próximas músicas
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Chat integrado com emojis musicais
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Permissões personalizáveis para moderadores
                    </li>
                  </ul>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="btn-neon-primary w-full text-lg h-14"
                  disabled={!roomName.trim()}
                >
                  <Plus className="mr-2 h-5 w-5" />
                  Criar Sala
                </Button>
              </form>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12 p-8 card-glass">
              <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
              <p className="text-muted-foreground mb-6">
                Baixe o EchoJam e crie salas ilimitadas com todos os recursos desbloqueados.
              </p>
              <Button className="btn-neon-accent text-lg px-8 py-4 h-auto">
                <Download className="mr-2 h-5 w-5" />
                Baixar o EchoJam para criar sua sala
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md bg-card border-primary/30">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl text-gradient">
              Função Exclusiva do App! 🎵
            </DialogTitle>
            <DialogDescription className="text-center text-lg pt-4">
              Essa função está disponível apenas no app EchoJam. 
              Baixe agora para liberar sua Jam e convidar seus amigos!
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 pt-4">
            <Button className="btn-neon-primary">
              <Download className="mr-2 h-4 w-4" />
              Baixar para Windows
            </Button>
            <Button className="btn-neon-secondary">
              <Download className="mr-2 h-4 w-4" />
              Baixar para Mac
            </Button>
            <Button className="btn-neon-accent">
              <Download className="mr-2 h-4 w-4" />
              Baixar para Linux
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
      <DownloadBanner />
    </div>
  );
};

export default CriarSala;