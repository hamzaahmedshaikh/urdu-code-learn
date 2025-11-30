import ConceptCard from "./ConceptCard";
import { Database, FunctionSquare, MousePointer, Filter, Search } from "lucide-react";

const ConceptSection = () => {
  const concepts = [
    {
      number: "1",
      icon: <Database className="w-6 h-6 text-accent" />,
      title: "Array aur Objects",
      description: "Menu items ko ek array mein store karna seekhein. Har item ek object hai jisme name, price, description, aur category hoti hai. Yeh data structure real-world applications mein kaafi use hota hai."
    },
    {
      number: "2",
      icon: <FunctionSquare className="w-6 h-6 text-accent" />,
      title: "Functions Banana",
      description: "Functions reusable code blocks hain. showItems() function items ko display karta hai aur setActiveButton() buttons ko highlight karta hai. Functions se code clean aur manageable rehta hai."
    },
    {
      number: "3",
      icon: <MousePointer className="w-6 h-6 text-accent" />,
      title: "DOM Manipulation",
      description: "Document Object Model (DOM) se HTML elements ko JavaScript se control karein. getElementById() se elements ko select karo aur innerHTML se unko dynamically update karo."
    },
    {
      number: "4",
      icon: <Filter className="w-6 h-6 text-accent" />,
      title: "Array Filter Method",
      description: "filter() method se array mein se specific items nikaal sakte hain. Category ke basis pe items filter kar ke specific breakfast, lunch ya dinner items dikha sakte hain."
    },
    {
      number: "5",
      icon: <Search className="w-6 h-6 text-accent" />,
      title: "Search Functionality",
      description: "includes() method se text search implement karna seekhein. User jo bhi search kare, uske basis pe items filter ho kar results show hon. toLowerCase() se case-insensitive search banata hai."
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Kya Kya Seekhenge?
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Is tutorial mein JavaScript ke important concepts ko practical example ke saath samjhenge
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {concepts.map((concept, index) => (
            <div key={index} className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 100}ms` }}>
              <ConceptCard {...concept} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
