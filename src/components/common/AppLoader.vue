<template>
  <div class="app-loader" v-if="isLoading">
    <div class="loader"></div>
  </div>
</template>

<script setup>
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

  .loader {
    display: inline-block;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    &::after {
      content: " ";
      display: block;
      width: 40px;
      height: 40px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #fff;
      border-color: #2e2e2e transparent #2e2e2e transparent;
      animation: loader 0.7s linear infinite;
    }
  }
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>