import moment from 'moment';

const MomentComp = () => {
  return (
    <div>
      <h1>MomentComp</h1>
      <p>{moment().toISOString()}</p>
    </div>
  );
};

export default MomentComp;
