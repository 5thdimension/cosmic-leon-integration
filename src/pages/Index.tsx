import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { InteractiveServices } from "@/components/dashboard/InteractiveServices";
import { ActivityAndEvents } from "@/components/dashboard/ActivityAndEvents";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background text-white">
        <AppSidebar />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Bienvenue à Léon City
              </h1>
              <p className="text-gray-400 mt-2">Explorez votre univers digital</p>
            </div>
            <SidebarTrigger />
          </div>
          
          <StatsCards />
          <InteractiveServices />
          <ActivityAndEvents />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;