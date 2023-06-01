import { Moment, MomentInput } from 'moment';
import { useEffect, useState } from 'react';

const MomentComp = () => {
  const [momentState, setMomentState] = useState<(arg?: MomentInput) => Moment>();
  console.log('🚀 ~ file: MomentComp.tsx:5 ~ MomentComp ~ momentState:', momentState);

  useEffect(() => {
    import('moment').then(moment => {
      setMomentState(() => (arg: MomentInput) => moment.default.call(null, arg));
    });
  }, []);

  if (!momentState) {
    return <>Loading...</>;
  }

  return (
    <div>
      <h1>MomentComp</h1>
      <p>{momentState().toISOString()}</p>
    </div>
  );
};

export default MomentComp;
