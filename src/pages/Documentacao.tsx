import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Documentacao = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Documentação</h1>
          
          <div className="prose prose-invert max-w-none">
            <h2>Como usar o EchoJam</h2>
            <p>O EchoJam é fácil de usar. Após baixar e instalar o aplicativo:</p>
            
            <ol>
              <li>Abra o EchoJam no seu computador</li>
              <li>Crie uma nova sala ou entre em uma existente</li>
              <li>Adicione suas músicas favoritas do YouTube, Spotify ou outras plataformas</li>
              <li>Convide seus amigos para ouvir junto</li>
              <li>Aproveite a sincronia perfeita e os controles individuais</li>
            </ol>

            <h2>Funcionalidades</h2>
            <ul>
              <li><strong>Sincronia em tempo real:</strong> Todos ouvem a mesma música ao mesmo tempo</li>
              <li><strong>Controles individuais:</strong> Cada pessoa pode ajustar volume, graves e agudos</li>
              <li><strong>Multiplataforma:</strong> Suporte para várias fontes de música</li>
              <li><strong>Modo offline:</strong> Baixe suas músicas e ouça sem internet</li>
            </ul>

            <h2>Requisitos do Sistema</h2>
            <h3>Windows</h3>
            <ul>
              <li>Windows 10 ou superior</li>
              <li>4GB de RAM</li>
              <li>500MB de espaço livre</li>
            </ul>

            <h3>Mac</h3>
            <ul>
              <li>macOS 10.15 ou superior</li>
              <li>4GB de RAM</li>
              <li>500MB de espaço livre</li>
            </ul>

            <h3>Linux</h3>
            <ul>
              <li>Ubuntu 18.04+ ou equivalente</li>
              <li>4GB de RAM</li>
              <li>500MB de espaço livre</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Documentacao;