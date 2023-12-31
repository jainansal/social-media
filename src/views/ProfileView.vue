<template>
  <AppLoader :isLoading="isLoading" />
  <UserFriends
    v-if="showFriends"
    :friends="userFriends"
    @closeModal="toggleFriendsModal"
  />
  <div class="basis-3/4 rounded-3xl flex flex-col h-full gap-4 overlay">
    <ProfileHeader :details="basicDetails" :advanced="advancedDetails" />
    <ProfileMid
      :friends="userFriends"
      :posts="userPosts.length"
      @openModal="toggleFriendsModal"
    />
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
import UserFriends from "../components/modals/UserFriends.vue";

import userServices from "@/services/user.js";
import { useAuthStore } from "@/stores/auth.js";

// config
const route = useRoute();
const authStore = useAuthStore();
const isLoading = ref(false);

const userPosts = ref([]);
const userFriends = ref([]);
const basicDetails = ref({});
const advancedDetails = ref({});
const showFriends = ref(false);
const id = route.params.id || authStore.id;

const getBasicDetails = async () => {
  try {
    const response = await userServices.getBasicDetails(id);
    basicDetails.value = response;
  } catch (error) {
    console.log("error", error);
  }
};

const getAdvancedDetails = async () => {
  try {
    const response = await userServices.getAdvancedDetails();
    advancedDetails.value = response;
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
  await getAdvancedDetails();
  await getUserPosts();
  await getUserFriends();
  isLoading.value = false;
};

getDetails();

const toggleFriendsModal = () => {
  showFriends.value = !showFriends.value;
};
</script>

<style lang="scss" scoped>
</style>
