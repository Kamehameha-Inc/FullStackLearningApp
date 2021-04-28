import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import './App.css';
import Home from './components/routes/home.js'


const App = props => (
  <React.Fragment>
    <h3>{props.location.state ? props.location.state.msg : null}</h3>
    <Route exact path='/' component={Home} />
  </React.Fragment>
)

export default withRouter(App)

