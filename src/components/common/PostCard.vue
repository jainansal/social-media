<template>
  <div class="border-2 rounded-2xl border-slate-400 p-2 gap-6 flex flex-col">
    <div class="flex gap-2 items-center">
      <img
        :src="user.pfp"
        class="h-12 w-12 object-cover rounded-full cursor-pointer"
        @click="visitProfile"
      />
      <div>
        <h4 class="text-xl font-semibold cursor-pointer" @click="visitProfile">
          {{ user.fullName }}
        </h4>
        <p class="text-xs">{{ timeFromNow }}</p>
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
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";

import postServices from "@/services/post";
import util from "@/util";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const router = useRouter();
const props = defineProps({
  details: {
    type: Object,
  },
  postId: {
    type: String,
  },
});
const isLiked = ref(false);

const content = ref("");
const likes = ref([]);
const likeCount = ref(0);
const createdAt = ref(null);
const user = reactive({
  id: "",
  fullName: "",
  pfp: "",
});

const getPost = async () => {
  try {
    const data = await postServices.getPost(props.postId);
    console.log(data);
    content.value = data.content;
    likes.value = data.likes;
    likeCount.value = data.likeCount;
    createdAt.value = data.createdAt;
    user.id = data.author._id;
    user.fullName = data.author.firstName + " " + data.author.lastName;
    user.pfp = data.author.profileImg;
    if (data.likes.includes(authStore.userId)) {
      isLiked.value = true;
    }
  } catch (err) {
    console.log(err);
  }
};
if (!props.details) {
  getPost();
} else {
  const data = props.details;
  content.value = data.content;
  likes.value = data.likes;
  likeCount.value = data.likeCount;
  createdAt.value = data.createdAt;
  user.id = data.author._id;
  user.fullName = data.author.firstName + " " + data.author.lastName;
  user.pfp = data.author.profileImg;
  if (data.likes.includes(authStore.userId)) {
    isLiked.value = true;
  }
}

const toggleLiked = async () => {
  try {
    let postId = props.postId;
    if (!props.postId) postId = props.details._id;
    await postServices.toggleLike(postId);
    if (isLiked.value) {
      isLiked.value = false;
      likeCount.value--;
    } else {
      isLiked.value = true;
      likeCount.value++;
    }
  } catch (err) {
    console.log(err);
  }
};

const visitProfile = () => {
  router.push({ path: `/profile/${user.id}` });
};

const timeFromNow = computed(() => {
  return util.timeFromNow(createdAt.value);
});
</script>

<style lang="scss" scoped>
</style>
