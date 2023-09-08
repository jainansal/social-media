<template>
  <AppLoader :isLoading="isLoading" />
  <div class="basis-1/2 rounded-3xl flex flex-col gap-4">
    <FriendsInput />
    <div class="grid grid-cols-4 gap-4 overlay h-full rounded-3xl">
      <FriendCard
        v-for="(friend, index) in friends"
        :key="index"
        :details="friend"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import AppLoader from "@/components/common/AppLoader.vue";
import FriendsInput from "../components/friends/FriendsInput.vue";
import FriendCard from "@/components/friends/FriendCard.vue";

import { useAuthStore } from "@/stores/auth.js";
import userServices from "@/services/user.js";

// config
const authStore = useAuthStore();
const isLoading = ref(false);

const friends = ref([]);
const getUserFriends = async () => {
  try {
    isLoading.value = true;
    const response = await userServices.getUserFriends(authStore.id);
    friends.value = response;
  } catch (err) {
    console.log("Error", err);
  } finally {
    isLoading.value = false;
  }
};
getUserFriends();
</script>

<style lang="scss" scoped>
</style>
