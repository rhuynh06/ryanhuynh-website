import { useState, useEffect } from "react";

interface LiveTypingProps {
  phrases: string[];
}

export function LiveTyping({ phrases }: LiveTypingProps) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: number;

    if (!deleting && charIndex <= currentPhrase.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (deleting && charIndex >= 0) {
      // Deleting backwards
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (charIndex === currentPhrase.length + 1) {
      // Pause at full phrase before deleting
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (charIndex === -1) {
      // Move to next phrase after deleting
      setDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, phrases]);

  return (
    <span className="text-green-400">
      {text}
      <span className="border-r-2 border-green-400 animate-blink ml-1"></span>
    </span>
  );
}