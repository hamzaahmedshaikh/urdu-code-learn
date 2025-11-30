import { Card } from "@/components/ui/card";

interface CodeBlockProps {
  code: string;
  title?: string;
  explanation?: string;
}

const CodeBlock = ({ code, title, explanation }: CodeBlockProps) => {
  return (
    <Card className="overflow-hidden border-2 border-primary/20">
      {title && (
        <div className="bg-primary px-6 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-white font-semibold ml-4">{title}</span>
        </div>
      )}
      
      <pre className="code-block overflow-x-auto">
        <code className="font-mono text-sm leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>
      
      {explanation && (
        <div className="bg-muted px-6 py-4 border-t-2 border-border">
          <p className="text-foreground leading-relaxed">{explanation}</p>
        </div>
      )}
    </Card>
  );
};

export default CodeBlock;
