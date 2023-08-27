import { defineStore } from "pinia";
import { ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast()

export const useAuthStore = defineStore('auth', () => {
  const init = ref(false);
  const loggedIn = ref(false)
  const userId = ref(null)

  const initAuth = () => {
    if (localStorage.getItem('userId')) {
      try {
        console.log(loggedIn.value)
        loggedIn.value = true
        userId.value = localStorage.getItem('userId')
        toast.success("Welcome back")
      } catch (err) {
        localStorage.removeItem('userId')
        loggedIn.value = false
        toast.warning("You've been logged out!")
      }
    }
  }

  const setInit = (value) => {
    init.value = value
  }
  const setLoggedIn = (value) => {
    loggedIn.value = value
  }
  const setUserId = (value) => {
    userId.value = value
  }
  const reset = () => {
    loggedIn.value=false
    userId.value=null
  }

  return {
    init,
    loggedIn,
    userId,
    initAuth,
    setInit,
    setLoggedIn,
    setUserId,
    reset
  };
})
