<template>
  <RouterView />
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";

const store = useAuthStore();

const { initAuth } = store;
initAuth();
</script>

<style lang="scss">
</style>
