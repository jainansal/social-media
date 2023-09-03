<template>
  <AppLoader :isLoading="isLoading" />
  <div class="basis-1/4 p-4 m-6 ml-3">
    <LabelSection label="News" />
    <div class="flex flex-col py-4 gap-3">
      <div
        v-for="(article, index) in articles"
        :key="index"
        class="text-slate-400 hover:text-green-300 cursor-pointer"
        @click="visit(article.url)"
      >
        → {{ article.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import LabelSection from "@/components/common/LabelSection.vue";
import AppLoader from "@/components/common/AppLoader.vue";
import newsServices from "@/services/news";

const isLoading = ref(false);
const articles = ref([]);

const getNews = async () => {
  try {
    isLoading.value = true;
    const response = await newsServices.getNews();
    articles.value = response;
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};
getNews();

const visit = (path) => {
  window.open(path, "_blank");
};
</script>

<style lang="scss" scoped>
</style>
