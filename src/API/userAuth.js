import axios from 'axios'

const login = (data) => axios.post('https://reqres.in/api/login', data)
const getUser = () => axios.get('https://reqres.in/api/users/4')

export default { login, getUser }
