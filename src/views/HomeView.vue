<template>
  <AppLoader :isLoading="isLoading" />
  <div class="basis-1/2 flex flex-col gap-4 overlay rounded-3xl">
    <NewPost />
    <div class="w-full rounded-3xl flex flex-row">
      <div
        class="basis-1/3 flex justify-center items-center p-2 rounded-2xl cursor-pointer text-lg hover:font-semibold"
        :class="{
          'font-semibold bg-violet-800': activeQuery === 'all',
        }"
        @click="setActiveQuery('all')"
      >
        All
      </div>
      <div
        class="basis-1/3 flex justify-center items-center p-2 rounded-2xl cursor-pointer text-lg hover:font-semibold"
        :class="{
          'font-semibold bg-violet-800': activeQuery === 'trending',
        }"
        @click="setActiveQuery('trending')"
      >
        Trending
      </div>
      <div
        class="basis-1/3 flex justify-center items-center p-2 rounded-2xl cursor-pointer text-lg hover:font-semibold"
        :class="{
          'font-semibold bg-violet-800': activeQuery === 'friends',
        }"
        @click="setActiveQuery('friends')"
      >
        Friends
      </div>
    </div>
    <PostCard v-for="(post, index) in posts" :key="index" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import AppLoader from "@/components/common/AppLoader.vue";
import NewPost from "../components/posts/NewPost.vue";
import PostCard from "../components/posts/PostCard.vue";

import { usePostsStore } from "@/stores/posts.js";
import postServices from "@/services/post.js";

// Config
const postsStore = usePostsStore();
const isLoading = ref(false);

// Main
const activeQuery = ref("all");
const setActiveQuery = (val) => {
  activeQuery.value = val;
  init();
};

const init = async () => {
  if (activeQuery.value === "all" && !postsStore.initAll) {
    console.log("all");
    try {
      isLoading.value = true;
      const response = await postServices.getAllPosts();
      postsStore.setAllPosts(response);
      postsStore.setInitAll();
      console.log(response);
    } catch (error) {
      console.log("Error", error);
    } finally {
      isLoading.value = false;
    }
  }

  if (activeQuery.value === "trending" && !postsStore.initTrending) {
    console.log("trending");
    try {
      isLoading.value = true;
      const response = await postServices.getTrendingPosts();
      postsStore.setTrendingPosts(response);
      postsStore.setInitTrending();
    } catch (error) {
      console.log("Error", error);
    } finally {
      isLoading.value = false;
    }
  }

  if (activeQuery.value === "friends" && !postsStore.initFriends) {
    console.log("friends");
    try {
      isLoading.value = true;
      const response = await postServices.getFriendsPosts();
      postsStore.setFriendsPosts(response);
      postsStore.setInitFriends();
    } catch (error) {
      console.log("Error", error);
    } finally {
      isLoading.value = false;
    }
  }
};
init();

const posts = ref([]);
if (activeQuery.value === "all") {
  posts.value = postsStore.allPosts;
} else if (activeQuery.value === "trending") {
  posts.value = postsStore.trendingPosts;
} else {
  posts.value = postsStore.friendsPosts;
}
</script>

<style lang="scss" scoped>
</style>
