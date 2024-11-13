import { useState } from 'react';

import Counter from './components/Counter/Counter';
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
  // We no long need the memo() inside/around Counter component. (Refers to commit a556e4c2865509996a220791bc5ba35712ab695f)

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
};

export default App;
