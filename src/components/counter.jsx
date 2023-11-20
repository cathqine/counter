
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Counter = () => {
  const location = useLocation();
  const name = location.state.name;

  const [count, setCount] = useState(0);
  const [showIncrement, setShowIncrement] = useState(true);
  const [showDecrement, setShowDecrement] = useState(true);

  const increment = () => {
    setCount((count) => {
      if (count < 10) {
        localStorage.setItem("count", Number(count) + 1);
        return Number(count) + 1;
      } else {
        return Number(count);
      }
    })
  };

  const decrement = () => {
    setCount((count) => {
      if (count > 0) {
        localStorage.setItem('count', Number(count) - 1);
        return Number(count) - 1;
      } else {
        return Number(count);
      }
    })
  }

  // useEffect to render once
  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setCount(Number(storedCount));
    }
    if (Number(storedCount) <= 0) {
      setShowDecrement(false);
      setShowIncrement(true);
    } else if (Number(storedCount) >= 10) {
      setShowIncrement(false);
      setShowDecrement(true);
    }
  }, []);

  // useEffect to render every time counter changes
  useEffect(() => {
    if (count <= 0) {
      setShowDecrement(false);
      setShowIncrement(true);
    } else if (0 < count && count < 10) {
      setShowIncrement(true);
      setShowDecrement(true);
    } else if (count >= 9) {
      setShowDecrement(true);
      setShowIncrement(false);
    }
  }, [count]);

  const navigate = useNavigate();

  const IncrementButton = () => {
    return (
      <div style={{ margin: '0em 11em 1em 11em' }}>
        <button id="plus" onClick={increment}> + </button>
      </div>
    );
  }

  const DecrementButton = () => {
    return (
      <div style={{ margin: '0em 11em 1em 11em' }}>
        <button id="minus" onClick={decrement}> - </button>
      </div>
    )
  }

  return (
    <div className="App-header">
      <h3>Hello {name}! Welcome to the Counter </h3>
      <h1>Counter: {count} </h1>
      {(showIncrement === true) ? <IncrementButton /> : null}
      {(showDecrement === true) ? <DecrementButton /> : null}

      <button onClick={() => { navigate('/') }} style={{ marginTop: '2em' }}> Go Back </button>
    </div>
  );
}

export default Counter;
