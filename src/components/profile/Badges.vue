<template>
  <div
    class="py-1 px-2 border-violet-400 border rounded-md text-violet-400 cursor-pointer"
    v-if="type === 'friends'"
  >
    Friends
  </div>
  <div
    v-else-if="type === 'sent'"
    class="py-1 px-2 border-violet-400 border rounded-md text-violet-400 cursor-pointer"
  >
    Requested
  </div>
  <div v-else-if="type === 'received'" class="flex gap-2">
    <div
      class="py-1 px-2 text-center border border-green-500 rounded-md text-green-500 cursor-pointer hover:bg-green-500 hover:text-white flex items-center gap-1"
      @click="acceptRequest"
    >
      <i class="fa-solid fa-check"></i> Accept
    </div>
    <div
      class="flex gap-1 items-center py-1 px-2 text-center border border-red-600 rounded-md text-red-600 cursor-pointer hover:bg-red-600 hover:text-white"
      @click="rejectRequest"
    >
      <i class="fa-solid fa-xmark"></i> Reject
    </div>
  </div>
  <div
    v-else-if="type === 'none'"
    class="py-1 px-2 border-violet-400 border rounded-md text-violet-950 bg-violet-400 cursor-pointer"
  >
    Add friend
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useAuthStore } from "@/stores/auth.js";

const authStore = useAuthStore();
const props = defineProps({
  advanced: Object,
  id: String,
});

const type = ref("");
if (props.advanced.friends) {
  if (props.advanced.friends.includes(props.id)) {
    type.value = "friends";
  } else if (props.advanced.sent.includes(props.id)) {
    type.value = "sent";
  } else if (props.advanced.received.includes(props.id)) {
    type.value = "received";
  } else if (id !== authStore.id) {
    type.value = "none";
  }
}
</script>

<style lang="scss" scoped>
</style>
