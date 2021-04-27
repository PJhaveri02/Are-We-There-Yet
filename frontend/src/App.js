import { createContext, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import * as Realm from 'realm-web';
import MapVisualiser from './components/map-visualiser/MapVisualiser';
import LoginPage from './components/sign-in/LoginPage';
import SignUp from './components/sign-in/SignUp';

// Realm app to authenticate user
const REALM_APP_ID = 'are-we-there-yet-zaqns';
export const app = new Realm.App({ id: REALM_APP_ID });
export const AuthContext = createContext(undefined);

function App() {
  const [user, setUser] = useState(app.currentUser);

  return (
    <div className='App'>
      <AuthContext.Provider value={[user, setUser]}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <LoginPage />
            </Route>

            <Route exact path='/sign-up'>
              <SignUp />
            </Route>

            <Route exact path='/home'>
              {user ? <MapVisualiser /> : <Redirect to='/' />}
            </Route>

            <Route path='*'>
              <p>page not found</p>
            </Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
