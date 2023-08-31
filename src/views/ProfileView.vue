<template>
  <AppLoader :isLoading="isLoading" />
  <div class="h-full w-full flex flex-col">
    <AppNavbar />
    <div class="flex items-start">
      <ProfileCard :details="profile" />
      <div class="basis-1/2 my-6 mx-3 flex flex-col gap-4">
        <NewPost />
        <PostCard v-for="(post, index) in posts" :key="index" :postId="post" />
      </div>
      <FollowingCard />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

import AppLoader from "@/components/common/AppLoader.vue";
import AppNavbar from "../components/common/AppNavbar.vue";
import ProfileCard from "../components/profile/ProfileCard.vue";
import LabelSection from "@/components/common/LabelSection.vue";
import FollowingCard from "@/components/profile/FollowingCard.vue";
import NewPost from "../components/common/NewPost.vue";
import PostCard from "../components/common/PostCard.vue";
import userServices from "@/services/user";
import { useAuthStore } from "@/stores/auth";

const route = useRoute();
const auth = useAuthStore();
const isLoading = ref(false);

let { id } = route.params;
if (!id) id = auth.userId;

const profile = reactive({
  fullName: "",
  email: "",
  profileImg: "",
});
const posts = ref([])

const getUserData = async () => {
  try {
    isLoading.value = true;
    const response = await userServices.getProfile(id);
    profile.fullName = response.firstName + " " + response.lastName;
    profile.email = response.email;
    profile.profileImg = response.profileImg;
    posts.value = response.posts
  } catch (err) {
    console.log("Error fetching user data", err);
  } finally {
    isLoading.value = false;
  }
};
getUserData();
</script>

<style lang="scss" scoped>
</style>
