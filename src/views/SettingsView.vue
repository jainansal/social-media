<template>
  <div class="basis-1/2 rounded-3xl flex flex-col h-full">
    <div class="bg-zinc-800 rounded-3xl gap-4 flex flex-col p-4">
      <div class="w-full flex gap-2 items-center">
        <div class="w-16 font-semibold text-lg">Name</div>
        <input
          type="text"
          class="bg-inherit w-full p-2 border rounded-xl border-zinc-700 valid:outline-none"
        />
      </div>
      <div class="w-full flex gap-2 items-center">
        <div class="w-16 font-semibold text-lg">Bio</div>
        <textarea
          class="w-full bg-inherit p-2 rounded-xl border border-zinc-700 valid:outline-none"
        ></textarea>
      </div>
      <div class="w-full flex gap-2 items-center">
        <div class="text-lg font-semibold">Profile Picture</div>
        <input
          type="text"
          class="bg-inherit p-2 w-full border rounded-xl border-zinc-700 valid:outline-none"
        />
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/643/772/desktop-wallpaper-%E2%98%AE%EF%B8%8E-cute-aesthetic-pfp.jpg"
          class="w-20 aspect-square object-cover rounded-xl"
        />
      </div>
      <div class="w-full flex gap-2 justify-end">
        <AppButton text="Save" class="bg-violet-400 text-violet-950 rounded" />
        <AppButton text="Discard" class="bg-zinc-700 rounded" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from "@/components/common/AppButton.vue";
</script>

<style lang="scss" scoped>
</style>
