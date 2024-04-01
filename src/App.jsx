import Station from './components/Station/Station';

const App = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div id='Station 1' className='station-grid'>
          <Station name={'Station 1'} />
        </div>
        <div id='Station 2' className='station-grid'>
          <Station
            weapon1={'R-2'}
            weapon2={'R-9E'}
            isSelected={true}
            name={'Station 2'}
          />
        </div>
        <div id='Station 3' className='station-grid'>
          <Station weapon1={'GBU12'} isSelected={false} name={'Station 3'} />
        </div>
        <div id='Station 5' className='station-grid'>
          <Station weapon1={'GBU38'} isSelected={false} name={'Station 5'} />
        </div>
        <div id='Station 6' className='station-grid'>
          <Station
            weapon1={'R-2'}
            weapon2={'R-9E'}
            isSelected={true}
            name={'Station 6'}
          />
        </div>
        <div id='Station 7' className='station-grid'>
          <Station name={'Station 7'} />
        </div>
      </div>
      <div className='body-header'>
        <div className='status-lights'>
          <div className='station-selected'></div>
          <div className='status-lights-text'>LNK</div>
        </div>
        <div className='status-lights'>
          <div className='station-selected'></div>
          <div className='status-lights-text'>STS</div>
        </div>
        <div>Air to Ground: Launch Status</div>
      </div>
      <div className='body'>
        <div className='left-side-body'>
          <button>Select Store</button>
          <button>Store Setting</button>
          <button>Select Target</button>
          <button>Release Settings</button>
          <button>Launch Status</button>
        </div>
        <div className='right-side-body'></div>
      </div>

      <div className='footer'>
        <button>Air-Ground</button>
        <button>Profiles</button>
        <button>Status</button>
        <button>Selective Jettison</button>
        <button>Inventory</button>
      </div>
    </div>
  );
};

export default App;
