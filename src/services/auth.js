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
    const response = await axios.get('auth/init')
    return response
  } catch (err) {
    console.log(err)
    throw err
  }
}

const register = async (data) => {
  const response = await axios.post('auth/register', {
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    password: data.password
  })
  return response
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
