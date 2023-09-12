<template>
  <div class="flex gap-2">
    <h1 class="text-violet-400 cursor-pointer" @click="visitProfile">
      {{ details.author.name }}
    </h1>
    <p class="font-light">{{ details.content }}</p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  details: Object,
});

const visitProfile = () => {
  router.push({ path: `/profile/${props.details.author._id}` });
};
</script>

<style lang="scss" scoped>
</style>
