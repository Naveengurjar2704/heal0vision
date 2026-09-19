import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Eye } from "lucide-react";
import { findAnswer, welcomeMessage } from "../../data/chatbotKnowledge";
import "./VisionAssistant.css";

export default function VisionAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role: "bot", text: welcomeMessage }]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  function handleSend(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    const reply = findAnswer(text);
    setMessages((m) => [...m, { role: "user", text }, { role: "bot", text: reply }]);
    setInput("");
  }

  return (
    <div className="assistant">
      {open && (
        <div className="assistant__panel" role="dialog" aria-label="Heal O Vision assistant">
          <div className="assistant__header">
            <div className="assistant__title">
              <Eye size={18} />
              <div>
                <strong>Vision Assistant</strong>
                <span>Eye-care questions only</span>
              </div>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close assistant">
              <X size={18} />
            </button>
          </div>

          <div className="assistant__body" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`assistant__msg assistant__msg--${m.role}`}>
                {m.text}
              </div>
            ))}
          </div>

          <form className="assistant__input" onSubmit={handleSend}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about LASIK, SMILE, cost, booking…"
              aria-label="Type your eye-care question"
            />
            <button type="submit" aria-label="Send">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="assistant__fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close vision assistant" : "Open vision assistant"}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
