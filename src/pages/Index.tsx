import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ConceptSection from "@/components/ConceptSection";
import CodeTutorial from "@/components/CodeTutorial";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <div id="concepts">
        <ConceptSection />
      </div>
      <div id="tutorial">
        <CodeTutorial />
      </div>
      
      <footer className="py-8 px-4 bg-primary text-white text-center">
        <p className="text-lg">
          Made with ❤️ for JavaScript Learners
        </p>
        <p className="text-white/80 mt-2">
          Keep learning, keep coding! 🚀
        </p>
      </footer>
    </div>
  );
};

export default Index;
