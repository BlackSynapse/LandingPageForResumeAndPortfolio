"use client";

import { ReactNode, useEffect, useState } from "react";

type FadeProps = {
  children: ReactNode;
  delay?: number;
  duration?: string;
  fadeIn?: boolean;
  fadeOut?: boolean;
};

export default function FadeAnimation({
  children,
  delay = 10,
  duration = "duration-1000",
  fadeIn = true,
  fadeOut = false,
}: FadeProps) {
  const [isVisible, setIsVisible] = useState(!fadeIn);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (fadeIn) {
      timeout = setTimeout(() => setIsVisible(true), delay);
    }
    return () => {
      if (fadeOut) {
        setIsVisible(false);
      }
      clearTimeout(timeout);
    };
  }, [delay, fadeIn, fadeOut]);

  return (
    <div
      className={`transition-opacity ${duration} ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
