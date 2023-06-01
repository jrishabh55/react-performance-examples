import { FC, memo, useRef } from 'react';

export const DumbLoggingComponent: FC<Record<string, unknown>> = () => {
  const noOfRender = useRef(0);
  noOfRender.current += 1;

  console.log('DumbLoggingComponent rendered', noOfRender.current);

  return <div>DumbLoggingComponent Rendered: {noOfRender.current}</div>;
};

const MemoizedDumbComponent = memo(DumbLoggingComponent);

export default MemoizedDumbComponent;
