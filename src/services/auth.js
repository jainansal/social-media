import { useAuthStore } from "../stores/auth"
import { useUserStore } from "../stores/user"

const auth = useAuthStore()
const user = useUserStore()

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
  register,
  logout
}
