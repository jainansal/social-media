import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostsStore = defineStore('posts', () => {
  const initAll = ref(false);
  const setInitAll = () => {
    initAll.value = true;
  }

  const allPosts = ref([]);
  const setAllPosts = (value) => {
    allPosts.value = value;
  }

  const initTrending = ref(false);
  const setInitTrending = () => {
    initTrending.value = true;
  }

  const trendingPosts = ref([]);
  const setTrendingPosts = (value) => {
    trendingPosts.value = value;
  }
  const initFriends = ref(false);
  const setInitFriends = () => {
    initFriends.value = true;
  }

  const friendsPosts = ref([]);
  const setFriendsPosts = (value) => {
    friendsPosts.value = value;
  }

  return {
    initAll,
    setInitAll,
    allPosts,
    setAllPosts,
    initTrending,
    setInitTrending,
    trendingPosts,
    setTrendingPosts,
    initFriends,
    setInitFriends,
    friendsPosts,
    setFriendsPosts,
  }
})
