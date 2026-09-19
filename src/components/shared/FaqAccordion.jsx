import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./FaqAccordion.css";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className={`faq__item ${isOpen ? "faq__item--open" : ""}`}>
            <button
              type="button"
              className="faq__question"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              {item.question}
              <ChevronDown size={18} className="faq__chevron" />
            </button>
            {isOpen && <p className="faq__answer">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
