import { useState } from "react";
import { Clipboard, TickIcon } from "../../icons/Icons";

export default function CodeBlock({ children }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center space-x-5 justify-between bg-secondary text-secondary font-mono rounded-md py-2 px-4 text-sm overflow-x-auto shadow-sm border-thin">
      <pre className="not-prose">{children}</pre>
      <button
        onClick={handleCopy}
        className="text-primary hover:text-secondary"
      >
        {copied ? <TickIcon className="h-5" /> : <Clipboard className="h-5" />}
      </button>
    </div>
  );
}
