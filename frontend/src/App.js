import { useState } from "react";
import * as Realm from "realm-web";
import LoginPage from "./components/sign-in/LoginPage.jsx";
import UserDetail from "./components/sign-in/UserDetail.jsx";
import SignUp from "./components/sign-in/SignUp.jsx";
import { Switch } from "@material-ui/core";

// Realm app to authenticate user
const REALM_APP_ID = "are-we-there-yet-zaqns";
export const app = new Realm.App({ id: REALM_APP_ID });

function App() {
  const [user, setUser] = useState(app.currentUser);
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Switch
        checked={checked}
        onChange={() => setChecked(!checked)}
        name="checkA"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      {user ? (
        <UserDetail user={user} setUser={setUser} />
      ) : checked ? (
        <SignUp />
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
