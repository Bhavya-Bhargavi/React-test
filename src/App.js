import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Movies from './Movies/Movies.jsx';
import Calculator from './calculator/calculator.jsx';
import Count from './calculator/count.jsx';
import Childtoparent from './calculator/childtoparent.jsx';

function App() {
  const hello = <h1> hi world</h1>;
  return (
    
   <div className="router">
     {hello}
     <Childtoparent/>
    <Router>
      <div className="links">
      <nav>
          <ul class="ul-list">
            <li>
              <Link to="/Movies">Movies</Link>
            </li>
            <li>
              <Link to="/Count">Count</Link>
            </li>
            <li>
              <Link to="/Calculator">Calculator</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
      <Route  path="/Movies" component={Movies}/>
      <Route  path="/Count" component={Count}/>
      <Route  path="/Calculator" component={Calculator}/>
      </Switch>
     </Router>
     </div>
  );
}

export default App;
