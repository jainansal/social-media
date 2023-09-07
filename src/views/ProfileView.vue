<template>
  <div class="basis-1/2 rounded-3xl flex flex-col h-full gap-4">
    <ProfileHeader />
    <ProfileMid />
    <PostCard />
  </div>
</template>

<script setup>
import ProfileHeader from "../components/profile/ProfileHeader.vue";
import ProfileMid from "../components/profile/ProfileMid.vue";
import PostCard from "@/components/posts/PostCard.vue"
</script>

<style lang="scss" scoped>
</style>
