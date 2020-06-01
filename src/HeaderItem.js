import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

class HeaderItem extends React.Component {
    render(){
        return(
            <div className="Header-item">
                <Link to= {this.props.link}>{this.props.name}</Link>
            </div>
        )
    }
  }
  
  export default HeaderItem;