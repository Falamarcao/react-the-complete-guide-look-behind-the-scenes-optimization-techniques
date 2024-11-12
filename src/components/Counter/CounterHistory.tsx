import { useState } from 'react';

import { log } from '../../log.ts';

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
  history: number[];
}

const CounterHistory = ({ history }: CounterHistoryProps) => {
  log('<CounterHistory /> rendered', 2);

  return (
    <ol>
      {history.map((count, index) => (
        <HistoryItem key={index} count={count} />
      ))}
    </ol>
  );
};

export default CounterHistory;
