import { createContext, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import * as Realm from 'realm-web';
import MapVisualiser from './components/map-visualiser/MapVisualiser';
import LoginPage from './components/signing-pages/LoginPage';
import SignUp from './components/signing-pages/SignUp';
import Trip from './components/Trip';
import { useLoadScript } from '@react-google-maps/api';
import Logo from './components/logo/Logo.jsx';

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
                  <div>
                    <Trip />
                  </div>
                  <div>
                    <MapVisualiser />
                  </div>
                </div>
              ) : (
                <Redirect to='/' />
              )}
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
