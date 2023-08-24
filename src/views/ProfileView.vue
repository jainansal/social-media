<template>
  <div class="h-screen w-screen">
    <AppNavbar />
    <div class="flex">
      <ProfileCard />
      <div class="basis-1/2 h-10 bg-slate-600 my-6 mx-3">My posts</div>
      <div class="basis-1/4 h-10 bg-slate-600 m-6 ml-3">My friends</div>
    </div>
  </div>
</template>

<script setup>
import AppNavbar from "../components/common/AppNavbar.vue";
import ProfileCard from "../components/profile/ProfileCard.vue";
</script>

<style lang="scss" scoped>
</style>
