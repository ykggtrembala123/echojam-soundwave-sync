import { useState } from 'react';
import { Heart, Users, Zap, HelpCircle, ChevronDown, ChevronUp, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import DownloadBanner from '@/components/DownloadBanner';
import Footer from '@/components/Footer';

const Sobre = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqs = [
    {
      question: 'Preciso pagar para usar o EchoJam?',
      answer: 'Não! O EchoJam é 100% gratuito e sempre será. Não há taxas ocultas, assinaturas ou limitações. Nossa missão é democratizar a experiência de ouvir música junto.',
    },
    {
      question: 'Preciso criar uma conta?',
      answer: 'Não é necessário criar conta para usar o EchoJam. É só baixar o app e começar a ouvir música com seus amigos imediatamente. Simples assim!',
    },
    {
      question: 'O EchoJam funciona offline?',
      answer: 'Sim! Você pode baixar suas músicas favoritas e ouvi-las mesmo sem internet. Perfeito para aqueles momentos sem conexão estável.',
    },
    {
      question: 'Quais plataformas de música são suportadas?',
      answer: 'Atualmente suportamos YouTube, Spotify, SoundCloud, Apple Music e muitas outras. Estamos sempre adicionando novas integrações baseadas no feedback da comunidade.',
    },
    {
      question: 'Quantas pessoas podem ouvir juntas?',
      answer: 'Salas públicas suportam até 50 usuários simultâneos. Para salas privadas com amigos, recomendamos até 10 pessoas para melhor experiência de sincronização.',
    },
    {
      question: 'Como funciona a sincronização?',
      answer: 'Usamos tecnologia proprietária de sincronização que garante que todos ouçam exatamente ao mesmo tempo, com latência menor que 100ms. É quase como estar na mesma sala!',
    },
    {
      question: 'O EchoJam está disponível para mobile?',
      answer: 'Atualmente estamos focados na versão desktop (Windows, Mac, Linux). A versão mobile está em desenvolvimento e chegará em 2025!',
    },
    {
      question: 'É seguro usar o EchoJam?',
      answer: 'Absolutamente! Não coletamos dados pessoais desnecessários, tudo é criptografado, e o código-fonte será aberto em breve. Sua privacidade é nossa prioridade.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada com sucesso! 🎵",
      description: "Obrigado pelo contato! Responderemos em breve.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* About Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 text-gradient">
                Sobre Nós
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Conectando pessoas através da música, uma batida de cada vez.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Nossa História</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O EchoJam nasceu com um propósito simples, mas poderoso: aproximar pessoas através da música. 
                  Em um mundo cada vez mais digital, sentimos falta daqueles momentos genuínos de descoberta musical compartilhada.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Criado por apaixonados por som e tecnologia, o EchoJam é 100% gratuito porque acreditamos que 
                  a música é um direito universal. Não queremos que limitações financeiras impeçam alguém de 
                  viver essas experiências incríveis.
                </p>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-sm font-medium">Feito com amor para a comunidade musical</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="card-glass p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary">50K+</h3>
                  <p className="text-sm text-muted-foreground">Usuários ativos</p>
                </div>
                <div className="card-glass p-6 text-center">
                  <Zap className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-secondary">1M+</h3>
                  <p className="text-sm text-muted-foreground">Músicas sincronizadas</p>
                </div>
                <div className="card-glass p-6 text-center">
                  <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-accent">100%</h3>
                  <p className="text-sm text-muted-foreground">Gratuito sempre</p>
                </div>
                <div className="card-glass p-6 text-center">
                  <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary">24/7</h3>
                  <p className="text-sm text-muted-foreground">Suporte da comunidade</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-xl text-muted-foreground">
                Tire suas dúvidas sobre o EchoJam
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Collapsible key={index} className="card-glass">
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-6 text-left hover:bg-muted/20 transition-colors">
                    <span className="font-semibold pr-4">{faq.question}</span>
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tem alguma sugestão, bug para reportar ou quer bater um papo? 
                Adoramos ouvir nossa comunidade!
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="card-glass p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50 border-primary/30 focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/50 border-primary/30 focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-nos sua ideia, sugestão ou dúvida..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background/50 border-primary/30 focus:border-primary min-h-[120px] resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-neon-primary w-full h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Ou nos encontre nas redes sociais:
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Discord
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    Twitter
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <DownloadBanner />
    </div>
  );
};

export default Sobre;