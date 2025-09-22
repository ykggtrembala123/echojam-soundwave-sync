import { Download, Zap, Sliders, Globe, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import DownloadBanner from '@/components/DownloadBanner';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import Equalizer from '@/components/Equalizer';
import echoJamLogo from '@/assets/echojam-logo.jpg';
import playerMockup from '@/assets/player-mockup.png';
import heroBackground from '@/assets/hero-background.jpg';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Sincronia em tempo real',
      description: 'Todos ouvem juntos, sem delay. Experiência perfeita de escuta compartilhada.',
    },
    {
      icon: Sliders,
      title: 'Mixagem compartilhada',
      description: 'Controle de volume, graves e agudos para cada participante da sala.',
    },
    {
      icon: Globe,
      title: 'Multiplataforma',
      description: 'YouTube, Spotify, SoundCloud e mais. Todas as suas fontes favoritas.',
    },
    {
      icon: Wifi,
      title: 'Offline de verdade',
      description: 'Baixe suas músicas e ouça sem internet. Sem limitações.',
    },
  ];

  const competitors = [
    {
      name: 'Spotify Group Session',
      issues: ['Limitado a Premium', 'Delay perceptível', 'Poucos controles'],
      color: 'text-red-400',
    },
    {
      name: 'Discord Bots',
      issues: ['Instável', 'Complicado', 'Qualidade baixa'],
      color: 'text-red-400',
    },
    {
      name: 'EchoJam',
      issues: ['100% Grátis', 'Sem delay', 'Controle total'],
      color: 'text-accent',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Hero Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background"></div>

        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10">
            <Equalizer className="animate-pulse-slow" />
          </div>
          <div className="absolute top-40 right-20">
            <Equalizer className="animate-bounce-gentle" />
          </div>
          <div className="absolute bottom-20 left-1/4">
            <Equalizer className="animate-float" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={echoJamLogo} 
              alt="EchoJam Logo" 
              className="h-24 w-24 rounded-full animate-float"
            />
          </div>

          {/* Headlines */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Escute junto, viva o som
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            O primeiro app <span className="text-accent font-semibold">100% grátis</span> para ouvir músicas em tempo real com seus amigos. 
            <br />Sem limites, sem anúncios, só música.
          </p>

          {/* Trust Badge */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
              ✓ 100% Grátis
            </Badge>
            <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
              ✓ Sem anúncios
            </Badge>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              ✓ Sem cadastro
            </Badge>
          </div>

          {/* Download CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="btn-neon-primary text-lg px-8 py-4 h-auto">
              <Download className="mr-2 h-5 w-5" />
              Baixar para Windows
            </Button>
            <Button size="lg" className="btn-neon-secondary text-lg px-8 py-4 h-auto">
              <Download className="mr-2 h-5 w-5" />
              Baixar para Mac
            </Button>
            <Button size="lg" className="btn-neon-accent text-lg px-8 py-4 h-auto">
              <Download className="mr-2 h-5 w-5" />
              Baixar para Linux
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que EchoJam?</h2>
            <p className="text-xl text-muted-foreground">
              A experiência definitiva de música compartilhada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que escolher o EchoJam?</h2>
            <p className="text-xl text-muted-foreground">
              Veja como nos comparamos com outras soluções
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competitors.map((competitor, index) => (
              <div key={competitor.name} className="card-glass p-6">
                <h3 className={`text-xl font-bold mb-4 ${competitor.color}`}>
                  {competitor.name}
                </h3>
                <ul className="space-y-2">
                  {competitor.issues.map((issue, i) => (
                    <li key={i} className={`flex items-center ${competitor.color}`}>
                      <span className="mr-2">
                        {competitor.name === 'EchoJam' ? '✓' : '✗'}
                      </span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Experiência completa só no app</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Aqui você vê a prévia. No app, você vive a experiência completa com controle total e sem interrupções.
          </p>
          
          <div className="relative max-w-4xl mx-auto mb-12">
            <img 
              src={playerMockup} 
              alt="EchoJam Player Interface" 
              className="w-full rounded-2xl shadow-2xl border border-primary/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent rounded-2xl"></div>
          </div>

          <Button size="lg" className="btn-neon-primary text-lg px-8 py-4 h-auto">
            <Download className="mr-2 h-5 w-5" />
            Baixe Grátis e Comece Agora
          </Button>
        </div>
      </section>

      <Footer />
      <DownloadBanner />
    </div>
  );
};

export default Home;