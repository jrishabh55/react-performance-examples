import { useState } from 'react';
import { performHeavyCalculation } from '../../utils';

const INPComponent = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // Simulate a heavy synchronous task
    performHeavyCalculation(9999999999);

    setIsClicked(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {isClicked && <div>Button clicked!</div>}
    </div>
  );
};

export default INPComponent;
