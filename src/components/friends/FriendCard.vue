<template>
  <div
    class="w-full aspect-square bg-zinc-800 rounded-3xl flex items-center justify-between flex-col p-4"
    v-if="!toSkip"
  >
    <img
      :src="details.pfp"
      alt="pfp"
      class="w-1/2 aspect-square object-cover rounded-full cursor-pointer"
      @click="visitProfile"
    />
    <h1 class="font-semibold text-xl pb-1 cursor-pointer" @click="visitProfile">
      {{ details.name }}
    </h1>
    <div
      v-if="!isRequestCard"
      class="w-full p-1 text-center border border-violet-400 rounded-md text-violet-400 cursor-pointer"
      :class="{
        'bg-violet-400 text-violet-950': !isSent && !isFriend,
      }"
      @click="toggleIsSent"
    >
      {{ isFriend ? "Friends" : isSent ? "Requested" : "Add as friend" }}
    </div>
    <div v-else class="w-full flex gap-2">
      <div
        class="w-full p-1 text-center border border-green-500 rounded-md text-green-500 cursor-pointer hover:bg-green-500 hover:text-white"
        @click="acceptRequest"
      >
        <i class="fa-solid fa-check"></i>
      </div>
      <div
        class="w-full p-1 text-center border border-red-600 rounded-md text-red-600 cursor-pointer hover:bg-red-600 hover:text-white"
        @click="rejectRequest"
      >
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import userServices from "@/services/user.js";

const router = useRouter();
const props = defineProps({
  isFriend: {
    type: Boolean,
    default: false,
  },
  toSkip: {
    type: Boolean,
    default: false,
  },
  isRequestCard: {
    type: Boolean,
    default: false,
  },
  details: {
    type: Object,
    default: {
      pfp: "https://e1.pxfuel.com/desktop-wallpaper/643/772/desktop-wallpaper-%E2%98%AE%EF%B8%8E-cute-aesthetic-pfp.jpg",
      name: "Gwen Stacy",
    },
  },
  isSentCard: {
    type: Boolean,
    default: false,
  },
});

const isSent = ref(props.isSentCard);
const toggleIsSent = async () => {
  if (!isSent.value) {
    try {
      await userServices.sendRequest(props.details._id);
      isSent.value = true;
    } catch (error) {
      console.log(error);
    }
  }
};

const visitProfile = () => {
  router.push({ path: `/profile/${props.details._id}` });
};

const acceptRequest = async () => {
  try {
    await userServices.respondRequest(props.details._id, "accept");
  } catch (error) {
    console.log(error);
  }
};

const rejectRequest = async () => {
  try {
    await userServices.respondRequest(props.details._id, "reject");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
</style>
