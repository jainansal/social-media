<template>
  <div class="h-screen w-screen">
    <AppNavbar />
    <div class="flex">
      <ProfileCard />
      <div class="basis-1/2 p-4 bg-slate-600 my-6 mx-3">
        <LabelSection label="My Posts" />
      </div>
      <div class="basis-1/4 p-4 bg-slate-600 m-6 ml-3">
        <LabelSection label="My Friends" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppNavbar from "../components/common/AppNavbar.vue";
import ProfileCard from "../components/profile/ProfileCard.vue";
import LabelSection from "@/components/common/LabelSection.vue"
</script>

<style lang="scss" scoped>
</style>
