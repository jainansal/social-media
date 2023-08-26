<template>
  <div class="flex basis-1/4 p-4 bg-slate-600 m-6 mr-3 flex-col">
    <LabelSection label="Friends Activity" />
    <div class="mt-3">
      <FriendsActivityDetail
        v-for="(item, index) in friendsPosts"
        :key="index"
        :name="item.name"
        :lastPost="item.lastPost"
      />
    </div>
  </div>
</template>

<script setup>
import LabelSection from "@/components/common/LabelSection.vue";
import FriendsActivityDetail from "@/components/friends_activity/Detail.vue";

const friendsPosts = [
  {
    name: "Prateek",
    lastPost: "5 hours",
  },
];
</script>

<style lang="scss" scoped>
</style>
