import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { InteractiveServices } from "@/components/dashboard/InteractiveServices";
import { ActivityAndEvents } from "@/components/dashboard/ActivityAndEvents";
import { AuthButton } from "@/components/AuthButton";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-accent" />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background text-white">
        <AppSidebar />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                {user ? `Bienvenue ${user.displayName}` : 'Bienvenue à Léon City'}
              </h1>
              <p className="text-gray-400 mt-2">
                {user ? 'Explorez votre univers digital' : 'Connectez-vous pour commencer'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <AuthButton />
              <SidebarTrigger />
            </div>
          </div>
          
          {user ? (
            <>
              <StatsCards />
              <InteractiveServices />
              <ActivityAndEvents />
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">
                Connectez-vous pour accéder à votre dashboard
              </h2>
              <p className="text-gray-400 mb-8">
                Découvrez tous les services de Léon City en vous connectant avec votre compte.
              </p>
              <AuthButton />
            </div>
          )}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;