import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background text-white">
        <AppSidebar />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Bienvenue à Léon City
            </h1>
            <SidebarTrigger />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dashboard Cards */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-primary to-primary-light">
              <h3 className="text-xl font-semibold mb-2">Statistiques</h3>
              <p className="text-gray-300">Consultez vos performances</p>
            </div>
            
            <div className="p-6 rounded-lg bg-gradient-to-br from-accent-dark to-accent">
              <h3 className="text-xl font-semibold mb-2">Univers</h3>
              <p className="text-gray-300">Explorez les planètes</p>
            </div>
            
            <div className="p-6 rounded-lg bg-gradient-to-br from-primary-dark to-primary">
              <h3 className="text-xl font-semibold mb-2">Communauté</h3>
              <p className="text-gray-300">Rejoignez les autres citoyens</p>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;