<template>
  <div class="app-loader flex justify-center items-center" v-if="isLoading">
    <GridLoader color="rgb(167,139,250)" />
  </div>
</template>

<script setup>
import GridLoader from "vue-spinner/src/GridLoader.vue";

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.app-loader {
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
