<template>
  <div class="h-screen w-screen flex p-4 gap-4 bg-zinc-900 text-zinc-300 overflow-hidden">
    <SideBar />
    <RouterView />
    <!-- <ChatSection /> -->
  </div>
</template>

<script setup>
import ChatSection from "../components/chat/ChatSection.vue";
import SideBar from "../components/nav/SideBar.vue";
</script>

<style lang="scss" scoped>
</style>
