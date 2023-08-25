<template>
  <div class="h-screen w-screen">
    <AppNavbar />
    <div class="flex">
      <FriendsActivity />
      <div class="basis-1/2 h-10 bg-slate-600 my-6 mx-3">
        Posts {{ firstName }}
      </div>
      <div class="basis-1/4 h-10 bg-slate-600 m-6 ml-3">
        People/Trending {{ fullName }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

import AppNavbar from "../components/common/AppNavbar.vue";
import FriendsActivity from "../components/home/FriendsActivity.vue";
import { useUserStore } from "@/stores/user";

const store = useUserStore();

const { firstName, lastName, fullName } = storeToRefs(store);
const { changeNameTo } = store;
</script>

<style lang="scss" scoped>
</style>
