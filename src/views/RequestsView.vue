<template>
  <div
    v-if="requests.length"
    class="basis-3/4 grid gap-4 overlay h-full rounded-3xl grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
  >
    <FriendCard
      v-for="(user, index) in requests"
      :key="index"
      :details="user"
      :isRequestCard="true"
    />
  </div>
  <div
    v-else
    class="basis-3/4 rounded-3xl text-3xl flex justify-center items-center"
  >
    You have no requests at the moment, come back later.
  </div>
</template>

<script setup>
import { ref } from "vue";

import AppLoader from "@/components/common/AppLoader.vue";
import FriendCard from "@/components/friends/FriendCard.vue";

import { useUserStore } from "@/stores/user.js";

// config
const isLoading = ref(false);
const userStore = useUserStore();

const requests = ref(userStore.requests);
</script>

<style lang="scss" scoped></style>
