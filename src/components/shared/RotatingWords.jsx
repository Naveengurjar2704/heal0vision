import { useEffect, useState } from "react";
import "./RotatingWords.css";

// Pass `activeIndex` to drive this from an external, shared timer (e.g. kept
// in sync with a RotatingImage). Omit it to let this manage its own timer.
export default function RotatingWords({ words, interval = 2200, className = "", activeIndex }) {
  const [internalIndex, setInternalIndex] = useState(0);
  const isControlled = typeof activeIndex === "number";
  const index = isControlled ? activeIndex : internalIndex;

  useEffect(() => {
    if (isControlled || words.length <= 1) return undefined;
    const id = setInterval(() => setInternalIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [isControlled, words, interval]);

  return (
    <span className={`rotating-words ${className}`.trim()} key={index}>
      {words[index]}
    </span>
  );
}
