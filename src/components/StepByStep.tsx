import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CodeBlock from "./CodeBlock";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  keyPoints: string[];
  code: string;
  codeTitle: string;
  explanation: string;
}

const StepByStep = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps: Step[] = [
    {
      number: "1",
      title: "Menu Data Array",
      description: "Yeh ek array hai jisme restaurant ke tamam menu items stored hain. Har item ek object hai.",
      keyPoints: [
        "let menu = [] - Square brackets array banate hain",
        "Har object mein name, price, description, imgUrl, aur category properties hain",
        "Curly braces {} object banate hain",
        "Comma se items alag karte hain"
      ],
      code: `let menu = [
    {
        name: "Halwa Puri",
        price: 200,
        description: "Garam halwa aur crispy puriyan",
        imgUrl: "image-url-here",
        category: "breakfast"
    },
    {
        name: "Chicken Biryani",
        price: 350,
        description: "Khushboodar chawal chicken ke saath",
        imgUrl: "image-url-here",
        category: "lunch"
    }
    // ... aur bhi items
];`,
      codeTitle: "menu-data.js",
      explanation: "Array mein multiple objects store kar ke data ko organize kar sakte hain. Yeh approach databases se similar hai!"
    },
    {
      number: "2",
      title: "HTML Elements Ko Select Karna",
      description: "JavaScript se HTML elements ko control karne ke liye pehle unhe select karna padta hai.",
      keyPoints: [
        "getElementById() method HTML element ko uski ID se dhoondhta hai",
        "Return karta hai wo element jis par aap kam kar sakte hain",
        "Variables mein store kar ke baar baar use kar sakte hain"
      ],
      code: `let cardParent = document.getElementById("cardParent");
let allBtn = document.getElementById("all");
let breakfastBtn = document.getElementById("breakfast");
let searchInput = document.getElementById("searchBar");
let searchBtn = document.getElementById("search");

// Ab in variables ka use kar ke elements ko control karein`,
      codeTitle: "dom-selection.js",
      explanation: "document.getElementById() sabse common method hai elements select karne ke liye. ID unique honi chahiye!"
    },
    {
      number: "3",
      title: "showItems() Function - Items Display Karna",
      description: "Yeh function array ke items ko HTML cards mein convert kar ke screen par dikhata hai.",
      keyPoints: [
        "Pehle check karta hai ke list empty to nahi",
        "For loop se har item ke liye HTML card banta hai",
        "Template literals (backticks) se dynamic HTML create karta hai",
        "innerHTML se sab cards ko ek saath display karta hai"
      ],
      code: `function showItems(list) {
    // Agar list khali hai to message dikhao
    if (list.length === 0) {
        cardParent.innerHTML = "<h1>Menu me nahi hai</h1>";
        return;  // Function yahan rok do
    }

    let html = "";  // Empty string shuru karo
    
    // Har item ke liye loop chalao
    for (let i = 0; i < list.length; i++) {
        // HTML string banao template literals se
        html += \`
            <div class='card'>
                <img src='\${list[i].imgUrl}'>
                <h3>\${list[i].name}</h3>
                <p>\${list[i].description}</p>
                <p>Rs. \${list[i].price}</p>
            </div>
        \`;
    }
    
    // Sab cards ko ek saath display karo
    cardParent.innerHTML = html;
}`,
      codeTitle: "show-items.js",
      explanation: "Template literals (`) strings mein variables inject karne ka modern tareeqa hai. Dollar sign aur curly braces ke andar variable likhte hain!"
    },
    {
      number: "4",
      title: "Category Filter - Breakfast, Lunch, Dinner",
      description: "Buttons par click kar ke specific category ke items dikhaana.",
      keyPoints: [
        "filter() method array ke har item par condition check karta hai",
        "Jo items condition pass karen, wo naya array bana ke return karta hai",
        "Original array change nahi hota",
        "Arrow function use karte hain"
      ],
      code: `// Breakfast button ka onclick function
breakfastBtn.onclick = function() {
    setActiveButton(breakfastBtn);  // Button highlight karo
    
    // filter() method - sirf breakfast items nikalo
    const filtered = menu.filter(function(item) {
        return item.category === "breakfast";
    });
    
    showItems(filtered);  // Filtered items dikhao
};

// Lunch button - same process
lunchBtn.onclick = function() {
    setActiveButton(lunchBtn);
    const filtered = menu.filter(function(item) {
        return item.category === "lunch";
    });
    showItems(filtered);
};

// All button - sab items dikhao (no filter)
allBtn.onclick = function() {
    setActiveButton(allBtn);
    showItems(menu);  // Poora menu dikhao
};`,
      codeTitle: "category-filter.js",
      explanation: "onclick event handler button click ko handle karta hai. filter() method array ke har item par condition check karta hai!"
    },
    {
      number: "5",
      title: "Search Functionality",
      description: "User jo bhi type kare, us text ke basis par items search karna.",
      keyPoints: [
        "toLowerCase() - Text ko lowercase mein convert karta hai",
        "trim() - Extra spaces hata deta hai",
        "includes() - Check karta hai ke text string mein hai ya nahi",
        "Yeh sab milake case-insensitive search banaate hain"
      ],
      code: `function performSearch() {
    // Input ki value lo aur lowercase + trim karo
    const value = searchInput.value.toLowerCase().trim();
    
    // Agar kuch type nahi kiya to sab dikhao
    if (value === "") {
        showItems(menu);
        setActiveButton(allBtn);
        return;
    }

    // Filter karo - name, description ya category mein search karo
    const filtered = menu.filter(item => 
        item.name.toLowerCase().includes(value) ||
        item.description.toLowerCase().includes(value) ||
        item.category.toLowerCase().includes(value)
    );

    showItems(filtered);
    
    // Sare buttons ka active class remove karo
    document.querySelectorAll('.menu p').forEach(btn => {
        btn.classList.remove('active');
    });
}

// Search button par click
searchBtn.onclick = performSearch;

// Enter key press karein to bhi search ho
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});`,
      codeTitle: "search-function.js",
      explanation: "includes() method string search ke liye perfect hai. || (OR operator) se multiple conditions check kar sakte hain!"
    },
    {
      number: "6",
      title: "Event Listeners - User Interaction",
      description: "User ke actions (click, keypress, input) ko detect kar ke response dena.",
      keyPoints: [
        "Element par kisi bhi event ko listen kar sakte hain",
        "Event type (click, keypress, input, etc.) specify karte hain",
        "Callback function jab event hota hai tab run hota hai",
        "Multiple events ek element par lag sakte hain"
      ],
      code: `// Keypress event - Enter key detect karna
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Input event - Real-time search clear karna
searchInput.addEventListener('input', function() {
    if (searchInput.value === "") {
        showItems(menu);
        setActiveButton(allBtn);
    }
});

// Page load hote hi sab items dikhao
showItems(menu);`,
      codeTitle: "event-listeners.js",
      explanation: "Event listeners modern approach hai. onclick se better kyunki multiple listeners add kar sakte hain!"
    }
  ];

  const currentStepData = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section id="step-by-step" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Step by Step Seekhein
          </h2>
          <p className="text-muted-foreground text-lg">
            Har concept ko aaram se samjhein, ek waqt mein ek step
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentStep 
                    ? 'w-12 bg-primary' 
                    : index < currentStep 
                    ? 'w-8 bg-accent' 
                    : 'w-8 bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl shrink-0">
              {currentStepData.number}
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Step {currentStep + 1} of {steps.length}
              </p>
              <h3 className="text-3xl font-bold text-foreground">{currentStepData.title}</h3>
            </div>
          </div>

          <Card className="p-8 bg-muted/50 border-l-4 border-l-primary">
            <p className="text-foreground leading-relaxed text-xl mb-6">
              <span className="font-bold text-primary">Kya hai yeh?</span> {currentStepData.description}
            </p>
            <div className="space-y-2">
              <p className="font-semibold text-lg text-foreground">Key Points:</p>
              {currentStepData.keyPoints.map((point, index) => (
                <p key={index} className="text-muted-foreground text-lg pl-4">
                  • {point}
                </p>
              ))}
            </div>
          </Card>

          <CodeBlock
            title={currentStepData.codeTitle}
            code={currentStepData.code}
            explanation={currentStepData.explanation}
          />

          <div className="flex items-center justify-between pt-6">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              variant="outline"
              size="lg"
              className="text-lg"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Pichla Step
            </Button>

            <p className="text-muted-foreground text-lg">
              {currentStep + 1} / {steps.length}
            </p>

            <Button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              size="lg"
              className="text-lg"
            >
              Agla Step
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {currentStep === steps.length - 1 && (
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                🎉 Mubarak Ho! Aap ne complete kar liya!
              </h3>
              <p className="mt-4 text-center text-foreground font-semibold text-lg">
                Ab quiz try karein aur apna knowledge test karein! 🚀
              </p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default StepByStep;
