import { useState } from "react";
import * as Realm from "realm-web";
import LoginPage from "./components/sign-in/LoginPage.jsx";
import UserDetail from "./components/sign-in/UserDetail.jsx";

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
        <LoginPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
