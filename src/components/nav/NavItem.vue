<template>
  <div
    class="justify-center text-xl cursor-pointer flex items-center gap-2 border border-zinc-700 rounded-2xl aspect-square hover:border-violet-500"
    :class="{
      'bg-violet-500 font-semibold text-white': isActive,
    }"
    @click="buttonClick"
  >
    <i class="fa-solid" :class="details.icon"></i>
    {{ details.name }}
    <div
      v-if="details.name == 'Requests'"
      class="w-2 h-2 bg-violet-400 rounded-full"
    ></div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

import { useAuthStore } from "@/stores/auth.js";

const authStore = useAuthStore();
const router = useRouter();
const emits = defineEmits(["buttonClick"]);
const props = defineProps({
  details: Object,
  isActive: {
    type: Boolean,
    default: false,
  },
});

const buttonClick = () => {
  emits("buttonClick");
  if (props.details.name === "Profile") {
    router.push({ path: `/profile/${authStore.id}` });
  } else {
    router.push({ name: props.details.to });
  }
};
</script>

<style lang="scss" scoped>
</style>
