import { useState, useEffect } from 'react';

const btnNames = ['click me', 'go back', 'subscibe'];

function MyBtn() {
  console.log('MyBtn.js componentas');

  // const currentName = btnNames[0];

  const [currrentBtnIndex, setCurrentBtnIndex] = useState(0);

  // sukuriam count state kintamaji, kurio pradine reiksme 0
  // ji mes galim pakeist su setCount funkcija
  let [count, setCount] = useState(0);

  //                     priklausomybiu masyvas - dependancy array
  // useEffect(()=> {}, []) ->
  // naudojamas kaip veiksmas vyksianti viena karta tik susikurus komponentui
  useEffect(() => {
    console.log('use effect MyBtn.js');
  }, []);

  useEffect(() => {
    console.log('use effect MyBtn.js to change count');
    setCount(1);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(10)}>
        {btnNames[currrentBtnIndex]} {count}
      </button>
      <button onClick={() => setCurrentBtnIndex(1)}>set name to index 1</button>
    </div>
  );
}
export default MyBtn;
