import { useState } from "react";
import * as Realm from 'realm-web';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import LoginPage from "./components/sign-in/LoginPage";
import SignUp from "./components/sign-in/SignUp";

// Realm app to authenticate user
const REALM_APP_ID = 'are-we-there-yet-zaqns';
export const app = new Realm.App({ id: REALM_APP_ID });

function App() {
  // Uncomment below line once React Routing is done
  const [user, setUser] = useState(app.currentUser);

  return (
    <div className='App'>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>

          <Route exact path="/sign-up">
            <SignUp />
          </Route>

          <Route exact path="/home">
            {user ? <p>home page</p> : <Redirect to="/" /> }
          </Route>

          <Route path="*">
            <p>
              page not found
            </p>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
