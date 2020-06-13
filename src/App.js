import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './screens/Home';
import Detail from './screens/Detail';
import logo from './uploads/logo.png';
import './style.css';
const App = () => {
  return (
    <BrowserRouter>
           <img src={logo} />
           <ul>
        <li><Link style={{color: "white"}} to='/'>Home</Link></li>
        <li><Link style={{color: "white"}} to='/detail'>Detail</Link></li>

      </ul>

      <Switch>

        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/detail/:id'>
          <Detail />

        </Route>
      </Switch>
    </BrowserRouter>

  );
};
export default App;

