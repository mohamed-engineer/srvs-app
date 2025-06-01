"use client";
import { useEffect, useState } from "react";

export function useCountUp(target: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const step = Math.ceil(target / 50);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(current);
    }, 30);

    return () => clearInterval(interval);
  }, [start, target]);

  return count;
}
