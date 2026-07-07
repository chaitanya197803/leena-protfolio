'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface TypingTextProps {
  texts: string[];
  delay?: number;
  speed?: number;
}

export function TypingText({ texts, delay = 2000, speed = 100 }: TypingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = texts[currentTextIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), delay);
        } else {
          timer = setTimeout(handleType, speed);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        } else {
          timer = setTimeout(handleType, speed / 2);
        }
      }
    };

    timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, delay, speed]);

  return (
    <span className="inline-block min-h-[1.2em] relative font-semibold text-primary">
      {currentText}
      <span className="inline-block ml-1 w-[2px] h-[1.1em] bg-primary animate-pulse align-middle" />
    </span>
  );
}

interface FadeInRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function FadeInReveal({ text, className = '', delay = 0 }: FadeInRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 15,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 15,
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="mr-1.5 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
