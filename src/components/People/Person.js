import { useState, useEffect } from 'react';

export default function Person(props) {
  const [clickNr, setClicksNr] = useState(1);

  // this render every time compoement changes
  document.title = 'Person stuff';
  console.log('title changed');

  // on component mount change document title to 'Person stuff'
  useEffect(() => {
    document.title = 'Person stuff';
    console.log('title changed');
  }, []);

  const onInrement = () => {
    console.log('clicked');
    // increase clickNr
    setClicksNr(clickNr + 1);
  };

  // add button that increases number by 10

  // add button that decreases nunber by 1
  const onDecrement = () => {
    setClicksNr(clickNr - 1);
  };
  // reset number to 0 when we click on name

  // hide decrease button to not alow numbers to go below zero

  // disable decrease button to not alow numbers to go below zero

  return (
    <div className='person'>
      <h2>{props.children}</h2>
      <p>{clickNr}</p>
      <button onClick={onInrement}>click</button>

      <button disabled={clickNr === 0} onClick={onDecrement}>
        - 1
      </button>
    </div>
  );
}
// true &&
