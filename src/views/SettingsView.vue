<template>
  <AppLoader :isLoading="isLoading" />
  <DeactivateConfirmation v-if="showModal" @toggle="toggleModal" />
  <div
    class="basis-3/4 rounded-3xl flex flex-col h-full gap-4 items-center justify-between"
  >
    <div class="bg-zinc-800 rounded-3xl gap-4 flex flex-col w-full p-4">
      <div class="flex gap-4 w-full relative">
        <label for="new-pfp">
          <img
            :src="pfp"
            class="w-40 aspect-square object-cover rounded-xl cursor-pointer"
          />
          <ScaleLoader
            :loading="uploadLoading"
            color="rgb(167,139,250)"
            class="absolute top-2 left-2"
          />
          <input
            :disabled="uploadLoading"
            id="new-pfp"
            hidden
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            ref="newPfp"
            @change="handleFileChange"
          />
          <div
            class="w-full border flex justify-center p-1 mt-2 rounded-lg cursor-pointer border-zinc-700 hover:border-violet-500 hover:bg-violet-500"
          >
            Upload
          </div>
        </label>

        <div class="flex flex-col gap-4 w-full">
          <div class="w-full flex gap-2 items-center">
            <div class="w-16 font-semibold text-lg">Name</div>
            <input
              required
              v-model="name"
              type="text"
              class="bg-inherit w-full p-2 border rounded-xl border-zinc-700 focus:outline-none"
            />
          </div>
          <div class="w-full h-full flex gap-2 items-center">
            <div class="w-16 font-semibold text-lg">Bio</div>
            <textarea
              required
              v-model="bio"
              class="w-full h-full bg-inherit p-2 rounded-xl border border-zinc-700 focus:outline-none"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="w-full flex gap-2 justify-end">
        <AppButton
          text="Save"
          class="bg-violet-400 text-violet-950 rounded"
          @click="editDetails"
        />
        <AppButton
          text="Discard"
          class="bg-zinc-700 rounded"
          @click="cancelChanges"
        />
      </div>
    </div>

    <AppButton
      text="Deactivate Account"
      class="rounded bg-red-600 text-center w-1/2"
      @click="toggleModal"
    />
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";

import AppButton from "@/components/common/AppButton.vue";
import AppLoader from "@/components/common/AppLoader.vue";
import DeactivateConfirmation from "../components/modals/DeactivateConfirmation.vue";

import { useAuthStore } from "@/stores/auth.js";
import userServices from "@/services/user.js";
import cloudinaryServices from "@/services/cloudinary.js";

// config
const uploadLoading = ref(false);
const isLoading = ref(false);
const authStore = useAuthStore();
const router = useRouter();
const showModal = ref(false);

const newPfp = ref(null);
const details = ref({});
const name = ref(null);
const bio = ref(null);
const pfp = ref(null);
const getBasicDetails = async () => {
  try {
    isLoading.value = true;
    const response = await userServices.getBasicDetails(authStore.id);
    details.value = response;
    name.value = details.value.name;
    bio.value = details.value.bio;
    pfp.value = details.value.pfp;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
getBasicDetails();

const editDetails = async () => {
  try {
    isLoading.value = true;
    const data = {};
    if (name.value !== details.value.name && name.value) data.name = name.value;
    if (bio.value !== details.value.bio && bio.value) data.bio = bio.value;
    if (pfp.value !== details.value.pfp && pfp.value) data.pfp = pfp.value;
    await userServices.editDetails(data);
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
    router.go();
  }
};

const cancelChanges = () => {
  router.go();
};

const toggleModal = () => {
  showModal.value = !showModal.value;
};

const handleFileChange = async () => {
  const file = newPfp.value.files[0];
  if (file) {
    uploadLoading.value = true;
    const { link, err } = await cloudinaryServices.uploadImage(file);
    if (err) {
      console.log(err);
    } else {
      pfp.value = link;
    }
    uploadLoading.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
