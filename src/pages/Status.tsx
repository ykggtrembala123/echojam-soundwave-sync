import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';

const Status = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Status do Sistema</h1>
          
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Serviços Principais</h2>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  Todos os sistemas operacionais
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Servidor de Sincronia</span>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                    Operacional
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span>Downloads</span>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                    Operacional
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span>API de Integração</span>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                    Operacional
                  </Badge>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-xl font-semibold mb-4">Atualizações Recentes</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <strong>22/09/2025:</strong> Melhoria na qualidade de áudio e correção de bugs menores.
                </div>
                <div>
                  <strong>20/09/2025:</strong> Nova interface de usuário mais intuitiva.
                </div>
                <div>
                  <strong>18/09/2025:</strong> Implementação do modo offline aprimorado.
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-xl font-semibold mb-4">Próximas Atualizações</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <strong>Versão Mobile:</strong> Em desenvolvimento para iOS e Android.
                </div>
                <div>
                  <strong>EchoJam Studio:</strong> Ferramentas para DJs e criadores de conteúdo.
                </div>
                <div>
                  <strong>API Pública:</strong> Para desenvolvedores integrarem com suas aplicações.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Status;