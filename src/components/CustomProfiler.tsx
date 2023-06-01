import { FC, Profiler, ProfilerOnRenderCallback, PropsWithChildren, useCallback } from 'react';

export type ProfilerProps = PropsWithChildren & {
  id: string;
};
const CustomProfiler: FC<ProfilerProps> = ({ children, id }) => {
  const handleRender: ProfilerOnRenderCallback = useCallback(
    (id: string, phase: 'mount' | 'update', actualDuration: number, _baseDuration: number) => {
      console.table({
        Name: id,
        Phase: phase,
        'Actual Duration': actualDuration.toFixed(2),
        'Base Duration': _baseDuration.toFixed(2),
      });
    },
    [],
  );

  return (
    <Profiler id={id} onRender={handleRender}>
      {children}
    </Profiler>
  );
};

export default CustomProfiler;
