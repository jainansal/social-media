<template>
  <div class="h-full w-full flex flex-col">
    <AppNavbar />
    <div class="flex items-start">
      <ProfileCard />
      <div class="basis-1/2 my-6 mx-3">
        <NewPost />
      </div>
      <FriendsCard />
    </div>
  </div>
</template>

<script setup>
import AppNavbar from "../components/common/AppNavbar.vue";
import ProfileCard from "../components/profile/ProfileCard.vue";
import LabelSection from "@/components/common/LabelSection.vue";
import FriendsCard from "@/components/profile/FriendsCard.vue";
import NewPost from "../components/common/NewPost.vue";
</script>

<style lang="scss" scoped>
</style>
