import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginLayer from '../LoginLayer/LoginLayer'
import TasksPage from '../TasksPage/TasksPage'

const Routing = () => (
  <Switch>
    <Route exact path="/" component={TasksPage} />
    <Route path="/login" component={LoginLayer} />
    <Redirect to="/" />
  </Switch>
)

export default Routing
