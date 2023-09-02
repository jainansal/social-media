<template>
  <AppLoader :isLoading="isLoading" />
  <div class="basis-1/4 p-4 m-6 ml-3">
    <LabelSection label="News" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import LabelSection from "@/components/common/LabelSection.vue";
import AppLoader from "@/components/common/AppLoader.vue";
import newsServices from "@/services/news";

const isLoading = ref(false);

const getNews = async () => {
  try {
    isLoading.value = true;
    await newsServices.getNews(5);
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = true;
  }
};
getNews();
</script>

<style lang="scss" scoped>
</style>
