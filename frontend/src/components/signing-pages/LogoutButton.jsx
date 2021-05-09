import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { AuthContext } from '../../App';

function LogoutButton() {
  const [user, setUser] = useContext(AuthContext);

  return (
    <Button style={{
      width: "100%",
      position: "relative",
      bottom: "0",
    }}
      onClick={async () => {
        const loggedOutUser = await user.logOut();
        setUser(loggedOutUser);
      }}
      variant='contained'
    >
      Log Out
    </Button>
  );
}

export default LogoutButton;
