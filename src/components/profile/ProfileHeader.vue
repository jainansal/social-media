<template>
  <div class="bg-zinc-800 rounded-3xl h-1/4 p-4 flex gap-4 w-full">
    <img
      :src="details.pfp"
      alt="pfp"
      class="h-full aspect-square object-cover rounded-xl"
    />
    <div class="flex flex-col gap-4 w-full overflow-hidden">
      <div>
        <div>
          <div class="font-bold text-2xl">{{ details.name }}</div>
          <div class="font-light text-xl">@{{ details.username }}</div>
        </div>
        <Badges />
      </div>
      <div class="overlay font-light text-lg">
        {{ details.bio }}
      </div>
    </div>
  </div>
</template>

<script setup>
import Badges from "./Badges.vue";

const props = defineProps({
  details: Object,
})
</script>

<style lang="scss" scoped>
</style>
