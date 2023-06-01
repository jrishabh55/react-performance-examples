import { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('../../components/MomentComp'));

const LazyComponentTest = () => {
  return (
    <div>
      <h1>Lazy Component Test</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default LazyComponentTest;
