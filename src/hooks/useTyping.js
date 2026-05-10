import { useState, useEffect } from "react";

export default function useTyping(words, speed = 80, pause = 1800) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < word.length) setText(word.slice(0, text.length + 1));
        else setTimeout(() => setDeleting(true), pause);
      } else {
        if (text.length > 0) setText(text.slice(0, -1));
        else {
          setDeleting(false);
          setIdx((i) => i + 1);
        }
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, idx, words, speed, pause]);

  return text;
}
