import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore('user', () => {
  const profileImg = ref('https://www.mintface.xyz/content/images/2021/08/QmTndiF423kjdXsNzsip1QQkBQqDuzDhJnGuJAXtv4XXiZ-1.png');
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const fullName = computed(() => firstName.value + ' ' + lastName.value)
  const posts = ref([])

  const setFirstName = (value) => {
    firstName.value = value
  }
  const setLastName = (value) => {
    lastName.value = value
  }
  const setEmail = (value) => {
    email.value = value
  }
  const setProfileImg = (value) => {
    profileImg.value = value
  }
  const setPosts = (value) => {
    posts.value = value
  }
  const reset = () => {
    firstName.value = ''
    lastName.value = ''
    email.value = ''
  }

  return {
    profileImg,
    firstName,
    lastName,
    email,
    fullName,
    posts,
    setFirstName,
    setLastName,
    setEmail,
    setProfileImg,
    setPosts,
    reset
  }
})
