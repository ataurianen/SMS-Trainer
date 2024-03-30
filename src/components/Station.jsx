/* eslint-disable react/prop-types */
const Station = (props) => {
  const selected = props.isSelected
    ? 'station-selected'
    : 'station-not-selected';

  return (
    <div className='station'>
      <div className={selected}></div>
      <div className='station-ready'>READY</div>
      <div className='station-missile-text'>{props.weapon}</div>
    </div>
  );
};

export default Station;
