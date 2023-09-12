<template>
  <div
    class="flex absolute top-0 left-0 h-screen w-screen items-center justify-center z-10 bg-black bg-opacity-[0.4]"
  >
    <div
      class="bg-zinc-950 p-4 flex flex-col gap-2 w-1/3 h-1/2 overflow-hidden rounded-3xl"
    >
      <div class="flex flex-row justify-between items-center">
        <h1 class="text-3xl">Friends</h1>
        <i
          class="fa-solid fa-circle-xmark fa-xl cursor-pointer"
          @click="closeModal"
        ></i>
      </div>
      <hr />
      <div class="flex flex-col mt-2 overlay">
        <div
          v-for="(friend, index) in friends"
          :key="index"
          class="flex items-center gap-2 cursor-pointer hover:font-bold hover:text-violet-300"
          @click="link(friend._id)"
        >
          <img :src="friend.pfp" class="h-12 w-12 object-cover rounded-full" />
          <h3 class="text-xl">{{ friend.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  friends: Array,
});
const emits = defineEmits(["closeModal"]);

const closeModal = () => {
  emits("closeModal");
};

const link = (id) => {
  router.push({ path: `/profile/${id}` });
};
</script>

<style lang="scss" scoped>
</style>
