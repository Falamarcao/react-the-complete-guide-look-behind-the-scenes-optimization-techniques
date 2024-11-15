import { useState, memo, useCallback, useMemo } from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';
import CounterHistory from './CounterHistory.js';
import { CounterModel } from '../../models/CounterModel.js';

function isPrime(number: number) {
  log('Calculating if is prime number', 2, 'other');

  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

interface CounterProps {
  initialCount: number;
}

const Counter = memo(function Counter({ initialCount }: CounterProps) {
  log('<Counter /> rendered', 1);

  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount]
  );
  // const [counter, setCounter] = useState(initialCount);
  const [counterChanges, setCounterChanges] = useState<CounterModel[]>([
    { value: initialCount, id: Math.random() * 1000 },
  ]);

  // The example below of useEffect is not optimal because trigger component re-executing.
  // It is better to use a key in file App.tsx on CounterV2 component.

  //   useEffect(() => {
  //     setCounterChanges([{ value: initialCount, id: Math.random() * 1000 }]);
  //   }, [initialCount]);

  const currentCounter = useMemo(
    () =>
      counterChanges.reduce(
        (prevCounter, counterChange) => prevCounter + counterChange.value,
        0
      ),
    [counterChanges]
  );

  const handleDecrement = useCallback(function handleDecrement() {
    // setCounter((prevCounter) => prevCounter - 1);
    setCounterChanges((prevCounterChanges) => [
      { value: -1, id: Math.random() * 1000 },
      ...prevCounterChanges,
    ]);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    // setCounter((prevCounter) => prevCounter + 1);
    setCounterChanges((prevCounterChanges) => [
      { value: 1, id: Math.random() * 1000 },
      ...prevCounterChanges,
    ]);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} />
    </section>
  );
});

export default Counter;
