import { defineStore } from "pinia";
import { ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast()

export const useAuthStore = defineStore('auth', () => {
  const loggedIn = ref(false)
  const userId = ref(null)

  const initAuth = () => {
    if (localStorage.getItem('userId')) {
      try {
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

  return { loggedIn, userId, initAuth };
})
