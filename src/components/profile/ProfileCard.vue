<template>
  <EditProfile v-if="showModal" @closeModal="toggleModal" />
  <div class="flex basis-1/4 m-6 mr-3 p-4 flex-col rounded-2xl">
    <LabelSection label="Profile" />
    <div class="mt-4 flex justify-center items-center flex-col gap-4">
      <img
        src="https://www.mintface.xyz/content/images/2021/08/QmTndiF423kjdXsNzsip1QQkBQqDuzDhJnGuJAXtv4XXiZ-1.png"
        alt="profile-img"
        class="w-full rounded-lg"
      />
      <div class="font-bold text-4xl">
        {{ fullName }}
      </div>
      <div class="cursor-pointer">
        {{ email }}
      </div>
      <div class="bg-red-500 p-2 font-semibold rounded-lg cursor-pointer" @click="toggleModal">
        Edit profile
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";

import LabelSection from "@/components/common/LabelSection.vue";
import { useUserStore } from "@/stores/user";
import EditProfile from "../modals/EditProfile.vue";

const user = useUserStore();

const { fullName, email } = storeToRefs(user);
const showModal = ref(false);

const toggleModal = () => {
  console.log(showModal.value)
  showModal.value= !showModal.value
}
</script>

<style lang="scss" scoped>
</style>
