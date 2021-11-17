import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { addUser } from '../../store/user/actions'
import API from '../../API/userAuth'
import LoginPage from '../LoginPage/LoginPage'
import TasksPage from '../TasksPage/TasksPage'

const Routing = () => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.user)

  useEffect(async () => {
    if (localStorage.getItem('token')) {
      const userResponse = await API.getUser()
      const newUser = {
        ...userResponse.data.data,
        token: localStorage.getItem('token'),
      }
      dispatch(addUser(newUser))
    }
  }, [localStorage.getItem('token')])

  return (
    <Switch>
      {user ? (
        <>
          <Route exact path="/home" component={TasksPage} />
          <Redirect to="/home" />
        </>
      ) : (
        <>
          <Route path="/login" component={LoginPage} />
          <Redirect to="/login" />
        </>
      )}
    </Switch>
  )
}

export default Routing
