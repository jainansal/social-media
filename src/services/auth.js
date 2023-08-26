import axios from "axios"

import { useAuthStore } from "../stores/auth"
import { useUserStore } from "../stores/user"

const auth = useAuthStore()
const user = useUserStore()

const login = async (data) => {
  console.log(data.email)
  const response = await axios.post('auth/login', {
    email: data.email,
    password: data.password
  })
  console.log(response)
  return response
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
  login,
  register,
  logout
}
