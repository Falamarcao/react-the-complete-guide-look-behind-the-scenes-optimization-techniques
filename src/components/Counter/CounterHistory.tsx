import { useState } from 'react';

import { log } from '../../log.ts';
import { CounterModel } from '../../models/CounterModel.ts';

interface HistoryItemProps {
  count: number;
}

const HistoryItem = ({ count }: HistoryItemProps) => {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? 'selected' : undefined}>
      {count}
    </li>
  );
};

interface CounterHistoryProps {
  history: CounterModel[];
}

const CounterHistory = ({ history }: CounterHistoryProps) => {
  log('<CounterHistory /> rendered', 2);

  return (
    <ol>
      {history.map((count: CounterModel) => (
        <HistoryItem key={count.id} count={count.value} />
      ))}
    </ol>
  );
};

export default CounterHistory;
