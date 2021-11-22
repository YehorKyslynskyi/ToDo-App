import { ACTION_TYPES } from './actionTypes'
import API from '../../API/userAuth'

// ============ Actions ========
export const addUser = (payload) => ({
  type: ACTION_TYPES.ADD_USER,
  payload,
})

// ============ Thunks =========

export const loginUser = (data, callback) => async (dispatch) => {
  try {
    const responseLogin = await API.loginUser(data)
    console.log({ responseLogin })

    localStorage.setItem('token', responseLogin.data.token)

    const userResponse = await API.getUser()
    const newUser = {
      ...userResponse.data.data,
    }
    dispatch(addUser(newUser))
    callback()
  } catch (e) {
    console.log(e)
  }
}
