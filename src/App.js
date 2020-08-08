import React,{ Fragment } from 'react';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const  App = () => {
  return (
    <Router>

    <Fragment>
      <Navbar/>
      <Switch>
      <Route path="/" component={Home} />
      </Switch>
    </Fragment>
    </Router>
  );
}

export default App;
