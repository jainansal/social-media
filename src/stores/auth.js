import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
  const init = ref(false);
  const setInit = () => {
    init.value = true;
  }

  const id = ref('');
  const setID = (value) => {
    id.value = value
  }

  return {
    init,
    setInit,
    id,
    setID
  };
})
