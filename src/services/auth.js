import axios from "axios"

import { useAuthStore } from "../stores/auth"
import { useUserStore } from "../stores/user"

const auth = useAuthStore()
const user = useUserStore()

const login = async (data) => {
  const response = await axios.post('auth/login', {
    email: data.email,
    password: data.password
  })
  auth.setLoggedIn(true)
  auth.setUserId(response.data._id)
  user.setFirstName(response.data.firstName)
  user.setLastName(response.data.lastName)
  user.setEmail(response.data.email)
}

const init = async () => {
  try {
    const response = await axios.get('auth/init')
    auth.setLoggedIn(true)
    auth.setUserId(response.data._id)
    user.setFirstName(response.data.firstName)
    user.setLastName(response.data.lastName)
    user.setEmail(response.data.email)
  } catch (err) {
    console.log(err)
    auth.setLoggedIn(false)
    auth.setUserId(null)
    user.setFirstName(null)
    user.setLastName(null)
    user.setEmail(null)
    throw err
  }
}

const register = async (data) => {
  console.log(data)
  localStorage.setItem('userId', 1);
  auth.setLoggedIn(true)
  auth.setUserId(1)
  user.setFirstName(data.firstName)
  user.setLastName(data.lastName)
  user.setEmail(data.email)
  console.log(user)
}

const logout = async () => {
  localStorage.removeItem('userId');
  user.reset();
  auth.reset();
}

export default {
  init,
  login,
  register,
  logout
}
