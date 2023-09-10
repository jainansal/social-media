<template>
  <div class="basis-1/2 my-6 mx-3 flex flex-col gap-4 overlay">
    <NewPost />
    <template v-if="withDetails">
      <PostCard v-for="(post, index) in posts" :key="index" :details="post" />
    </template>
    <template v-else>
      <PostCard v-for="(post, index) in posts" :key="index" :postId="post" />
    </template>
  </div>
</template>

<script setup>
import NewPost from "@/components/common/NewPost.vue";
import PostCard from "@/components/common/PostCard.vue";

const props = defineProps({
  posts: {
    type: Array,
    default: [],
  },
  withDetails: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
</style>
