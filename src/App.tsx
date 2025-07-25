import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import Wounds from "./pages/Wounds";
import Veins from "./pages/Veins";
import LegSwelling from "./pages/LegSwelling";
import Athletes from "./pages/Athletes";
import BioEssentials from "./pages/BioEssentials";
import FlowMaxFormula from "./pages/FlowMaxFormula";
import VeinVitalComplex from "./pages/VeinVitalComplex";
import PlaqueGuard from "./pages/PlaqueGuard";
import HealFastFormula from "./pages/HealFastFormula";
import VascuShieldBlend from "./pages/VascuShieldBlend";
import Compression from "./pages/Compression";
import NotFound from "./pages/NotFound";
import OptimizePerformance from "./pages/OptimizePerformance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wounds" element={<Wounds />} />
          <Route path="/veins" element={<Veins />} />
          <Route path="/leg-swelling" element={<LegSwelling />} />
          <Route path="/athletes" element={<Athletes />} />
          <Route path="/bioessentials" element={<BioEssentials />} />
          <Route path="/bioessentials/flowmax-formula" element={<FlowMaxFormula />} />
          <Route path="/bioessentials/veinvital-complex" element={<VeinVitalComplex />} />
          <Route path="/bioessentials/plaqueguard" element={<PlaqueGuard />} />
          <Route path="/bioessentials/healfast-formula" element={<HealFastFormula />} />
          <Route path="/bioessentials/vascushield-blend" element={<VascuShieldBlend />} />
          <Route path="/compression" element={<Compression />} />
          <Route path="/optimize-performance" element={<OptimizePerformance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
