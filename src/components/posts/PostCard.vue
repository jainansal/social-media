<template>
  <div class="bg-zinc-800 rounded-3xl p-4 flex flex-col gap-4 drop-shadow-md">
    <div class="flex gap-3 items-center">
      <img
        :src="details.author.pfp"
        alt="pfp"
        class="w-10 h-10 object-cover rounded-full"
      />
      <div class="flex flex-col">
        <div class="text-lg font-semibold">{{ details.author.name }}</div>
        <div class="text-xs">{{ relTime }}</div>
      </div>
    </div>
    <div class="font-light text-lg">{{ details.content }}</div>
    <div class="flex mt-1 gap-2">
      <div
        class="bg-violet-400 text-violet-950 px-2 py-1 rounded-lg cursor-pointer flex flex-row items-center gap-1"
        @click="toggleIsLiked"
      >
        <i
          class="fa-heart"
          :class="{
            'fa-regular': !isLiked,
            'fa-solid': isLiked,
          }"
        ></i>
        <div class="font-medium">
          {{ details.likes.length }}
        </div>
      </div>
      <div
        class="bg-violet-400 text-violet-950 px-2 py-1 rounded-lg cursor-pointer flex flex-row items-center gap-1"
        @click="toggleShowComments"
      >
        <i
          class="fa-comment"
          :class="{
            'fa-regular': !showComments,
            'fa-solid': showComments,
          }"
        ></i>
      </div>
    </div>
    <CommentSection v-if="showComments" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

import CommentSection from "../comment/CommentSection.vue";

import util from "@/util.js";

// config
const props = defineProps({
  details: {
    type: Object,
  },
});

const relTime = computed(() => util.timeFromNow(props.details.createdAt));

const showComments = ref(false);
const toggleShowComments = () => {
  showComments.value = !showComments.value;
};

const isLiked = ref(false);
const toggleIsLiked = () => {
  isLiked.value = !isLiked.value;
};
</script>

<style lang="scss" scoped>
</style>