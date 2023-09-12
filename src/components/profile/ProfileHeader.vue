<template>
  <div class="bg-zinc-800 rounded-3xl h-1/2 p-4 flex flex-col gap-4 w-full lg:flex-row lg:h-1/4">
    <img
      :src="details.pfp"
      alt="pfp"
      class="aspect-square object-cover rounded-xl h-1/2 lg:h-full"
    />
    <div class="flex flex-col gap-4 w-full overflow-hidden">
      <div class="flex justify-between items-center">
        <div>
          <div class="font-bold text-2xl">{{ details.name }}</div>
          <div class="font-light text-xl">@{{ details.username }}</div>
        </div>
        <Badges :advanced="advanced" :id="details._id" />
      </div>
      <div class="overlay font-light text-lg">
        {{ details.bio }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Badges from "./Badges.vue";

const props = defineProps({
  details: Object,
  advanced: Object,
});
</script>

<style lang="scss" scoped>
</style>
