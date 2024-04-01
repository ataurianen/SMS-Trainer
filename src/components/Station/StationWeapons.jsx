/* eslint-disable react/prop-types */
const StationWeapons = ({ weapon, isSelected }) => {
  const selected = isSelected ? 'station-selected' : 'station-not-selected';

  return (
    <div className='station'>
      <div className={selected}></div>
      <div className='station-ready'>READY</div>
      <div className='station-missile-text'>{weapon}</div>
    </div>
  );
};

export default StationWeapons;
