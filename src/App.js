//import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderItem from './HeaderItem'
import FieldandBar from './FieldandPlayers/FieldandBar'
import Home from './Home'
//import Draggable from 'react-draggable'
//import Draggable from './Draggable'
import{ BrowserRouter as Router,
  Switch,
  Link,
  Route} from 'react-router-dom'

var React = require('react');

var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');



function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-header">
          <HeaderItem name="Home" link="/"/>
          <HeaderItem name="FieldandBar" link="/FieldandBar"/>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/FieldandBar" component={FieldandBar} />
        </Switch>
      </div>
    </Router>
      
  );
}

export default App;
