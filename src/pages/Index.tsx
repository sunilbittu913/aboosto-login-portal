import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Aboosto
        </h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          Your powerful business solution platform
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-md px-8"
          >
            Sign In
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            variant="outline"
            className="px-8"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
