<template>
  <div class="bg-zinc-800 rounded-3xl h-1/4 p-4 flex gap-4 w-full">
    <img
      :src="details.pfp"
      alt="pfp"
      class="h-full aspect-square object-cover rounded-xl"
    />
    <div class="flex flex-col gap-4 w-full overflow-hidden">
      <div class="flex justify-between items-center">
        <div>
          <div class="font-bold text-2xl">{{ details.name }}</div>
          <div class="font-light text-xl">@{{ details.username }}</div>
        </div>
        <Badges :type="type" />
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

const type = ref("none");
if (props.advanced.friends) {
  console.log(props.advanced.friends)
  if (props.advanced.friends.includes(props.details._id)) {
    type.value = "friends";
  } else if (props.advanced.sent.includes(props.details._id)) {
    type.value = "sent";
  } else if (props.advanced.received.includes(props.details._id)) {
    type.value = "received";
  }
}
</script>

<style lang="scss" scoped>
</style>
