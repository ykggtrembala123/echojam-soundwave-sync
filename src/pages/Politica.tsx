import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Politica = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">
              Última atualização: 22 de setembro de 2025
            </p>

            <section>
              <h2>1. Informações que Coletamos</h2>
              <p>
                O EchoJam foi projetado com privacidade em mente. Coletamos apenas as informações mínimas necessárias para o funcionamento do aplicativo:
              </p>
              <ul>
                <li>Dados de uso anônimos para melhorar o aplicativo</li>
                <li>Informações técnicas básicas do dispositivo</li>
                <li>Preferências de áudio e configurações do usuário</li>
              </ul>
            </section>

            <section>
              <h2>2. Como Usamos suas Informações</h2>
              <ul>
                <li>Sincronizar música entre usuários</li>
                <li>Melhorar a qualidade do serviço</li>
                <li>Corrigir bugs e problemas técnicos</li>
                <li>Desenvolver novas funcionalidades</li>
              </ul>
            </section>

            <section>
              <h2>3. Compartilhamento de Dados</h2>
              <p>
                <strong>Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros.</strong> O EchoJam é 100% gratuito e não depende de publicidade ou venda de dados.
              </p>
            </section>

            <section>
              <h2>4. Armazenamento de Dados</h2>
              <p>
                A maioria dos dados é armazenada localmente no seu dispositivo. Dados de sincronização são temporários e não são armazenados permanentemente em nossos servidores.
              </p>
            </section>

            <section>
              <h2>5. Cookies e Tecnologias Similares</h2>
              <p>
                Usamos tecnologias locais apenas para melhorar a experiência do usuário, como lembrar suas preferências de áudio.
              </p>
            </section>

            <section>
              <h2>6. Seus Direitos</h2>
              <p>
                Você tem o direito de:
              </p>
              <ul>
                <li>Saber quais dados coletamos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Desativar a coleta de dados de uso</li>
                <li>Exportar suas configurações</li>
              </ul>
            </section>

            <section>
              <h2>7. Segurança</h2>
              <p>
                Implementamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado, alteração ou destruição.
              </p>
            </section>

            <section>
              <h2>8. Contato</h2>
              <p>
                Para questões sobre privacidade, entre em contato através da nossa página de contato.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Politica;