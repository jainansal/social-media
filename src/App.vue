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

::-webkit-scrollbar-track
{
	background-color: inherit;
}

::-webkit-scrollbar
{
	width: 6px;
	background-color: inherit;
}

::-webkit-scrollbar-thumb
{
	background-color: rgb(255, 255, 255, 0.3);
}
</style>
