import useCheckbox from '../../hooks/useCheckbox';
import UseMemoTest from '../use-memo';

const MemoizedComp = UseMemoTest;

const MemoTest = () => {
  const [checked, toggleCheckbox] = useCheckbox(false);

  return (
    <div>
      <input type="checkbox" onChange={toggleCheckbox} checked={checked} />
      <MemoizedComp noCheckbox />
    </div>
  );
};

export default MemoTest;
