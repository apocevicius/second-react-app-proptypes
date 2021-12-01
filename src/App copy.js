import './App.css';
import IfElseComp from './components/IfElseComp';
// import MyBtn from './components/MyBtn';
import UserAdmin from './components/UserAdmin';

function App() {
  const userIsLoggedIn = true;
  const age = 16;
  const personAgeStatus = age >= 18 ? 'adult' : 'not-adult';
  return (
    <div>
      <h2>App</h2>
      <UserAdmin />
      <IfElseComp adminStatus={false} />
      <div className='controll'>
        {/* {userIsLoggedIn ? <button>Go to About</button> : <button>Login</button>} */}
        {userIsLoggedIn && <button>Go to About</button>}
        {!userIsLoggedIn && <button>Login</button>}
      </div>
      <article>
        <h2>Your age is: {age}</h2>
        {age >= 18 && <h3>You are adult</h3>}
        {age < 18 && <h3>You are not adult</h3>}
      </article>

      <button className={age >= 18 ? 'btn-adult' : 'btn-teen'}>
        Age {personAgeStatus}
      </button>
    </div>
  );
}

export default App;
