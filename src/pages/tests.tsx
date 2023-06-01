import { ChangeEventHandler, Fragment, useCallback, useMemo, useState } from 'react';
import CustomProfiler from '../components/CustomProfiler';
import KeyDemo from '../tests/key';
import LazyComponentTest from '../tests/lazy-component';
import LazyModuleTest from '../tests/lazy-module';
import MemoTest from '../tests/memo';
import MemoryHogTest from '../tests/memory-hog';
import UseCallbackTest from '../tests/use-callback';
import UseMemoTest from '../tests/use-memo';

const tests = [
  {
    name: 'Key Demo',
    component: KeyDemo,
  },
  {
    name: 'Use-Callback Demo',
    component: UseCallbackTest,
  },
  {
    name: 'Use-Memo Demo',
    component: UseMemoTest,
  },
  {
    name: 'Memo Demo',
    component: MemoTest,
  },
  {
    name: 'Code splitting demo - Package Level',
    component: LazyModuleTest,
  },
  {
    name: 'Code splitting demo - Component Level',
    component: LazyComponentTest,
  },
  {
    name: 'Surprise demo',
    component: MemoryHogTest,
  },
] as const;

type Test = (typeof tests)[number]['name'];

const Tests = () => {
  const [activeTest, setActiveTest] = useState<Test>();

  const ActiveTestComponent = useMemo(() => {
    if (!activeTest) {
      return Fragment;
    }
    const test = tests.find(test => test.name === activeTest);
    if (!test) {
      return Fragment;
    }
    return test.component;
  }, [activeTest]);

  const handleActiveTestClick = useCallback<ChangeEventHandler<HTMLSelectElement>>(e => {
    e.preventDefault();
    const testName = e.currentTarget.value;
    const test = tests.find(test => test.name === testName);
    if (test) {
      setActiveTest(test.name);
    }
  }, []);

  return (
    <div className="">
      <main className="demo-container">
        <div className="demo-label flex-center gap">
          <label>Active Test:</label>
          <select onChange={handleActiveTestClick}>
            <option value="">Select a test</option>
            {tests.map((test, i) => (
              <option key={test.name} value={test.name} className={activeTest === test.name ? 'active' : ''}>
                {i + 1}: {test.name}
              </option>
            ))}
          </select>
        </div>
        <h2 className="test-header">{activeTest}</h2>
        <div>
          {activeTest && (
            <CustomProfiler id={activeTest}>
              <ActiveTestComponent />
            </CustomProfiler>
          )}
        </div>
        {!activeTest && <h2 className="center text-center">Please select a test from the dropdown above.</h2>}
      </main>
    </div>
  );
};

export default Tests;
