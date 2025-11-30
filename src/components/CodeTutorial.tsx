import CodeBlock from "./CodeBlock";
import { Card } from "@/components/ui/card";

const CodeTutorial = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Code Ko Samjhein
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Har section ko detail mein explain kiya gaya hai taake aap asaani se samajh sakein
          </p>
        </div>

        {/* Array Setup */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
            <h3 className="text-3xl font-bold text-foreground">Menu Data Array</h3>
          </div>
          
          <Card className="p-6 bg-muted/50 border-l-4 border-l-primary">
            <p className="text-foreground leading-relaxed text-lg mb-4">
              <span className="font-bold text-primary">Kya hai yeh?</span> Yeh ek array hai jisme restaurant ke tamam menu items stored hain. Har item ek object hai.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold">Key Points:</span><br/>
              • <span className="font-mono bg-background px-2 py-0.5 rounded">let menu = []</span> - Square brackets array banate hain<br/>
              • Har object mein name, price, description, imgUrl, aur category properties hain<br/>
              • Curly braces <span className="font-mono bg-background px-2 py-0.5 rounded">{"{}"}</span> object banate hain<br/>
              • Comma se items alag karte hain
            </p>
          </Card>

          <CodeBlock
            title="menu-data.js"
            code={`let menu = [
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
];`}
            explanation="Array mein multiple objects store kar ke data ko organize kar sakte hain. Yeh approach databases se similar hai!"
          />
        </div>

        {/* DOM Selection */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <h3 className="text-3xl font-bold text-foreground">HTML Elements Ko Select Karna</h3>
          </div>
          
          <Card className="p-6 bg-muted/50 border-l-4 border-l-accent">
            <p className="text-foreground leading-relaxed text-lg mb-4">
              <span className="font-bold text-accent">Kya hai yeh?</span> JavaScript se HTML elements ko control karne ke liye pehle unhe select karna padta hai.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold">getElementById() Method:</span><br/>
              • HTML element ko uski ID se dhoondhta hai<br/>
              • Return karta hai wo element jis par aap kam kar sakte hain<br/>
              • Variables mein store kar ke baar baar use kar sakte hain
            </p>
          </Card>

          <CodeBlock
            title="dom-selection.js"
            code={`let cardParent = document.getElementById("cardParent");
let allBtn = document.getElementById("all");
let breakfastBtn = document.getElementById("breakfast");
let searchInput = document.getElementById("searchBar");
let searchBtn = document.getElementById("search");

// Ab in variables ka use kar ke elements ko control karein`}
            explanation="document.getElementById() sabse common method hai elements select karne ke liye. ID unique honi chahiye!"
          />
        </div>

        {/* showItems Function */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <h3 className="text-3xl font-bold text-foreground">showItems() Function - Items Display Karna</h3>
          </div>
          
          <Card className="p-6 bg-muted/50 border-l-4 border-l-primary">
            <p className="text-foreground leading-relaxed text-lg mb-4">
              <span className="font-bold text-primary">Kya hai yeh?</span> Yeh function array ke items ko HTML cards mein convert kar ke screen par dikhata hai.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold">Kaise kaam karta hai:</span><br/>
              • Pehle check karta hai ke list empty to nahi<br/>
              • For loop se har item ke liye HTML card banta hai<br/>
              • Template literals (backticks) se dynamic HTML create karta hai<br/>
              • innerHTML se sab cards ko ek saath display karta hai
            </p>
          </Card>

          <CodeBlock
            title="show-items.js"
            code={`function showItems(list) {
    // Agar list khali hai to message dikhao
    if (list.length === 0) {
        cardParent.innerHTML = "<h1>Menu me nahi hai</h1>";
        return;  // Function yahan rok do
    }

    let html = "";  // Empty string shuru karo
    
    // Har item ke liye loop chalao
    for (let i = 0; i < list.length; i++) {
        // HTML string banao template literals se
        html += \\\`
            <div class='card'>
                <img src='\\\${list[i].imgUrl}'>
                <h3>\\\${list[i].name}</h3>
                <p>\\\${list[i].description}</p>
                <p>Rs. \\\${list[i].price}</p>
            </div>
        \\\`;
    }
    
    // Sab cards ko ek saath display karo
    cardParent.innerHTML = html;
}`}
            explanation="Template literals (`) strings mein variables inject karne ka modern tareeqa hai. Dollar sign aur curly braces ke andar variable likhte hain!"
          />
        </div>

        {/* Filter Function */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-xl">
              4
            </div>
            <h3 className="text-3xl font-bold text-foreground">Category Filter - Breakfast, Lunch, Dinner</h3>
          </div>
          
          <Card className="p-6 bg-muted/50 border-l-4 border-l-accent">
            <p className="text-foreground leading-relaxed text-lg mb-4">
              <span className="font-bold text-accent">Kya hai yeh?</span> Buttons par click kar ke specific category ke items dikhaana.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold">filter() Method:</span><br/>
              • Array ke har item par condition check karta hai<br/>
              • Jo items condition pass karen, wo naya array bana ke return karta hai<br/>
              • Original array change nahi hota<br/>
              • Arrow function use karte hain
            </p>
          </Card>

          <CodeBlock
            title="category-filter.js"
            code={`// Breakfast button ka onclick function
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
};`}
            explanation="onclick event handler button click ko handle karta hai. filter() method array ke har item par condition check karta hai!"
          />
        </div>

        {/* Search Function */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              5
            </div>
            <h3 className="text-3xl font-bold text-foreground">Search Functionality</h3>
          </div>
          
          <Card className="p-6 bg-muted/50 border-l-4 border-l-primary">
            <p className="text-foreground leading-relaxed text-lg mb-4">
              <span className="font-bold text-primary">Kya hai yeh?</span> User jo bhi type kare, us text ke basis par items search karna.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold">Important Methods:</span><br/>
              • <span className="font-mono bg-background px-2 py-0.5 rounded">toLowerCase()</span> - Text ko lowercase mein convert karta hai<br/>
              • <span className="font-mono bg-background px-2 py-0.5 rounded">trim()</span> - Extra spaces hata deta hai<br/>
              • <span className="font-mono bg-background px-2 py-0.5 rounded">includes()</span> - Check karta hai ke text string mein hai ya nahi<br/>
              • Yeh sab milake case-insensitive search banaate hain
            </p>
          </Card>

          <CodeBlock
            title="search-function.js"
            code={`function performSearch() {
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
});`}
            explanation="includes() method string search ke liye perfect hai. || (OR operator) se multiple conditions check kar sakte hain!"
          />
        </div>

        {/* Event Listeners */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-xl">
              6
            </div>
            <h3 className="text-3xl font-bold text-foreground">Event Listeners - User Interaction</h3>
          </div>
          
          <Card className="p-6 bg-muted/50 border-l-4 border-l-accent">
            <p className="text-foreground leading-relaxed text-lg mb-4">
              <span className="font-bold text-accent">Kya hai yeh?</span> User ke actions (click, keypress, input) ko detect kar ke response dena.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold">addEventListener() Method:</span><br/>
              • Element par kisi bhi event ko listen kar sakte hain<br/>
              • Event type (click, keypress, input, etc.) specify karte hain<br/>
              • Callback function jab event hota hai tab run hota hai<br/>
              • Multiple events ek element par lag sakte hain
            </p>
          </Card>

          <CodeBlock
            title="event-listeners.js"
            code={`// Keypress event - Enter key detect karna
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
showItems(menu);`}
            explanation="Event listeners modern approach hai. onclick se better kyunki multiple listeners add kar sakte hain!"
          />
        </div>

        {/* Final Card */}
        <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
            🎉 Mubarak Ho! Aap ne seekh liya!
          </h3>
          <div className="space-y-3 text-muted-foreground">
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Arrays aur Objects ka use kar ke data organize karna</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>DOM manipulation se HTML elements ko control karna</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Functions bana kar reusable code likhna</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Array methods (filter, includes) ka use karna</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Event listeners se user interactions handle karna</span>
            </p>
          </div>
          <p className="mt-6 text-center text-foreground font-semibold text-lg">
            Ab aap apni khud ki dynamic web applications bana sakte hain! 🚀
          </p>
        </Card>
      </div>
    </section>
  );
};

export default CodeTutorial;
