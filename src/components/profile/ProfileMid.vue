<template>
  <div class="flex flex-row gap-4">
    <div
      class="bg-zinc-800 rounded-3xl p-4 basis-1/3 justify-center items-center flex gap-2"
    >
      <span class="font-bold text-3xl text-violet-400">{{ posts }}</span>
      Posts
    </div>
    <div
      class="bg-zinc-800 rounded-3xl p-4 basis-1/3 justify-center items-center flex gap-2"
    >
      <span class="font-bold text-3xl text-violet-400">{{
        friends.length
      }}</span>
      Friends
    </div>
    <div
      class="bg-zinc-800 rounded-3xl p-4 basis-1/3 justify-center items-center flex gap-2"
    >
      Linked Accounts
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  friends: Object,
  posts: Number,
});
</script>

<style lang="scss" scoped>
</style>
