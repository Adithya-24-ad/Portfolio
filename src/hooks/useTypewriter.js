import { useEffect, useState } from 'react';

export function useTypewriter(words, speed = 80, pause = 1400) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    const isDoneTyping = !deleting && text === word;
    const isDoneDeleting = deleting && text === '';

    const timeout = window.setTimeout(
      () => {
        if (isDoneTyping) {
          setDeleting(true);
          return;
        }

        if (isDoneDeleting) {
          setDeleting(false);
          setWordIndex((index) => index + 1);
          return;
        }

        setText((current) =>
          deleting ? word.slice(0, current.length - 1) : word.slice(0, current.length + 1),
        );
      },
      isDoneTyping ? pause : deleting ? speed / 1.7 : speed,
    );

    return () => window.clearTimeout(timeout);
  }, [deleting, pause, speed, text, wordIndex, words]);

  return text;
}
