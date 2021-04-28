import React from 'react'
import { withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

const App = props => (
  <React.Fragment>
    <h3>{props.location.state ? props.location.state.msg : null}</h3>
  </React.Fragment>
)

export default withRouter(App)

