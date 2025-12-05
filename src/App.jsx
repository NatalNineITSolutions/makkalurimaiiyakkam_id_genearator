import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./ui/Toaster";
import { Sonner } from "./ui/Sonner";
import { TooltipProvider } from "./ui/TooltipProvider";
import Router from "./router";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
