import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CriarSala from "./pages/CriarSala";
import PlayerDemo from "./pages/PlayerDemo";
import Comunidade from "./pages/Comunidade";
import Produtos from "./pages/Produtos";
import Sobre from "./pages/Sobre";
import Documentacao from "./pages/Documentacao";
import Status from "./pages/Status";
import TermosUso from "./pages/TermosUso";
import Politica from "./pages/Politica";
import Licenca from "./pages/Licenca";
import NotFound from "./pages/NotFound";
import MinhaPlaylist from "./pages/MinhaPlaylist";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criar-sala" element={<CriarSala />} />
          <Route path="/player" element={<PlayerDemo />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/documentacao" element={<Documentacao />} />
          <Route path="/status" element={<Status />} />
          <Route path="/termos-uso" element={<TermosUso />} />
          <Route path="/politica" element={<Politica />} />
          <Route path="/licenca" element={<Licenca />} />
          <Route path="/minha-playlist" element={<MinhaPlaylist />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
