export const createUniqueKey = (prefix = '') => {
  return `${prefix}_${Math.random().toString(36).substring(2, 9)}`;
};

export const performHeavyCalculation = (max = 999_999_999) => {
  const time = Date.now();
  let result = 0;
  for (let i = 0; i < max; i++) {
    result += 1;
  }
  console.warn('Time taken by calculation %dms', Date.now() - time)
  return result;
};

export const correctReduce = (no = 20000) => {
  const arr = Array(no)
    .fill(0)
    .map((_, i) => ({
      no: i + 1,
      name: `name_${i + 1}`,
    }));

  return arr.reduce((acc: number[], curr: (typeof arr)[number]) => {
    acc.push(curr.no);
    return acc;
  }, []);
};
