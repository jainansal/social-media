import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore('user', () => {
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const fullName = computed(() => firstName.value + ' ' + lastName.value)

  const setFirstName = (value) => {
    firstName.value = value
  }
  const setLastName = (value) => {
    lastName.value = value
  }
  const setEmail = (value) => {
    email.value = value
  }
  const reset = () => {
    firstName.value=''
    lastName.value=''
    email.value=''
  }

  return {
    firstName,
    lastName,
    email,
    fullName,
    setFirstName,
    setLastName, 
    setEmail,
    reset
  }
})
