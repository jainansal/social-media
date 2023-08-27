<template>
  <div class="flex basis-1/4 bg-slate-600 m-6 mr-3 p-4 flex-col rounded-2xl">
    <LabelSection label="Profile" />
    <div class="mt-4 flex justify-center items-center flex-col gap-4">
      <img
        src="https://www.mintface.xyz/content/images/2021/08/QmTndiF423kjdXsNzsip1QQkBQqDuzDhJnGuJAXtv4XXiZ-1.png"
        alt="profile-img"
        class="w-full rounded-lg"
      />
      <div class="font-bold text-4xl">
        {{fullName}}
      </div>
      <div class="cursor-pointer">
        {{email}}
      </div>
      <div class="bg-red-500 p-2 font-semibold rounded-lg cursor-pointer">
        Edit profile
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

import LabelSection from "@/components/common/LabelSection.vue";
import {useUserStore} from "@/stores/user"

const user = useUserStore()

const {fullName, email} = storeToRefs(user)
</script>

<style lang="scss" scoped>
</style>
