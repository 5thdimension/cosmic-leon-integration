import { Building2, ShoppingCart, GraduationCap, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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

export const InteractiveServices = () => {
  const { toast } = useToast();

  const handleServiceClick = (service: string) => {
    toast({
      title: "Service en développement",
      description: `Le service ${service} sera bientôt disponible!`,
    });
  };

  return (
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
  );
};