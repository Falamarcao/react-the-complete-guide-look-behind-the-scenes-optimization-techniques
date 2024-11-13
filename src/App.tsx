import { useState } from 'react';

import CounterV2 from './components/Counter/CounterV2';
import Header from './components/Header';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.js';

const App = () => {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  const handleSetCount = (value: number) => {
    setChosenCount(value);
  };

  // By creating ConfigureCounter and moving the state internally
  // We no long need the memo() inside/around Counter component.
  // Refers to commit a556e4c2865509996a220791bc5ba35712ab695f
  // https://github.com/falamarcao/react-the-complete-guide-look-behind-the-scenes-optimization-techniques/commit/a556e4c2865509996a220791bc5ba35712ab695f

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <CounterV2 initialCount={chosenCount} />
        <CounterV2 initialCount={chosenCount} />
      </main>
    </>
  );
};

export default App;
