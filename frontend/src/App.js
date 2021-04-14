import { useState } from "react";
import * as Realm from "realm-web";
import Login from "./components/sign-in/Login";
import UserDetail from "./components/sign-in/UserDetail";

// Realm app to authenticate user
const REALM_APP_ID = "are-we-there-yet-zaqns";
export const app = new Realm.App({ id: REALM_APP_ID });

function App() {
  const [user, setUser] = useState(app.currentUser);

  return (
    <div>
      {user ? (
        <UserDetail user={user} setUser={setUser} />
      ) : (
        <Login
          setUser={setUser}
          email="testuser@tesing.com"
          password="testing123"
        />
      )}
    </div>
  );
}

export default App;
