<template>
  <div
    class="absolute h-screen w-screen top-0 left-0 flex justify-center items-center bg-black/70"
  >
    <form
      class="bg-white text-black p-4 flex flex-col items-center gap-2 rounded-md relative"
      @submit.prevent="handleSubmit"
    >
      <i
        class="fa-solid fa-circle-xmark fa-xl absolute right-1 top-4 cursor-pointer"
        @click="handleClose"
      ></i>
      <div class="flex flex-col gap-2 w-max">
        <img
          :src="pfpLink"
          alt="Enter a valid URL"
          class="h-56 rounded-sm object-cover"
        />
        <input
          type="text"
          placeholder="Profile Picture (image address)"
          class="p-2 rounded-md w-full border-2 border-black/40"
          v-model="pfpLink"
          required
        />
      </div>
      <div class="flex gap-2">
        <input
          type="text"
          placeholder="First Name"
          class="p-2 rounded-md w-full border-2 border-black/40"
          v-model="formData.firstName"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          class="p-2 rounded-md w-full border-2 border-black/40"
          v-model="formData.lastName"
          required
        />
      </div>
      <!-- <input
        type="text"
        placeholder="Email Address"
        class="p-2 rounded-md w-full border-2 border-black/40"
      />
      <input
        type="text"
        placeholder="Current Password"
        class="p-2 rounded-md w-full border-2 border-black/40"
      />
      <input
        type="text"
        placeholder="New Password"
        class="p-2 rounded-md w-full border-2 border-black/40"
      /> -->
      <button class="bg-slate-800 text-white px-2 py-1 rounded-md">Save</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { storeToRefs } from "pinia";

import { useUserStore } from "@/stores/user";

const emit = defineEmits(["closeModal"]);
const user = useUserStore();

const formData = {
  firstName: user.firstName,
  lastName: user.lastName,
};
const pfpLink = ref(
  "https://www.mintface.xyz/content/images/2021/08/QmTndiF423kjdXsNzsip1QQkBQqDuzDhJnGuJAXtv4XXiZ-1.png"
);

const handleClose = () => {
  emit("closeModal");
};
</script>

<style lang="scss" scoped>
</style>
