<template>
  <div class="border-t border-zinc-700 p-1 max-h-52 overlay">
    <div class="flex flex-col-reverse">
      <CommentItem
        v-for="(comment, index) in postComments"
        :key="index"
        :details="comment"
      />
    </div>
    <NewComment @newComment="addComment" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import CommentItem from "./CommentItem.vue";
import NewComment from "./NewComment.vue";

import postServices from "@/services/post.js";

const props = defineProps({
  comments: Array,
  postId: String,
});

const postComments = ref(props.comments);

const addComment = async (data) => {
  try {
    const response = await postServices.addComment(props.postId, data);
    postComments.value = response;
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
</style>
