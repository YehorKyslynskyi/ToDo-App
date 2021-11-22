import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import { addUser } from '../../store/user/actions'
import API from '../../API/userAuth'
import LoginPage from '../LoginPage/LoginPage'
import TasksPage from '../TasksPage/TasksPage'

const Routing = () => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.user)
  const history = useHistory()

  useEffect(async () => {
    if (localStorage.getItem('token')) {
      const userResponse = await API.getUser()
      const newUser = {
        ...userResponse.data.data,
      }
      console.log('setuser')
      dispatch(addUser(newUser))
      history.push('/home')
    }
  }, [])

  console.log({ user })
  return user ? (
    <Switch>
      <Route path="/home" component={TasksPage} />
      <Redirect exact from="/" to="/home" />
      <Redirect to="/404" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Redirect to="/login" />
    </Switch>
  )
}

export default Routing
