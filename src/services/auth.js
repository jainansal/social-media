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
    const response = await axios.get('auth/init')
    return response.data
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

const deactivate = async () => {
  console.log('Operation in production')
  // await axios.delete(`auth`);
}

export default {
  init,
  login,
  register,
  logout,
  deactivate
}
