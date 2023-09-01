<template>
  <li>{{ name }} posted {{ fromNow }}</li>
</template>

<script setup>
import { computed } from "vue";

import util from "@/util";

const props = defineProps({
  name: String,
  lastPost: String,
  userId: String,
});

const fromNow = computed(() => {
  return util.timeFromNow(props.lastPost);
});
</script>

<style lang="scss" scoped>
</style>
