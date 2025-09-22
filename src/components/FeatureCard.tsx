import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="card-glass p-6 hover:scale-105 transition-all duration-300 animate-float"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;