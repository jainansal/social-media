<template>
  <div
    v-if="requests.length"
    class="basis-3/4 grid grid-cols-6 gap-4 overlay h-full rounded-3xl"
  >
    <FriendCard 
      v-for="(user,index) in requests"
      :key="index"
      :details="user"
      :isRequestCard="true"
    />
  </div>
  <div v-else class="basis-3/4 rounded-3xl text-3xl flex justify-center items-center">
    You have no requests at the moment, come back later.
  </div>
</template>

<script setup>
import { ref } from "vue";

import AppLoader from "@/components/common/AppLoader.vue";
import FriendCard from "@/components/friends/FriendCard.vue";

import userServices from "@/services/user.js";

// config
const isLoading = ref(false);

const requests = ref([]);
const getRequestsReceived = async () => {
  try {
    isLoading.value = true;
    const response = await userServices.getRequestsReceived();
    requests.value = response;
  } catch (err) {
    console.log("Error", err);
  } finally {
    isLoading.value = false;
  }
}
getRequestsReceived();
</script>

<style lang="scss" scoped>
</style>
