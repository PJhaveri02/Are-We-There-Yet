import React from 'react';

function UserDetail({ user, setUser }) {
  return (
    <div>
      <h1>Logged in with id: {user.id}</h1>
      <button
        onClick={async () => {
          const loggedOutUser = await user.logOut();
          setUser(loggedOutUser);
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default UserDetail;
