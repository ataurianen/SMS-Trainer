import Station from './components/Station';

const App = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='station-text'>
          <div>Station 1</div>
          <div></div>
        </div>
        <div className='station-text'>
          <div>Station 2</div>
          <div></div>
        </div>
        <div className='station-text'>
          <div>Station 3</div>
          <div></div>
        </div>
        <div className='station-text'>
          <div>Station 5</div>
          <div></div>
        </div>
        <div className='station-text'>
          <div>Station 6</div>
          <div></div>
        </div>
        <div className='station-text'>
          <div>Station 7</div>
          <div></div>
        </div>
        <div id='Station 1' className='missile-grid'></div>
        <div id='Station 2' className='missile-grid'>
          <Station weapon={'R-2'} isSelected={true} />
          <Station weapon={'R-9E'} isSelected={true} />
        </div>
        <div id='Station 3' className='missile-grid'>
          <Station weapon={'GBU12'} isSelected={false} />
        </div>
        <div id='Station 5' className='missile-grid'>
          <Station weapon={'GBU38'} isSelected={false} />
        </div>
        <div id='Station 6' className='missile-grid'>
          <Station weapon={'R-2'} isSelected={true} />
          <Station weapon={'R-9E'} isSelected={false} />
        </div>
        <div id='Station 7' className='missile-grid'></div>
      </div>
      <div className='body'></div>
      <div className='footer'></div>
    </div>
  );
};

export default App;
