import { FC, useCallback, useEffect, useState } from 'react';

const HeavyComponent: FC<{ delay?: number }> = ({ delay = 1000 }) => {
  const [isLoading, setIsLoading] = useState(true);

  const performHeavyComputation = useCallback(() => {
    const startTime = Date.now();
    while (Date.now() - startTime < delay) {
      // Do some work
    }
  }, [delay]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    // Simulate heavy computation
    performHeavyComputation();

    return () => {
      clearTimeout(timer);
    };
  }, [delay, performHeavyComputation]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Component loaded!</div>;
};

export default HeavyComponent;
