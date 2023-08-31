<template>
  <div class="basis-1/4 p-4 m-6 ml-3">
    <LabelSection label="Following" />
    <div class="mt-4 flex flex-col gap-4">
      <div
        v-for="(friend, index) in myFriends"
        :key="index"
        class="flex items-center gap-2 cursor-pointer"
      >
        <img
          :src="friend.profileImg"
          class="w-14 h-14 object-cover rounded-full"
        />
        <div class="text-base font-semibold">{{ friend.fullName }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LabelSection from "@/components/common/LabelSection.vue";

const myFriends = [
  {
    profileImg: "https://hypixel.net/attachments/2475043/",
    fullName: "Karan Singh",
  },
  {
    profileImg: "https://wallpapercave.com/uwp/uwp3653906.webp",
    fullName: "Aryan Verma",
  },
  {
    profileImg:
      "https://dthezntil550i.cloudfront.net/rr/latest/rr2208150850422700022623251/1280_960/7a0a6f5d-a292-4e70-9551-9728c61d30f2.jpg",
    fullName: "Lily Smith",
  },
];
</script>

<style lang="scss" scoped>
</style>
