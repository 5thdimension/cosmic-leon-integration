import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const activityData = [
  { name: 'Lun', value: 400 },
  { name: 'Mar', value: 300 },
  { name: 'Mer', value: 600 },
  { name: 'Jeu', value: 800 },
  { name: 'Ven', value: 700 },
];

export const ActivityAndEvents = () => {
  return (
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
  );
};