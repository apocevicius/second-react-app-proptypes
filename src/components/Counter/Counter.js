import { useState, useEffect } from 'react';

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Counter(props) {
  // sio masyvo pirmo generavimo metu mes neturim jis atsiranda tik po fetch

  const [colors, setColors] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);
  const [counterValue, setCounterValue] = useState(0);

  // vyksta viena karto po komponento sugeneravimo
  useEffect(() => {
    setColors(['red', 'green', 'blue', 'violet', 'yellow', 'tomato']);
    // console.log(colors.length);
    // sugeneruot random sk is spalvu index
  }, []);

  // vygdyti kai pasikeicia colors arba counterValue
  useEffect(() => {
    console.log('colors changed');
    console.log('colors length', colors.length);
    setRandomIndex(randomInteger(0, colors.length));
  }, [colors, counterValue]);

  // console.log('randomIndex', randomIndex);
  // console.log('colors', colors);
  const valueStyle = {
    color: colors[randomIndex],
  };

  const onIncrement = () => {
    console.log('onIncrement');
    setCounterValue(counterValue + 1);
  };
  const onDecrement = () => {
    console.log('onDecrement');
    setCounterValue(counterValue - 1);
  };

  const counterClasses = () => {
    let totalClasses = 'counter-container ';
    if (counterValue < 0) {
      totalClasses += 'counter-negative ';
    }
    if (counterValue > 0) {
      totalClasses += 'counter-positive ';
    }

    // prideti 'counter-positive' kai counteris didesnis uz 0
    return totalClasses;
  };

  return (
    <article className={counterClasses()}>
      <h2 className='counter__title'>
        <span>Counter</span>
        {props.title}
      </h2>
      <h3 style={valueStyle} className='counter__value'>
        {counterValue}
      </h3>
      <button onClick={onIncrement}>Increase</button>
      <button onClick={onDecrement}>Decrease</button>
    </article>
  );
}
export default Counter;
