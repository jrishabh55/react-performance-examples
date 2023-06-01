import { MouseEventHandler, useCallback, useState } from 'react';
import ColorBox from '../../components/ColorBox';
import './index.css';
import { createUniqueKey } from '../../utils';

const numberOfItems = 1000;
const numRange = Array.from({ length: numberOfItems }).map((_, index) => ({
  num: index + 1,
  id: createUniqueKey('Uniq_')
}));

const KeyDemo = () => {
  const [state, setState] = useState(numRange);

  const handleClick: MouseEventHandler<HTMLSpanElement> = useCallback(e => {
    e.preventDefault();
    const itemValue = parseInt(e.currentTarget.innerText, 10);

    setState(prev => {
      const itemIndexToRemove = prev.findIndex(item => item.num === itemValue);
      const newState = [...prev];
      newState.splice(itemIndexToRemove, 1);
      return newState;
    });
  }, []);

  return (
    <div className="key-demo">
      {state.map((item) => (
        <ColorBox key={createUniqueKey('uniq')} onClick={handleClick}>
          {item.num}
        </ColorBox>
      ))}
    </div>
  );
};

export default KeyDemo;
