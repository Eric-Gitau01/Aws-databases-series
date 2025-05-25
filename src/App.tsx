
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for user in localStorage on app start
    try {
      const storedUser = localStorage.getItem('veetracker-user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Error reading user from localStorage:', error);
    }
    setIsLoading(false);
  }, []);

  // Listen for storage changes to update user state
  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const storedUser = localStorage.getItem('veetracker-user');
        setUser(storedUser ? JSON.parse(storedUser) : null);
      } catch (error) {
        console.error('Error reading user from localStorage:', error);
        setUser(null);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events when localStorage is updated in the same tab
    const handleCustomUserUpdate = () => {
      handleStorageChange();
    };
    
    window.addEventListener('userUpdated', handleCustomUserUpdate);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userUpdated', handleCustomUserUpdate);
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="font-inter">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route 
                path="/" 
                element={user ? <Navigate to="/dashboard" replace /> : <AuthPage />} 
              />
              <Route 
                path="/dashboard" 
                element={user ? <Dashboard /> : <Navigate to="/" replace />} 
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
