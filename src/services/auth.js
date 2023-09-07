import axios from "axios"

const login = async (data) => {
  const response = await axios.post('auth/login', {
    email: data.email,
    password: data.password
  })
  return response
}

const init = async () => {
  try {
    await axios.get('auth/init')
  } catch (error) {
    throw error
  }
}

const register = async (data) => {
  await axios.post('auth/register', {
    name: data.name,
    username: data.username,
    password: data.password
  })
}

const logout = async () => {
  await axios.post('auth/logout')
}

export default {
  init,
  login,
  register,
  logout
}
