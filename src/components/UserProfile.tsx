import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface UserProfileProps {
  name?: string;
  email?: string;
  role?: string;
}

export const UserProfile = ({ 
  name = "Admin User", 
  email = "admin@aboosto.com",
  role = "Fleet Manager"
}: UserProfileProps) => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="flex items-center gap-2 rounded-full hover:opacity-80 transition-opacity">
            <Avatar className="h-9 w-9 border-2 border-primary/20">
              <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-semibold">
                {getInitials(name)}
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:flex flex-col items-start">
              <span className="text-sm font-semibold">{name}</span>
              <span className="text-xs text-muted-foreground">{role}</span>
            </div>
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="end" className="w-64">
          <div className="space-y-2">
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-xs text-muted-foreground">{email}</p>
            </div>
            <div className="pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground">{role}</p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
