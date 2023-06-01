import MomentComp from '../../components/MomentComp';
// import MomentComp from '../../components/MomentCompCodeSplit';

const LazyModuleTest = () => {
  return (
    <div>
      <h1>Lazy Module Test</h1>
      {/* Comment following for testing component level lazy loading. */}
      <MomentComp />
    </div>
  );
};

export default LazyModuleTest;
