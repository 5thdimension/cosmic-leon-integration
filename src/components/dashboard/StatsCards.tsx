import { Trophy, Users, Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const StatsCards = () => {
  return (
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
  );
};