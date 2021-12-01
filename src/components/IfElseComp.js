// create component
function IfElseComp(props) {
  // const isAdmin = true;
  console.log(props.adminStatus);
  return (
    <div>
      <h2>IfElseComp</h2>
      {props.adminStatus && <a href='/edit.html'>Edit profile</a>}
      {!props.adminStatus && <a href='/login.html'>Login</a>}
    </div>
  );
}
export default IfElseComp;
// create variable IsAdmin boolean type

// depending on IsAdmin show 2 different links

// import this component to App.js

// show different links depending on prop 'admin'
