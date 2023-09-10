import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
  const id = ref('');
  const setID = (value) => {
    id.value = value
  }

  const name = ref('');
  const setName = (value) => {
    name.value = value
  }

  const username = ref('');
  const setUsername = (value) => {
    username.value = value
  }

  const pfp = ref('');
  const setPfp = (value) => {
    pfp.value = value
  }

  const bio = ref('');
  const setBio = (value) => {
    bio.value = value
  }

  const posts = ref([]);
  const setPosts = (value) => {
    posts.value = value;
  }

  const hasRequests = ref(false);
  const setHasRequests = () => {
    hasRequests.value = true;
  }

  return {
    id,
    setID,
    name,
    setName,
    username,
    setUsername,
    pfp,
    setPfp,
    bio,
    setBio,
    posts,
    setPosts,
    hasRequests,
    setHasRequests
  }
})
