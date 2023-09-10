<template>
  <div class="border-t border-zinc-700 p-1 max-h-52 overlay">
    <CommentItem
      v-for="(comment, index) in comments"
      :key="index"
      :details="comment"
    />
    <NewComment @newComment="addComment" />
  </div>
</template>

<script setup>
import CommentItem from "./CommentItem.vue";
import NewComment from "./NewComment.vue";

import postServices from "@/services/post.js";

const props = defineProps({
  comments: Array,
  postId: String,
});

const addComment = async (data) => {
  try {
    await postServices.addComment(props.postId, data);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
</style>
