<template>
  <div class="basis-1/4 p-4 m-6 ml-3">
    <LabelSection label="Following" />
    <div class="mt-4 flex flex-col gap-4">
      <div
        v-for="(user, index) in users"
        :key="index"
        class="flex items-center gap-2 cursor-pointer"
        @click="visit(user._id)"
      >
        <img
          :src="user.profileImg"
          class="w-14 h-14 object-cover rounded-full"
        />
        <div class="text-base font-semibold">
          {{ user.firstName }} {{ user.lastName }}
        </div>
      </div>
      <div v-if="!users.length">You aren't following any user</div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

import LabelSection from "@/components/common/LabelSection.vue";

const router = useRouter();
const props = defineProps({
  users: {
    type: Array,
    default: [],
  },
});

const visit = (id) => {
  router.push({ path: `/profile/${id}` });
};
</script>

<style lang="scss" scoped>
</style>
