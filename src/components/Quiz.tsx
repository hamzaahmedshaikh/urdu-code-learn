import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Trophy } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const questions: Question[] = [
    {
      question: "Array kya hai?",
      options: [
        "Sirf numbers store kar sakta hai",
        "Multiple values ko ek variable mein store karta hai",
        "Sirf strings store kar sakta hai",
        "Database hai"
      ],
      correctAnswer: 1,
      explanation: "Array multiple values ko ek variable mein store karta hai. Ismein koi bhi data type store kar sakte hain!"
    },
    {
      question: "getElementById() method kya karta hai?",
      options: [
        "Element create karta hai",
        "Element ko delete karta hai",
        "Element ko ID se select karta hai",
        "Element ka color change karta hai"
      ],
      correctAnswer: 2,
      explanation: "getElementById() HTML element ko uski ID se select karta hai taake aap JavaScript se usko control kar saken."
    },
    {
      question: "filter() method ka kya kaam hai?",
      options: [
        "Array ko delete kar deta hai",
        "Condition ke basis par naya array banata hai",
        "Array ko sort karta hai",
        "Array ka size change karta hai"
      ],
      correctAnswer: 1,
      explanation: "filter() method condition ke basis par items ko filter kar ke naya array return karta hai. Original array change nahi hota!"
    },
    {
      question: "includes() method kya check karta hai?",
      options: [
        "String empty hai ya nahi",
        "String lambi hai ya chhoti",
        "Koi text string mein hai ya nahi",
        "String capital letters mein hai"
      ],
      correctAnswer: 2,
      explanation: "includes() method check karta hai ke koi specific text string mein mojood hai ya nahi. Search functionality ke liye perfect!"
    },
    {
      question: "addEventListener() ka faida kya hai?",
      options: [
        "Elements create karne ke liye",
        "User events (click, keypress) ko listen karne ke liye",
        "Arrays banane ke liye",
        "Functions delete karne ke liye"
      ],
      correctAnswer: 1,
      explanation: "addEventListener() user ke actions (clicks, keypresses, etc) ko listen karta hai aur jab wo action hota hai tab code run karta hai!"
    }
  ];

  const handleAnswer = (index: number) => {
    if (answered) return;
    
    setSelectedAnswer(index);
    setAnswered(true);
    
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswered(false);
  };

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    return (
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 text-center">
            <Trophy className="w-20 h-20 text-accent mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Quiz Mukammal Hui!
            </h2>
            <p className="text-3xl font-bold text-primary mb-2">
              {score} / {questions.length}
            </p>
            <p className="text-xl text-muted-foreground mb-6">
              {percentage >= 80 ? "Bohat zabardast! 🎉" : percentage >= 60 ? "Acha hai! Aur mehnat karein 💪" : "Aur practice karein 📚"}
            </p>
            <Button onClick={restartQuiz} size="lg" className="text-lg px-8">
              Dubara Try Karein
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <section id="quiz" className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Apna Knowledge Test Karein
          </h2>
          <p className="text-muted-foreground text-lg">
            Sawal {currentQuestion + 1} / {questions.length}
          </p>
        </div>

        <Card className="p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            {currentQ.question}
          </h3>

          <div className="space-y-4 mb-6">
            {currentQ.options.map((option, index) => {
              const isCorrect = index === currentQ.correctAnswer;
              const isSelected = index === selectedAnswer;
              
              let className = "w-full text-left p-4 rounded-lg border-2 transition-all text-lg ";
              
              if (!answered) {
                className += "border-border hover:border-primary hover:bg-primary/5 cursor-pointer";
              } else {
                if (isSelected) {
                  className += isCorrect 
                    ? "border-green-500 bg-green-50 dark:bg-green-950" 
                    : "border-red-500 bg-red-50 dark:bg-red-950";
                } else if (isCorrect) {
                  className += "border-green-500 bg-green-50 dark:bg-green-950";
                } else {
                  className += "border-border opacity-50";
                }
                className += " cursor-not-allowed";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={answered}
                  className={className}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-muted-foreground">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="flex-1">{option}</span>
                    {answered && isCorrect && (
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    )}
                    {answered && isSelected && !isCorrect && (
                      <XCircle className="w-6 h-6 text-red-600" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {answered && (
            <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-foreground font-semibold mb-2">✨ Explanation:</p>
              <p className="text-muted-foreground text-lg">{currentQ.explanation}</p>
            </div>
          )}

          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              Score: <span className="font-bold text-primary">{score}</span>
            </p>
            {answered && (
              <Button onClick={handleNext} size="lg" className="text-lg">
                {currentQuestion < questions.length - 1 ? "Agla Sawal" : "Results Dekhein"}
              </Button>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Quiz;
