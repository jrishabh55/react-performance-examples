import { useState } from 'react';

const normalArrayReduce = (no = 20000) => {
  const arr = Array(no)
    .fill(0)
    .map((_, i) => ({
      no: i + 1,
      name: `name_${i + 1}`,
    }));

  return arr.reduce((acc: number[], curr: (typeof arr)[number]) => [...acc, curr.no], []);
};

const MemoryHogTest = () => {
  const [timeSpent, setTimeSpent] = useState(0);

  const handleMemoryHog = () => {
    setTimeSpent(0);
    const startTime = Date.now();
    const result = normalArrayReduce();

    const endTime = Date.now();

    setTimeSpent(endTime - startTime);
    console.log(result);
  };
  return (
    <div>
      Run memory hog test: <button onClick={handleMemoryHog}>Run test</button>
      {timeSpent > 0 && <div>Time spent: {timeSpent}ms</div>}
    </div>
  );
};

export default MemoryHogTest;
