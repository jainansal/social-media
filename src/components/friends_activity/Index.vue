<template>
  <div class="flex basis-1/4 p-4 bg-slate-600 m-6 mr-3 flex-col">
    <LabelSection label="Activity" />
    <div class="mt-3">
      <FriendsActivityDetail
        v-for="(item, index) in activity"
        :key="index"
        :userId="item.userId"
        :name="item.fullName"
        :lastPost="item.time"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import LabelSection from "@/components/common/LabelSection.vue";
import FriendsActivityDetail from "@/components/friends_activity/Detail.vue";
import userServices from "@/services/user";

const isLoading = ref(false);

const activity = ref([]);

const getActivity = async () => {
  try {
    isLoading.value = true;
    const data = await userServices.getUsersActivity();
    console.log(data);
    activity.value = data;
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};
getActivity();
</script>

<style lang="scss" scoped>
</style>
