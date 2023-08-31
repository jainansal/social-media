<template>
  <AppLoader :isLoading="isLoading" />
  <EditProfile v-if="showModal" @closeModal="toggleModal" />
  <div class="flex basis-1/4 m-6 mr-3 flex-col rounded-2xl">
    <div class="flex justify-center items-center flex-col gap-4">
      <img
        :src="details.profileImg"
        alt="profile-img"
        class="w-full rounded-lg"
      />
      <div class="font-bold text-4xl">
        {{ details.fullName }}
      </div>
      <div class="cursor-pointer">
        {{ details.email }}
      </div>
      <div
        class="bg-red-500 p-2 font-semibold rounded-lg cursor-pointer"
        @click="toggleModal"
      >
        Edit profile
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import LabelSection from "@/components/common/LabelSection.vue";
import EditProfile from "../modals/EditProfile.vue";
import AppLoader from "@/components/common/AppLoader.vue";

const props = defineProps({
  details: {
    type: Object,
  },
});

const showModal = ref(false);
const isLoading = ref(false);

const toggleModal = () => {
  console.log(showModal.value);
  showModal.value = !showModal.value;
};
</script>

<style lang="scss" scoped>
</style>
