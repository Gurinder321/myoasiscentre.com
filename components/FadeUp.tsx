"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
}

export default function FadeUp({ children, delay = 0, className = "", threshold = 0.1 }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Start visible — content is readable even if JS doesn't fire
  const [visible, setVisible] = useState(true);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Now that JS is running, reset to hidden so we can animate in
    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
      setAnimated(true);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={
        animated
          ? {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
