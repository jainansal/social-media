<template>
  <div class="basis-1/2 flex flex-col gap-4 overlay rounded-3xl">
    <NewPost />
    <div class="w-full rounded-3xl flex flex-row">
      <div
        class="basis-1/3 flex justify-center items-center p-2 rounded-2xl cursor-pointer text-lg hover:font-semibold"
        :class="{
          'font-semibold bg-violet-800': activeQuery === 'all',
        }"
        @click="setActiveQuery('all')"
      >
        All
      </div>
      <div
        class="basis-1/3 flex justify-center items-center p-2 rounded-2xl cursor-pointer text-lg hover:font-semibold"
        :class="{
          'font-semibold bg-violet-800': activeQuery === 'trending',
        }"
        @click="setActiveQuery('trending')"
      >
        Trending
      </div>
      <div
        class="basis-1/3 flex justify-center items-center p-2 rounded-2xl cursor-pointer text-lg hover:font-semibold"
        :class="{
          'font-semibold bg-violet-800': activeQuery === 'friends',
        }"
        @click="setActiveQuery('friends')"
      >
        Friends
      </div>
    </div>
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
  </div>
</template>

<script setup>
import { ref } from "vue";

import NewPost from "../../components/new/NewPost.vue";
import PostCard from "../../components/new/PostCard.vue";

const activeQuery = ref("all");
const setActiveQuery = (val) => {
  activeQuery.value = val;
};
</script>

<style lang="scss" scoped>
</style>
