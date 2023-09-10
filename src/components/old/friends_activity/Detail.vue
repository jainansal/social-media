<template>
  <div class="text-slate-400">
    → <span class="cursor-pointer hover:text-green-300" @click="visit">{{ name }}</span> posted
    {{ fromNow }}
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

import util from "@/util";

const router = useRouter();
const props = defineProps({
  name: String,
  lastPost: String,
  userId: String,
});

const fromNow = computed(() => {
  return util.timeFromNow(props.lastPost);
});

const visit = () => {
  router.push({ path: `/profile/${props.userId}` });
};
</script>

<style lang="scss" scoped>
</style>
