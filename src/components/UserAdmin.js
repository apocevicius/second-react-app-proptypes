// UserAdmin.js
const user = 'Hello I am a user';
const admin = 'I can create edit update and delete';

const isUserAdmin = true;
// depending on isUserAdmin show heading with text from variables

function UserAdmin() {
  return (
    <article>
      {isUserAdmin && <h2>{admin}</h2>}
      {!isUserAdmin && <h2>{user}</h2>}
    </article>
  );
}
export default UserAdmin;
