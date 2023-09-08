<template>
  <AppLoader :isLoading="isLoading" />
  <div class="basis-1/2 rounded-3xl flex flex-col h-full gap-4">
    <ProfileHeader />
    <ProfileMid :friends="userFriends" :posts="userPosts.length" />
    <PostCard v-for="(post, index) in userPosts" :key="index" :details="post" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import AppLoader from "@/components/common/AppLoader.vue";
import ProfileHeader from "../components/profile/ProfileHeader.vue";
import ProfileMid from "../components/profile/ProfileMid.vue";
import PostCard from "@/components/posts/PostCard.vue";

import userServices from "@/services/user.js";
import { useAuthStore } from "@/stores/auth.js";

// config
const authStore = useAuthStore();
const isLoading = ref(false);

const userPosts = ref([]);
const userFriends = ref([]);

const getUserPosts = async () => {
  try {
    const response = await userServices.getUserPosts(authStore.id);
    userPosts.value = response;
  } catch (err) {
    console.log("Error", err);
  }
};

const getUserFriends = async () => {
  try {
    const response = await userServices.getUserPosts(authStore.id);
    userPosts.value = response;
  } catch (err) {
    console.log("Error", err);
  }
};

const getDetails = async () => {
  isLoading.value = true;
  await getUserPosts();
  await getUserFriends();
  isLoading.value = false;
};

getDetails();
</script>

<style lang="scss" scoped>
</style>
