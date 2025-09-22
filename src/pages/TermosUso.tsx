import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TermosUso = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">
              Última atualização: 22 de setembro de 2025
            </p>

            <section>
              <h2>1. Aceitação dos Termos</h2>
              <p>
                Ao utilizar o EchoJam, você concorda com estes Termos de Uso. Se não concordar com qualquer parte destes termos, não utilize nosso aplicativo.
              </p>
            </section>

            <section>
              <h2>2. Descrição do Serviço</h2>
              <p>
                O EchoJam é um aplicativo gratuito que permite aos usuários ouvir música de forma sincronizada com amigos. Oferecemos integração com diversas plataformas de música e funcionalidades offline.
              </p>
            </section>

            <section>
              <h2>3. Uso Aceitável</h2>
              <ul>
                <li>Use o aplicativo apenas para fins pessoais e não comerciais</li>
                <li>Não tente quebrar, hackear ou comprometer a segurança do aplicativo</li>  
                <li>Respeite os direitos autorais das músicas compartilhadas</li>
                <li>Não use o aplicativo para atividades ilegais</li>
              </ul>
            </section>

            <section>
              <h2>4. Propriedade Intelectual</h2>
              <p>
                O EchoJam e todo seu conteúdo são protegidos por direitos autorais. Você pode usar o aplicativo, mas não pode copiar, modificar ou distribuir nosso código.
              </p>
            </section>

            <section>
              <h2>5. Limitação de Responsabilidade</h2>
              <p>
                O EchoJam é fornecido "como está". Não nos responsabilizamos por danos diretos ou indiretos resultantes do uso do aplicativo.
              </p>
            </section>

            <section>
              <h2>6. Modificações</h2>
              <p>
                Podemos atualizar estes termos ocasionalmente. Continuação do uso após mudanças constitui aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2>7. Contato</h2>
              <p>
                Para questões sobre estes termos, entre em contato através da nossa página de contato.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermosUso;