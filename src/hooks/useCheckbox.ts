import { useCallback, useState } from 'react';

const useCheckbox = (defaultValue = false) => {
  const [checked, setChecked] = useState(defaultValue);

  const toggle = useCallback(() => setChecked(c => !c), []);

  return [checked, toggle] as const;
};

export default useCheckbox;
