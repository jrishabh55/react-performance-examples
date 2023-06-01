import { FC } from 'react';
import useCheckbox from '../../hooks/useCheckbox';
import { performHeavyCalculation } from '../../utils';


const UseMemoTest: FC<{ noCheckbox?: boolean }> = ({ noCheckbox = false }) => {
  const [checked, toggleCheckbox] = useCheckbox(false);

  const heavyResult = performHeavyCalculation()

  return (
    <div>
      {!noCheckbox && <input type="checkbox" onChange={toggleCheckbox} checked={checked} />}
      Heavy calculation result: {heavyResult}
    </div>
  );
};

export default UseMemoTest;
