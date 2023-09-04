<template>
  <div class="basis-1/2 flex flex-col gap-4 overlay rounded-3xl">
    <NewPost />
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
  </div>
</template>

<script setup>
import NewPost from "../../components/new/NewPost.vue";
import PostCard from "../../components/new/PostCard.vue";
</script>

<style lang="scss" scoped>

</style>
