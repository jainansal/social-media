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
    v-else
    class="py-1 px-2 border-violet-400 border rounded-md text-violet-950 bg-violet-400 cursor-pointer"
  >
    Add friend
  </div>
</template>

<script setup>
const props = defineProps({
  type: String,
});
</script>

<style lang="scss" scoped>
</style>
