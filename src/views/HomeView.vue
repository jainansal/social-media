<template>
  <AppLoader :isLoading="isLoading" />
  <div class="h-screen w-screen">
    <AppNavbar />
    <div class="flex">
      <FriendsActivityIndex />
      <div class="basis-1/2 my-6 mx-3 flex flex-col gap-4">
        <NewPost />
        <PostCard />
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

import NewPost from "@/components/common/NewPost.vue";
import PostCard from "@/components/common/PostCard.vue";
import AppLoader from "@/components/common/AppLoader.vue";
import AppNavbar from "../components/common/AppNavbar.vue";
import FriendsActivityIndex from "@/components/friends_activity/Index.vue";
import LabelSection from "@/components/common/LabelSection.vue";
import { useUserStore } from "@/stores/user";

const user = useUserStore();
const toast = useToast();

const { firstName, lastName, fullName } = storeToRefs(user);
const { changeNameTo } = user;
const isLoading = ref(false);

// toast.success(`Hi, ${fullName.value}`);
</script>

<style lang="scss" scoped>
</style>
