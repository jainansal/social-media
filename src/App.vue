<template>
  <!-- Full path added to force reload the page on changing parameters -->
  <RouterView :key="$route.fullPath" />
</template>

<script setup>
</script>

<style lang="scss">
.overlay {
  overflow: overlay;
}
</style>
