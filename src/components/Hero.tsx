import { Code2, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 px-4 hero-gradient">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Code2 className="w-8 h-8 text-white" />
          <Sparkles className="w-6 h-6 text-secondary" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          JavaScript Seekhein
          <br />
          <span className="text-secondary">Roman Urdu Mein</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Restaurant Menu Filtering App banate hue JavaScript ki <span className="font-bold text-secondary">complete understanding</span> hasil karein. 
          Har line ko detail mein samjhein!
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-white font-semibold">✨ Beginner Friendly</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-white font-semibold">🎯 Step by Step</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-white font-semibold">💡 Interactive Examples</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
