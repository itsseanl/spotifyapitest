import logo from './spotify_logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, { useState } from 'react';



function App() {

  const [signin, setSignin] = useState(false);



  return (
  
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Spotify Taste Analyzer
        </p>
        <nav>
          <ul>
            <li>
              <Link className="home-link" to="/">home</Link>
            </li>
            <li> {
              signin ? (    <Link className="account-link" to="/account">sign out</Link>
              ) : (<a href="">Sign In</a>)
              }

            </li>
          </ul>
        </nav>
      </header>

    <Switch>
      <Route path="/">        
        <Home />
      </Route>
      <Route path="/acount">        
        <Account />
      </Route>
    </Switch>
  </div>
  </Router>
  
  );
}

function Home() {
  return (
    <div className="home">
  <h2>Home</h2>

    </div>
  );
}
function Account() {
  return (
    <div className="home">
  <h2>Your Account</h2>

    </div>
  );
}
export default App;
