<template>
  <div
    v-if="requests"
    class="basis-1/2 grid grid-cols-4 gap-4 overlay h-full rounded-3xl"
  >
    <FriendCard :isRequestCard="true" />
    <FriendCard :isRequestCard="true" />
  </div>
  <div v-else class="basis-1/2 rounded-3xl text-3xl flex justify-center items-center">
    You have no requests at the moment, come back later.
  </div>
</template>

<script setup>
import { ref } from "vue";

import FriendCard from "@/components/friends/FriendCard.vue";

const requests = ref(1);
</script>

<style lang="scss" scoped>
</style>
