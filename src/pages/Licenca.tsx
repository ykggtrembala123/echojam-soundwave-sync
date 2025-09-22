import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Licenca = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Licença</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2>EchoJam - Licença de Software</h2>
              <p className="text-muted-foreground">
                Versão 1.0 - 22 de setembro de 2025
              </p>
            </section>

            <section>
              <h2>1. Concessão de Licença</h2>
              <p>
                A EchoJam concede a você uma licença não exclusiva, não transferível e gratuita para usar o aplicativo EchoJam de acordo com estes termos.
              </p>
            </section>

            <section>
              <h2>2. Uso Permitido</h2>
              <ul>
                <li>Instalar e usar o EchoJam em seus dispositivos pessoais</li>
                <li>Criar salas e compartilhar música com amigos</li>
                <li>Usar todas as funcionalidades disponíveis gratuitamente</li>
                <li>Fazer backup de suas configurações pessoais</li>
              </ul>
            </section>

            <section>
              <h2>3. Restrições</h2>
              <p>Você NÃO pode:</p>
              <ul>
                <li>Modificar, descompilar ou fazer engenharia reversa do aplicativo</li>
                <li>Distribuir, vender ou sublicenciar o aplicativo</li>
                <li>Usar o aplicativo para fins comerciais sem autorização</li>
                <li>Remover avisos de direitos autorais ou marcas registradas</li>
              </ul>
            </section>

            <section>
              <h2>4. Código Aberto</h2>
              <p>
                Partes do EchoJam utilizam componentes de código aberto. As respectivas licenças desses componentes são mantidas e respeitadas.
              </p>
            </section>

            <section>
              <h2>5. Atualizações</h2>
              <p>
                Esta licença se aplica a todas as versões futuras do EchoJam, salvo quando uma nova licença for especificamente fornecida com uma atualização.
              </p>
            </section>

            <section>
              <h2>6. Término</h2>
              <p>
                Esta licença permanece em vigor até ser terminada. Você pode terminá-la a qualquer momento desinstalando o aplicativo.
              </p>
            </section>

            <section>
              <h2>7. Isenção de Garantias</h2>
              <p>
                O EchoJam é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas.
              </p>
            </section>

            <section>
              <h2>8. Contato</h2>
              <p>
                Para questões sobre esta licença, entre em contato através da nossa página de contato.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Licenca;