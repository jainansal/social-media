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
  console.log(data)
}

const logout = async () => {
  localStorage.removeItem('userId');
}

export default {
  init,
  login,
  register,
  logout
}
