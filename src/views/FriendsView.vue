<template>
  <AppLoader :isLoading="isLoading" />
  <div class="basis-3/4 rounded-3xl flex flex-col gap-4 overlay">
    <UserSearch @search="searchUser" />
    <div
      v-if="friends.length"
      class="grid gap-4 rounded-3xl grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
    >
      <FriendCard
        v-for="(friend, index) in friends"
        :key="index"
        :details="friend"
        :isFriend="true"
      />
    </div>
    <div v-else class="text-xl flex justify-center">
      You have no friends at the moment, try reaching out to people.
    </div>
    <hr />
    <div
      class="grid gap-4 rounded-3xl grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
    >
      <FriendCard
        v-for="user in allUsers"
        :key="user._id"
        :details="user"
        :isRequestCard="received.filter((item) => item._id === user._id).length"
        :isSentCard="sent.includes(user._id)"
        :toSkip="friends.filter((item) => item._id === user._id).length"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import AppLoader from "@/components/common/AppLoader.vue";
import UserSearch from "../components/friends/UserSearch.vue";
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

const received = ref([]);
const getRequestsReceived = async () => {
  try {
    const response = await userServices.getRequestsReceived();
    received.value = response;
  } catch (err) {
    console.log("Error", err);
  }
};

const sent = ref([]);
const getRequestsSent = async () => {
  try {
    const response = await userServices.getRequestsSent();
    sent.value = response;
  } catch (err) {
    console.log("Error", err);
  }
};

const init = async () => {
  isLoading.value = true;
  await getUserFriends();
  await getRequestsReceived();
  await getRequestsSent();
  await getAllUsers();
  isLoading.value = false;
};
init();

const searchUser = async (data) => {
  try {
    isLoading.value = true;
    const response = await userServices.searchUser(data);
    allUsers.value = response;
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
