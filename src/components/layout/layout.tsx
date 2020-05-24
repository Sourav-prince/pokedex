import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
//components
import Header from './header'
import Container from './container'
import SideBar from './sidebar'
import Battle from '../battle'
//
const MainLayout = () => {
  return(
    <>
      <Header/>
      <Router>
        <SideBar/>
        <Switch>
          <Route path="/" exact component={Container}/>
          <Route path="/battle" exact component={Battle}/>
        </Switch>
      </Router>
    </>
  )
}
export default MainLayout