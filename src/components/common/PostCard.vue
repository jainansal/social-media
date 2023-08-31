<template>
  <div class="border-2 rounded-2xl border-slate-400 p-2 gap-6 flex flex-col">
    <div class="flex gap-2 items-center">
      <img
        src="https://www.mintface.xyz/content/images/2021/08/QmTndiF423kjdXsNzsip1QQkBQqDuzDhJnGuJAXtv4XXiZ-1.png"
        class="h-12 w-12 object-cover rounded-full"
      />
      <div>
        <h4 class="text-xl font-semibold">Ansal Jain</h4>
        <p class="text-xs">{{ updatedAt }}</p>
      </div>
    </div>
    <div class="text-lg">{{ content }}</div>
    <div class="flex items-center gap-2">
      <i
        class="fa-regular fa-heart fa-xl cursor-pointer text-rose-500"
        v-if="!isLiked"
        @click="toggleLiked"
      ></i>
      <i
        @click="toggleLiked"
        class="fa-solid fa-heart fa-xl text-rose-500 cursor-pointer"
        v-else
      ></i>
      <p class="mb-[2px]">{{ likeCount }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import postServices from "@/services/post";

const props = defineProps({
  postId: {
    type: String,
  },
});
const content = ref("");
const likes = ref([]);
const likeCount = ref(0);
const updatedAt = ref(null);

const getPost = async () => {
  try {
    const data = await postServices.getPost(props.postId);
    console.log(data);
    content.value = data.content;
    likes.value = data.likes;
    likeCount.value = data.likeCount;
    updatedAt.value = data.updatedAt;
  } catch (err) {
    console.log(err);
  }
};

getPost();

const isLiked = ref(false);

const toggleLiked = () => {
  isLiked.value = !isLiked.value;
};
</script>

<style lang="scss" scoped>
</style>
