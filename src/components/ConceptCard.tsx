import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface ConceptCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  number: string;
}

const ConceptCard = ({ title, description, icon, number }: ConceptCardProps) => {
  return (
    <Card className="relative p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-border card-gradient">
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
        {number}
      </div>
      
      <div className="flex items-start gap-4 mt-2">
        <div className="p-3 bg-accent/10 rounded-lg shrink-0">
          {icon}
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default ConceptCard;
