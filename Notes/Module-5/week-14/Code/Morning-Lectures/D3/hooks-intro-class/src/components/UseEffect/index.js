import { useState, useEffect } from 'react';

import './UseEffect.css';

const UseEffect = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect1 ran');
  }, []);

  useEffect(() => {
    console.log('UseEffect2 ran');

    if (toggleTwo) {
      console.log('My toggleTwo functionality evaluated');
    }
  }, [toggleTwo]);

  useEffect(() => {
    console.log('UseEffect3 ran', count);

    return () => {
      console.log('UseEffect3 cleanup ran', count);
    };
  }, [count]);

  return (
    <div>
      {console.log('rendered or re-rendered')}
      <h1>UseEffect Component</h1>
      <button onClick={() => setToggleOne(!toggleOne)}>Toggle 1</button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>Toggle 2</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        UpCount
      </button>
    </div>
  );
};
export default UseEffect;
