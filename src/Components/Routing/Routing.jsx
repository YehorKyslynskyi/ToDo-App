import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage'
import TasksPage from '../TasksPage/TasksPage'

const Routing = () => (
  <Switch>
    <Route exact path="/" component={TasksPage} />
    <Route path="/login" component={LoginPage} />
    <Redirect to="/" />
  </Switch>
)

export default Routing
