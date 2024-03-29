import { useLoadScript } from '@react-google-maps/api';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import * as Realm from 'realm-web';
import Logo from './components/logo/Logo.jsx';
import LoginPage from './components/signing-pages/LoginPage';
import SignUp from './components/signing-pages/SignUp';
import Homepage from './pages/Homepage';

// Realm app to authenticate user
const REALM_APP_ID = 'are-we-there-yet-zaqns';
export const app = new Realm.App({ id: REALM_APP_ID });
export const AuthContext = createContext(undefined);

function App() {
  const [user, setUser] = useState(app.currentUser);

  const libraries = ['places', 'directions'];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading...';

  return (
    <div>
      <AuthContext.Provider value={[user, setUser]}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Logo />
              <LoginPage />
            </Route>

            <Route exact path='/sign-up'>
              <Logo />
              <SignUp />
            </Route>

            <Route exact path='/home'>
              {user ? (
                <div>
                  <Homepage />
                </div>
              ) : (
                <Redirect to='/' />
              )}
            </Route>

            <Route path='*'>
              <p>404 Page not Found</p>
            </Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
