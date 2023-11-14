<template>
  <div
    class="justify-center cursor-pointer flex items-center gap-2 border border-zinc-700 rounded-2xl hover:border-violet-500 p-2 lg:aspect-square font-responsive"
    :class="{
      'bg-violet-500 font-semibold text-white': isActive,
    }"
    @click="buttonClick"
  >
    <i class="fa-solid" :class="details.icon"></i>
    {{ details.name }}
    <div
      class="h-2 w-2 rounded-full bg-violet-400"
      v-if="details.name === 'Requests' && userStore.requests.length"
    ></div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

import { useAuthStore } from "@/stores/auth.js";
import { useUserStore } from "@/stores/user.js";

const authStore = useAuthStore();
const userStore = useUserStore();
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

<style lang="scss" scoped></style>
