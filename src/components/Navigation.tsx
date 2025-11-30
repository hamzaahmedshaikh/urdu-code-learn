import { Code2, BookOpen, Lightbulb } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="w-6 h-6 text-primary" />
          <span className="font-bold text-xl text-foreground">JS Tutorial</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('concepts')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Lightbulb className="w-4 h-4" />
            <span>Concepts</span>
          </button>
          <button 
            onClick={() => scrollToSection('tutorial')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>Tutorial</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
