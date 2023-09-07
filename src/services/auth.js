import axios from "axios"

const login = async (data) => {
  try {
    await axios.post('auth/login', {
      username: data.username,
      password: data.password
    })
  } catch (error) {
    throw error
  }
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
