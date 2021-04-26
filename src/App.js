import logo from './spotify_logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';



function App() {

  const [code, setCode] = useState(false);

useEffect(function(){
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('code');
  console.log(myParam);
  setCode(myParam);

},[]);

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
              code ? (    <Link className="account-link" to="/account">account</Link>
              ) : (<a href="https://accounts.spotify.com/authorize?client_id=21bbeefc238c413f98291838323e6d6d&response_type=code&redirect_uri=http://167.172.22.108:3000/account&scope=user-read-private&state=34fFs29kd10" onClick={getAuth}>Sign In</a>)
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
async function getAuth(){
  console.log('clicked');
  //  fetch('https://accounts.spotify.com/authorize?client_id=21bbeefc238c413f98291838323e6d6d&response_type=code&redirect_uri=http://167.172.22.108:3000&scope=user-read-private&state=34fFs29kd10')
  //  .then(response => response.json())
  //  .then(data => console.log(data));
}
export default App;
