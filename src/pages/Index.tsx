import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Trophy, Users, Wallet, ArrowUpRight, GraduationCap, Building2, ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const activityData = [
  { name: 'Lun', value: 400 },
  { name: 'Mar', value: 300 },
  { name: 'Mer', value: 600 },
  { name: 'Jeu', value: 800 },
  { name: 'Ven', value: 700 },
];

const services = [
  {
    title: "Banque",
    description: "Gérez vos finances et transactions",
    icon: Building2,
    route: "/bank",
    stats: "Balance: 1000 LC",
  },
  {
    title: "Marché",
    description: "Achetez et vendez des items",
    icon: ShoppingCart,
    route: "/market",
    stats: "12 nouveaux items",
  },
  {
    title: "Université",
    description: "Apprenez et progressez",
    icon: GraduationCap,
    route: "/university",
    stats: "3 cours disponibles",
  },
];

const Index = () => {
  const { toast } = useToast();

  const handleServiceClick = (service: string) => {
    toast({
      title: "Service en développement",
      description: `Le service ${service} sera bientôt disponible!`,
    });
  };

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
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-primary to-primary-light border-none">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-300 mb-2">Points Totaux</p>
                  <h3 className="text-2xl font-bold">24,500</h3>
                </div>
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <div className="mt-4">
                <Badge variant="secondary" className="bg-accent/20 text-accent border-none">
                  +12% cette semaine
                </Badge>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-accent-dark to-accent border-none">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-300 mb-2">Citoyens Actifs</p>
                  <h3 className="text-2xl font-bold">1,234</h3>
                </div>
                <Users className="h-8 w-8 text-primary-light" />
              </div>
              <div className="mt-4">
                <Badge variant="secondary" className="bg-primary/20 text-primary-light border-none">
                  +5% ce mois
                </Badge>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-primary-dark to-primary border-none">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-300 mb-2">Balance</p>
                  <h3 className="text-2xl font-bold">₿ 0.0045</h3>
                </div>
                <Wallet className="h-8 w-8 text-accent-light" />
              </div>
              <div className="mt-4">
                <Badge variant="secondary" className="bg-accent/20 text-accent-light border-none">
                  Dernière transaction: -2h
                </Badge>
              </div>
            </Card>
          </div>
          
          {/* Services Interactifs */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Services Interactifs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card 
                  key={service.title}
                  className="p-6 bg-background-light border-none hover:bg-primary/10 transition-colors cursor-pointer"
                  onClick={() => handleServiceClick(service.title)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <service.icon className="h-8 w-8 text-accent" />
                    <Badge variant="outline" className="text-accent-light">
                      {service.stats}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    Accéder <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Activité et Événements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 bg-background-light border-none">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Activité</h3>
                <Button variant="outline" size="sm" className="gap-2">
                  Voir plus <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e1e1e',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#00bcd4" 
                      strokeWidth={2}
                      dot={{ fill: '#00bcd4' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
            
            <Card className="p-6 bg-background-light border-none">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Prochains Événements</h3>
                <Button variant="outline" size="sm" className="gap-2">
                  Tout voir <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-background hover:bg-primary/10 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <div>
                        <h4 className="font-medium">Événement {i}</h4>
                        <p className="text-sm text-gray-400">Dans {i * 2} jours</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Détails
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;