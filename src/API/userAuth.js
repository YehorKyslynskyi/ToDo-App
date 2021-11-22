import axios from 'axios'

const loginUser = (data) => axios.post('https://reqres.in/api/login', data)

const getUser = () => axios.get('https://reqres.in/api/users/4')

export default { loginUser, getUser }
