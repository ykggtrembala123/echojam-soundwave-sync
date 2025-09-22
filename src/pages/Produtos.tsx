import { Download, Music, Mic, Code, Smartphone, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import DownloadBanner from '@/components/DownloadBanner';
import Footer from '@/components/Footer';

const Produtos = () => {
  const products = [
    {
      name: 'EchoJam Free',
      icon: Music,
      status: 'Disponível Agora',
      statusColor: 'bg-accent/20 text-accent border-accent/30',
      description: 'O app principal 100% gratuito para ouvir música em tempo real com amigos.',
      features: [
        'Salas ilimitadas de música',
        'Sincronia perfeita em tempo real',
        'Controles de áudio avançados',
        'Suporte a múltiplas plataformas',
        'Interface intuitiva e moderna',
      ],
      price: 'Grátis para sempre',
      cta: 'Baixar Agora',
      highlight: true,
    },
    {
      name: 'EchoJam Studio',
      icon: Mic,
      status: 'Em Desenvolvimento',
      statusColor: 'bg-primary/20 text-primary border-primary/30',
      description: 'Espaço dedicado para DJs transmitirem ao vivo para grandes audiências.',
      features: [
        'Transmissões ao vivo para até 1000 ouvintes',
        'Ferramentas profissionais de DJ',
        'Chat integrado com moderação',
        'Monetização para criadores',
        'Analytics detalhados de audiência',
      ],
      price: 'Em breve',
      cta: 'Notify Me',
      highlight: false,
    },
    {
      name: 'EchoJam API',
      icon: Code,
      status: 'Roadmap 2024',
      statusColor: 'bg-secondary/20 text-secondary border-secondary/30',
      description: 'API para desenvolvedores integrarem funcionalidades do EchoJam em seus apps.',
      features: [
        'SDK para múltiplas linguagens',
        'Webhook para eventos em tempo real',
        'Autenticação OAuth2',
        'Rate limiting inteligente',
        'Documentação completa',
      ],
      price: 'Modelo freemium',
      cta: 'Developer Preview',
      highlight: false,
    },
    {
      name: 'EchoJam Mobile',
      icon: Smartphone,
      status: 'Em Desenvolvimento',
      statusColor: 'bg-accent/20 text-accent border-accent/30',
      description: 'Versão mobile nativa para iOS e Android com todas as funcionalidades.',
      features: [
        'Interface otimizada para mobile',
        'Sincronização com versão desktop',
        'Controles gestuais intuitivos',
        'Modo offline aprimorado',
        'Integração com assistentes de voz',
      ],
      price: 'Grátis como desktop',
      cta: 'Beta Access',
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              Mais que música, um movimento
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça o ecossistema completo do EchoJam. Do app gratuito às ferramentas profissionais, 
              estamos construindo o futuro da música compartilhada.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {products.map((product) => (
              <div 
                key={product.name} 
                className={`card-glass p-8 relative overflow-hidden ${
                  product.highlight ? 'ring-2 ring-primary/30' : ''
                }`}
              >
                {product.highlight && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      <Star className="mr-1 h-3 w-3" />
                      Mais Popular
                    </Badge>
                  </div>
                )}

                {/* Product Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
                    <product.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                    <Badge className={product.statusColor}>
                      {product.status}
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">{product.price}</p>
                  </div>
                  <Button 
                    className={
                      product.highlight 
                        ? 'btn-neon-primary' 
                        : product.name === 'EchoJam Studio' 
                          ? 'btn-neon-accent' 
                          : 'btn-neon-secondary'
                    }
                    disabled={product.status !== 'Disponível Agora'}
                  >
                    {product.status === 'Disponível Agora' && (
                      <Download className="mr-2 h-4 w-4" />
                    )}
                    {product.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Roadmap */}
          <div className="card-glass p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Roadmap 2024-2025</h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
              
              <div className="space-y-8">
                {[
                  { 
                    period: 'Q4 2024', 
                    title: 'EchoJam Free v2.0', 
                    description: 'Interface renovada, novos codecs de áudio, melhor performance',
                    status: 'active'
                  },
                  { 
                    period: 'Q1 2025', 
                    title: 'EchoJam Mobile Beta', 
                    description: 'Lançamento beta para iOS e Android',
                    status: 'upcoming'
                  },
                  { 
                    period: 'Q2 2025', 
                    title: 'EchoJam Studio Alpha', 
                    description: 'Primeiras ferramentas para DJs e criadores de conteúdo',
                    status: 'upcoming'
                  },
                  { 
                    period: 'Q3 2025', 
                    title: 'EchoJam API Public Beta', 
                    description: 'API aberta para desenvolvedores terceiros',
                    status: 'future'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6 relative">
                    <div className={`w-3 h-3 rounded-full border-2 bg-background ${
                      item.status === 'active' ? 'border-accent' : 
                      item.status === 'upcoming' ? 'border-primary' : 'border-muted-foreground'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {item.period}
                        </Badge>
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center card-glass p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Comece sua jornada agora</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Baixe o EchoJam Free e faça parte da revolução da música compartilhada. 
                100% gratuito, para sempre.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-neon-primary text-lg px-8 py-4 h-auto">
                  <Download className="mr-2 h-5 w-5" />
                  Baixar EchoJam Free Agora
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto">
                  <Zap className="mr-2 h-5 w-5" />
                  Ver Demonstração
                </Button>
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

export default Produtos;