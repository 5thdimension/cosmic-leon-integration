import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { LogIn, LogOut } from "lucide-react";

export const AuthButton = () => {
  const { user, signIn, signOut } = useAuth();

  return user ? (
    <Button 
      onClick={signOut}
      variant="outline" 
      className="gap-2"
    >
      <LogOut className="h-4 w-4" />
      Déconnexion
    </Button>
  ) : (
    <Button 
      onClick={signIn}
      variant="default" 
      className="gap-2 bg-accent hover:bg-accent-dark"
    >
      <LogIn className="h-4 w-4" />
      Connexion
    </Button>
  );
};