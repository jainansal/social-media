import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore('user', () => {
  const firstName = ref('Ansal')
  const lastName = ref('Jain')
  const fullName = computed(() => firstName.value + ' ' + lastName.value)
  const changeNameTo = (newName) => {
    firstName.value = newName
  }

  return { firstName, lastName, fullName, changeNameTo }
})
