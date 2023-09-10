<template>
  <AppLoader :isLoading="isLoading" />
  <div class="basis-3/4 rounded-3xl flex flex-col gap-4">
    <FriendsInput />
    <div
      v-if="friends.length"
      class="grid grid-cols-4 gap-4 overlay h-full rounded-3xl"
    >
      <FriendCard
        v-for="(friend, index) in friends"
        :key="index"
        :details="friend"
      />
    </div>
    <div v-else class="text-xl flex justify-center">
      You have no friends at the moment, try reaching out to people.
    </div>
    <hr />
    <div class="grid grid-cols-4 gap-4 overlay h-full rounded-3xl">
      <FriendCard
        v-for="(user, index) in allUsers"
        :key="index"
        :details="user"
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

const allUsers = ref([]);
const getAllUsers = async () => {
  const response = await userServices.getAllUsers();
  allUsers.value = response.filter(
    (item) => item._id !== authStore.id && !friends.value.includes(item._id)
  );
};

const init = async () => {
  isLoading.value = true;
  await getUserFriends();
  await getAllUsers();
  isLoading.value = false;
};
init();
</script>

<style lang="scss" scoped>
</style>
