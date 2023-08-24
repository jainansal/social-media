<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="bg-slate-700 flex flex-col items-center p-12 gap-12">
      <h1 class="font-semibold text-4xl">SOCIALS</h1>
      <form class="flex flex-col gap-3">
        <input
          type="text"
          placeholder="First Name"
          class="p-3 text-lg bg-slate-800 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Last Name"
          class="p-3 text-lg bg-slate-800 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Email Address"
          class="p-3 text-lg bg-slate-800 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Password"
          class="p-3 text-lg bg-slate-800 focus:outline-none"
        />
        <div class="flex justify-between items-center mt-5">
          <p class="cursor-pointer">Already a user?</p>
          <div class="p-2 bg-violet-800 cursor-pointer">Register</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>