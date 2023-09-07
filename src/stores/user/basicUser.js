import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useBasicUserStore = defineStore('basicUser', () => {
  const id = ref('')
  const setID = (value) => {
    id.value = value
  }

  const pfp = ref('https://www.mintface.xyz/content/images/2021/08/QmTndiF423kjdXsNzsip1QQkBQqDuzDhJnGuJAXtv4XXiZ-1.png');
  const setPfp = (value) => {
    pfp.value = value;
  }

  const name = ref('Test User');
  const setName = (value) => {
    name.value = value;
  }

  const username = ref('testuser');
  const setUsername = (value) => {
    username.value = value
  }

  const bio = ref('test bio.');
  const setBio = (value) => {
    bio.value = value
  }

  return {
    id,
    setID,
    pfp,
    setPfp,
    name,
    setName,
    username,
    setUsername,
    bio,
    setBio
  }
})