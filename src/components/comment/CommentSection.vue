<template>
  <div class="border-t border-zinc-700 p-1 max-h-52 overlay">
    <CommentItem />
    <CommentItem />
    <NewComment />
  </div>
</template>

<script setup>
import CommentItem from "./CommentItem.vue";
import NewComment from "../new/NewComment.vue";
</script>

<style lang="scss" scoped>
</style>
