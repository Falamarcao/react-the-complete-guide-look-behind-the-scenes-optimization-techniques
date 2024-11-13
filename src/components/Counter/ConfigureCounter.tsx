import { ChangeEvent, useState } from 'react';
import { log } from '../../log';

interface ConfigureCounterProps {
  onSet: (value: number) => void;
}

const ConfigureCounter = ({ onSet }: ConfigureCounterProps) => {
  log('<ConfigureCounter />', 1);

  const [enteredNumber, setEnteredNumber] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredNumber(+event.target.value);
  };

  const handleSetClick = () => {
    onSet(enteredNumber);
    setEnteredNumber(0);
  };

  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
};

export default ConfigureCounter;
