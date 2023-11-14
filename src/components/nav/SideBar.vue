<template>
  <div
    class="flex flex-col basis-1/4 h-full bg-zinc-800 rounded-3xl text-zinc-300 p-4"
  >
    <div
      class="flex items-center justify-center pb-2 border-b border-zinc-700 h-12"
    >
      <h1 class="font-bold text-xl lg:text-4xl">SOCIALS</h1>
    </div>
    <div class="h-full py-4 overlay">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <NavItem
          v-for="(item, index) in navItems"
          :key="index"
          :details="item"
          :isActive="item.to == activeIndex"
          @buttonClick="buttonClick(item.to)"
        />
      </div>
    </div>
    <div
      class="pt-2 border-t border-zinc-700 flex items-center lg:justify-between"
    >
      <div class="flex gap-2 items-center">
        <img
          :src="userStore.pfp"
          alt="pfp"
          class="h-8 w-8 object-cover rounded-md cursor-pointer lg:h-16 lg:w-16"
          @click="visitProfile"
        />
        <div class="collapse w-0 lg:visible lg:w-auto">
          <div
            class="text-lg font-semibold cursor-pointer hover:text-violet-300"
            @click="visitProfile"
          >
            {{ userStore.name }}
          </div>
          <div class="text-zinc-600 flex items-center gap-1">
            <div class="h-3 w-3 bg-green-600 rounded-full"></div>
            Online
          </div>
        </div>
      </div>
      <div
        class="bg-red-700 py-1 px-2 rounded-lg cursor-pointer"
        @click="logoutUser"
      >
        <i class="fa-solid fa-right-from-bracket fa-lg"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

import NavItem from "@/components/nav/NavItem.vue";
import navItems from "@/components/nav/navItems.js";
import authServices from "@/services/auth.js";
import userServices from "@/services/user.js";
import { useUserStore } from "@/stores/user.js";
import { useAuthStore } from "@/stores/auth.js";
const userStore = useUserStore();
const authStore = useAuthStore();

if (!userStore.id) {
  const getDetails = async () => {
    try {
      const response = await userServices.getBasicDetails(authStore.id);
      userStore.setID(response._id);
      userStore.setName(response.name);
      userStore.setUsername(response.username);
      userStore.setBio(response.bio);
      userStore.setPfp(response.pfp);
    } catch (error) {
      console.log("error", error);
    }
  };
  const getRequests = async () => {
    try {
      const response = await userServices.getRequestsReceived();
      userStore.setRequests(response);
    } catch (error) {
      console.log("error", error);
    }
  };
  getDetails();
  getRequests();
}

const activeIndex = ref(route.name);
const buttonClick = (val) => {
  activeIndex.value = val;
};

const visitProfile = () => {
  router.push({ path: `/profile/${authStore.id}` });
};

const logoutUser = async () => {
  try {
    await authServices.logout();
  } catch (error) {
    console.log(error);
  } finally {
    router.go();
  }
};
</script>

<style lang="scss" scoped></style>
