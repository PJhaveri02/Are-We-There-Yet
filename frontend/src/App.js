import { useState } from 'react';
import * as Realm from 'realm-web';
import logo from './logo.svg';
import './App.css';

// Realm app to authenticate user
const REALM_APP_ID = 'are-we-there-yet-zaqns';
export const app = new Realm.App({ id: REALM_APP_ID });

function App() {
  const [user, setUser] = useState(app.currentUser);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
