/* eslint-disable react/prop-types */
import StationWeapons from './StationWeapons';
import StationTop from './StationTop';
const Station = (props) => {
  if (props.weapon1 && props.weapon2) {
    return (
      <>
        <StationTop text={props.name} />
        <div className='missile-grid'>
          <StationWeapons
            weapon={props.weapon1}
            isSelected={props.isSelected}
          />
          <StationWeapons
            weapon={props.weapon2}
            isSelected={props.isSelected}
          />
        </div>
      </>
    );
  } else if (props.weapon1 && !props.weapon2) {
    return (
      <>
        <StationTop text={props.name} />
        <div className='missile-grid'>
          <StationWeapons
            weapon={props.weapon1}
            isSelected={props.isSelected}
          />
          <div />
        </div>
      </>
    );
  } else if (!props.weapon1 && props.weapon2) {
    return (
      <>
        <StationTop text={props.name} />
        <div className='missile-grid'>
          <div />
          <StationWeapons
            weapon={props.weapon2}
            isSelected={props.isSelected}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <StationTop text={props.name} />
      </>
    );
  }
};

export default Station;
