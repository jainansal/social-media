<template>
  <AppLoader :isLoading="isLoading" />
  <div class="basis-1/2 rounded-3xl flex flex-col h-full gap-4 overlay">
    <ProfileHeader :details="basicDetails" />
    <ProfileMid :friends="userFriends" :posts="userPosts.length" />
    <div class="h-full gap-4 flex flex-col">
      <PostCard
        v-for="(post, index) in userPosts"
        :key="index"
        :details="post"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

import AppLoader from "@/components/common/AppLoader.vue";
import ProfileHeader from "../components/profile/ProfileHeader.vue";
import ProfileMid from "../components/profile/ProfileMid.vue";
import PostCard from "@/components/posts/PostCard.vue";

import userServices from "@/services/user.js";
import { useAuthStore } from "@/stores/auth.js";

// config
const route = useRoute();
const authStore = useAuthStore();
const isLoading = ref(false);

const userPosts = ref([]);
const userFriends = ref([]);
const basicDetails = ref({});
const id = route.params.id || authStore.id;

const getBasicDetails = async () => {
  try {
    const response = await userServices.getBasicDetails(id);
    basicDetails.value = response;
  } catch (error) {
    console.log("error", error);
  }
};

const getUserPosts = async () => {
  try {
    const response = await userServices.getUserPosts(id);
    userPosts.value = response;
  } catch (err) {
    console.log("Error", err);
  }
};

const getUserFriends = async () => {
  try {
    const response = await userServices.getUserFriends(id);
    userFriends.value = response;
  } catch (err) {
    console.log("Error", err);
  }
};

const getDetails = async () => {
  isLoading.value = true;
  await getBasicDetails();
  await getUserPosts();
  await getUserFriends();
  isLoading.value = false;
};

getDetails();
</script>

<style lang="scss" scoped>
</style>
