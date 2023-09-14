<template>
  <div class="flex flex-row gap-4">
    <div
      class="bg-zinc-800 rounded-3xl p-1 basis-1/2 justify-center items-center flex gap-2 lg:p-2"
    >
      <span class="font-bold text-3xl text-violet-400">{{ posts }}</span>
      Posts
    </div>
    <div
      class="bg-zinc-800 rounded-3xl p-1 basis-1/2 justify-center items-center flex gap-2 cursor-pointer lg:p-2"
      @click="showFriendsModal"
    >
      <span class="font-bold text-3xl text-violet-400">{{
        friends.length
      }}</span>
      Friends
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["openModal"]);
const props = defineProps({
  friends: Object,
  posts: Number,
});

const showFriendsModal = () => {
  emits("openModal");
};
</script>

<style lang="scss" scoped>
</style>
