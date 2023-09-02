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
        v-if="userId === details.userId"
        class="bg-red-500 p-2 font-semibold rounded-lg cursor-pointer w-24"
        @click="toggleModal"
      >
        Edit profile
      </div>
      <div
        v-else-if="!isFollowing"
        class="bg-blue-500 p-2 w-24 text-center font-semibold rounded-lg cursor-pointer"
        @click="toggleFollowing"
      >
        Follow
      </div>
      <div
        v-else
        class="p-2 font-semibold rounded-lg cursor-pointer bg-slate-800 w-24 text-center"
        @click="toggleFollowing"
      >
        Following
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";

import LabelSection from "@/components/common/LabelSection.vue";
import EditProfile from "../modals/EditProfile.vue";
import AppLoader from "@/components/common/AppLoader.vue";
import { useAuthStore } from "@/stores/auth";
import { useUserStore } from "@/stores/user";
import userServices from "@/services/user";

const authStore = useAuthStore();
const userStore = useUserStore();
const props = defineProps({
  details: {
    type: Object,
  },
});

const { userId } = storeToRefs(authStore);
const { following } = storeToRefs(userStore);
const { setFollowing } = userStore;
const showModal = ref(false);
const isLoading = ref(false);
const isFollowing = ref(false);

const updateVal = () => {
  if (following.value.includes(props.details.userId)) {
    isFollowing.value = true;
  } else {
    isFollowing.value = false;
  }
};
updateVal();

const toggleModal = () => {
  console.log(showModal.value);
  showModal.value = !showModal.value;
};

const toggleFollowing = async () => {
  try {
    const response = await userServices.updateFollowing(props.details.userId);
    setFollowing(response);
    updateVal();
  } catch (err) {
    console.log(err);
  }
};
</script>

<style lang="scss" scoped>
</style>
