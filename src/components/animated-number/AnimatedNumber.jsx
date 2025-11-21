import React, { useState, useEffect, useRef } from "react";

const AnimatedNumber = ({ targetNumber, duration = 2000, label = "" }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  const animationRef = useRef(null);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (targetNumber === 0) {
      setCurrentNumber(0);
      return;
    }

    const start = performance.now();
    const step = (timestamp) => {
      // Прошедшее время
      const elapsed = timestamp - start;

      const progress = Math.min(1, elapsed / duration);

      const value = Math.floor(progress * targetNumber);

      setCurrentNumber(value);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      }
    };

    animationRef.current = requestAnimationFrame(step);
  }, [targetNumber, duration]);

  return (
    <>
      {currentNumber.toLocaleString()}
      {label}
    </>
  );
};

export default AnimatedNumber;
