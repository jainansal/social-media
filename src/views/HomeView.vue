<template>
  <AppLoader :isLoading="isLoading" />
  <div class="h-screen w-screen flex flex-col">
    <AppNavbar />
    <div class="h-full flex overflow-hidden">
      <FriendsActivityIndex />
      <PostSection :posts="posts" :withDetails="true" />
      <div class="basis-1/4 p-4 bg-slate-600 m-6 ml-3">
        <LabelSection label="Trending" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { storeToRefs } from "pinia";

import NewPost from "@/components/common/NewPost.vue";
import PostCard from "@/components/common/PostCard.vue";
import AppLoader from "@/components/common/AppLoader.vue";
import AppNavbar from "../components/common/AppNavbar.vue";
import FriendsActivityIndex from "@/components/friends_activity/Index.vue";
import LabelSection from "@/components/common/LabelSection.vue";
import PostSection from "@/components/common/PostSection.vue";
import postServices from "@/services/post";
import { usePostsStore } from "@/stores/posts";

const postsStore = usePostsStore();
const { posts, init } = storeToRefs(postsStore);
const { setPosts, setInit } = postsStore;
const toast = useToast();
const isLoading = ref(false);

const getPosts = async () => {
  try {
    console.log('...fetching posts...')
    isLoading.value = true;
    const response = await postServices.getAllPosts();
    setPosts(response);
  } catch (err) {
    toast.error(err.data);
    console.log(err);
  } finally {
    isLoading.value = false;
    setInit();
  }
};
if (!init.value) {
  getPosts();
}
</script>

<style lang="scss" scoped>
</style>
