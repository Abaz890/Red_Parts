import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About_Us";
import ContactPage from "./pages/ContactPage";
import TrackOrderPage from "./pages/TrackOrderPage";
import EngineParts from "./pages/Engine_Parts";
import Breaksys from "./pages/Break_Systems";
import InteriorParts from "./pages/Interior_Parts";
import HeadlightsLightingPage from "./pages/HeadlightsLightingPage";
import CheckoutPage from "./pages/Checkout_Page";
import Orderpage from "./pages/Order_Page";
import Comparepage from "./pages/Compare_Page";
import Logins from "./pages/Login_Page";
import Registers from "./pages/Register_Page";
import Wishlist from "./pages/Wishlist_Page";
import Dashboard from "./pages/Dashboard_Page";
import Latest from "./pages/Latest_News";
import Maintain from "./pages/Maintain_Page";
import Review from "./pages/Review_Page";
import Frequency from "./pages/Frequency_Page";
import Terms from "./pages/Term_Page";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/track-order" element={<TrackOrderPage />} />
          <Route path="/engine" element={<EngineParts />} />
          <Route path="/brake" element={<Breaksys />} />
          <Route path="/interior" element={<InteriorParts />} />
          <Route path="/headlights-lighting" element={<HeadlightsLightingPage />} />
          <Route path="/checkout" element={<CheckoutPage />} /> 
          <Route path="/order-success" element={<Orderpage />} /> 
          <Route path="/compare" element={<Comparepage />} /> 
          <Route path="/login" element={<Logins />} /> 
          <Route path="/register" element={<Registers />} />  
          <Route path="/wishlist" element={<Wishlist />} />  
          <Route path="/dashboard" element={<Dashboard />} />  
          <Route path="/latest-news" element={<Latest />} />  
          <Route path="/maintenance-tips" element={<Maintain />} />  
          <Route path="/product-reviews" element={<Review />} />  
          <Route path="/faq" element={<Frequency />} />  
          <Route path="/terms" element={<Terms />} />  
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;