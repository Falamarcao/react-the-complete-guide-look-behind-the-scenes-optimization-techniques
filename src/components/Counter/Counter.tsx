import { useCallback, useMemo, useState } from 'react';

import { log } from '../../log.ts';

import IconButton from '../UI/IconButton';
import MinusIcon from '../UI/Icons/MinusIcon';
import PlusIcon from '../UI/Icons/PlusIcon';
import CounterOutput from './CounterOutput';

const isPrime = (number: number) => {
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
};

interface CounterProps {
  initialCount: number;
}

const Counter = ({ initialCount }: CounterProps) => {
  log('<Counter /> rendered', 1);

  // useMemo is different from memo()
  // useMemo is for avoid function re-execution. memo() is for JSX/TSX components.
  // Use only in heavy functions - this is just an example.
  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount]
  );

  const [counter, setCounter] = useState(initialCount);

  const handleDecrement = useCallback(() => {
    setCounter((prevCounter) => prevCounter - 1);
  }, []);

  const handleIncrement = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  // To avoid rerendering IconButton we wrap the component with memo().
  // Also, we apply useCallback to prevent function recreation and trigger IconButton rerendering.

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
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
    </section>
  );
};

export default Counter;
