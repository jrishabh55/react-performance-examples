import { useState, useEffect, FC, PropsWithChildren } from 'react';

const SlowMountComponent: FC<PropsWithChildren<{ delay?: number }>> = ({ children, delay = 1000 }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  if (!isMounted) {
    return null; // Render nothing during the delay
  }

  return <>{children}</>;
};

export default SlowMountComponent;
