<template>
  <AppLoader :isLoading="isLoading" />
  <div class="basis-3/4 flex flex-col gap-4 overlay rounded-3xl">
    <NewPost />
    <div class="w-full rounded-3xl flex flex-row">
      <div
        class="basis-1/3 flex justify-center items-center p-1 rounded-2xl cursor-pointer font-responsive hover:font-semibold"
        :class="{
          'font-semibold bg-violet-800': activeQuery === 'all',
        }"
        @click="setActiveQuery('all')"
      >
        All
      </div>
      <div
        class="basis-1/3 flex justify-center items-center p-1 rounded-2xl cursor-pointer font-responsive hover:font-semibold"
        :class="{
          'font-semibold bg-violet-800': activeQuery === 'trending',
        }"
        @click="setActiveQuery('trending')"
      >
        Trending
      </div>
      <div
        class="basis-1/3 flex justify-center items-center p-1 rounded-2xl cursor-pointer font-responsive hover:font-semibold"
        :class="{
          'font-semibold bg-violet-800': activeQuery === 'friends',
        }"
        @click="setActiveQuery('friends')"
      >
        Friends
      </div>
    </div>
    <PostCard v-for="post in posts" :key="post._id" :details="post" />
    <div
      class="rounded-2xl p-2 flex justify-center border mb-2 cursor-pointer border-zinc-700 hover:border-violet-500 hover:bg-violet-500"
    >
      Show more
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import AppLoader from "@/components/common/AppLoader.vue";
import NewPost from "../components/posts/NewPost.vue";
import PostCard from "../components/posts/PostCard.vue";

import postServices from "@/services/post.js";

// Config
const isLoading = ref(false);

// Main
const activeQuery = ref("all");
const setActiveQuery = (val) => {
  activeQuery.value = val;
  init();
};

const posts = ref([]);
const init = async () => {
  if (activeQuery.value === "all") {
    console.log("all");
    try {
      isLoading.value = true;
      const response = await postServices.getAllPosts();
      posts.value = response;
    } catch (error) {
      console.log("Error", error);
    } finally {
      isLoading.value = false;
    }
  }

  if (activeQuery.value === "trending") {
    console.log("trending");
    try {
      isLoading.value = true;
      const response = await postServices.getTrendingPosts();
      posts.value = response;
    } catch (error) {
      console.log("Error", error);
    } finally {
      isLoading.value = false;
    }
  }

  if (activeQuery.value === "friends") {
    console.log("friends");
    try {
      isLoading.value = true;
      const response = await postServices.getFriendsPosts();
      posts.value = response;
    } catch (error) {
      console.log("Error", error);
    } finally {
      isLoading.value = false;
    }
  }
};
init();
</script>

<style lang="scss" scoped></style>
