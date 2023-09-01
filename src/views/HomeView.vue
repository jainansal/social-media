<template>
  <AppLoader :isLoading="isLoading" />
  <div class="h-screen w-screen flex flex-col">
    <AppNavbar />
    <div class="h-full flex overflow-hidden">
      <FriendsActivityIndex />
      <div class="basis-1/2 my-6 mx-3 flex flex-col gap-4 overlay">
        <NewPost />
        <PostCard v-for="(post, index) in posts" :key="index" :details="post" />
      </div>
      <div class="basis-1/4 p-4 bg-slate-600 m-6 ml-3">
        <LabelSection label="Trending" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";

import NewPost from "@/components/common/NewPost.vue";
import PostCard from "@/components/common/PostCard.vue";
import AppLoader from "@/components/common/AppLoader.vue";
import AppNavbar from "../components/common/AppNavbar.vue";
import FriendsActivityIndex from "@/components/friends_activity/Index.vue";
import LabelSection from "@/components/common/LabelSection.vue";
import postServices from "@/services/post";

const toast = useToast();
const isLoading = ref(false);

const posts = ref([]);

const getPosts = async () => {
  try {
    isLoading.value = true;
    const response = await postServices.getAllPosts();
    posts.value = response;
  } catch (err) {
    toast.error(err.data);
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};
getPosts();
</script>

<style lang="scss" scoped>
.overlay {
  overflow: overlay;
}
</style>
