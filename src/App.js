import './App.css';
// import CounterList from './components/Counter/CounterList';

// import MyBtn from './components/MyBtn';
import Person from './components/People/Person';

function App() {
  // state - to kompnento busenos duomenys
  // const myArr = ['green', 'blue', 'red'];
  console.log('App.js componentas');
  return (
    <div className='App'>
      <h2>App</h2>
      <Person>James Bond</Person>
    </div>
  );
}

export default App;
