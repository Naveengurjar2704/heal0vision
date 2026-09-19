import { useEffect, useState } from "react";
import "./RotatingImage.css";

// Crossfades between a fixed set of images — no drifting/floating motion,
// just a swap from one photo to the next. Pass `activeIndex` to drive this
// from an external, shared timer (e.g. kept in sync with RotatingWords).
export default function RotatingImage({ images, interval = 4500, className = "", activeIndex }) {
  const [internalIndex, setInternalIndex] = useState(0);
  const isControlled = typeof activeIndex === "number";
  const index = isControlled ? activeIndex : internalIndex;

  useEffect(() => {
    if (isControlled || images.length <= 1) return undefined;
    const id = setInterval(() => setInternalIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [isControlled, images, interval]);

  return (
    <div className={`rotating-image ${className}`.trim()}>
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={i === index ? img.alt : ""}
          aria-hidden={i === index ? undefined : "true"}
          className={`rotating-image__frame ${i === index ? "rotating-image__frame--active" : ""}`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}
