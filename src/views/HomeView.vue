<template>
  <AppLoader :isLoading="isLoading" />
  <div class="h-screen w-screen">
    <AppNavbar />
    <div class="flex">
      <FriendsActivityIndex />
      <div class="basis-1/2 p-4 bg-slate-600 my-6 mx-3">
        <LabelSection label="All Posts" />
      </div>
      <div class="basis-1/4 p-4 bg-slate-600 m-6 ml-3">
        <LabelSection label="Trending" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useToast } from "vue-toastification";

import AppLoader from "@/components/common/AppLoader.vue";
import AppNavbar from "../components/common/AppNavbar.vue";
import FriendsActivityIndex from "@/components/friends_activity/Index.vue";
import LabelSection from "@/components/common/LabelSection.vue";
import { useUserStore } from "@/stores/user";

const store = useUserStore();
const toast = useToast();

const { firstName, lastName, fullName } = storeToRefs(store);
const { changeNameTo } = store;
const isLoading = ref(false);

// toast.success(`Hi, ${fullName.value}`);
</script>

<style lang="scss" scoped>
</style>
