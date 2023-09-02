import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostsStore = defineStore('posts', () => {
  const init = ref(false);
  const posts = ref([]);

  const setInit = () => {
    init.value = true;
  }
  const setPosts = (value) => {
    posts.value = value;
  }

  return {
    init,
    setInit,
    posts,
    setPosts
  }
})
