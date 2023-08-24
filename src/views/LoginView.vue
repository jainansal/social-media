<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="bg-slate-700 flex flex-col items-center p-16 gap-12">
      <h1 class="font-semibold text-4xl">SOCIALS</h1>
      <form class="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Username"
          class="p-3 text-lg bg-slate-800 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Password"
          class="p-3 text-lg bg-slate-800 focus:outline-none"
        />
        <div class="flex justify-between items-center mt-5">
          <p class="cursor-pointer">Create account</p>
          <div class="p-2 bg-violet-800 cursor-pointer">Login</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
