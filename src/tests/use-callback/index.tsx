import { FC } from 'react';
import PureDumbComponent from '../../components/DumbLoggingComponent';
import useCheckbox from '../../hooks/useCheckbox';

// const prop = () => // do something void 0;

const UseCallbackTest: FC = () => {
  const [checked, toggleCheckbox] = useCheckbox(false);

  const dumbFunc = () => {
    // Do something
  };

  return (
    <div>
      <p>Open the console and see the logs</p>
      <br />
      <input type="checkbox" onChange={toggleCheckbox} checked={checked} />
      <br />
      <PureDumbComponent func={dumbFunc} />
    </div>
  );
};

export default UseCallbackTest;
