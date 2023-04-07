<template>
  <div class="font-Roboto font-medium text-[#535353] flex justify-between px-[70px] py-4 bg-[#F4F4F5]">
      <nav class="flex justify-between">
          <img class="w-[100px] h-[50px]" src="/logo.png" alt="logo">
          <router-link :to="{ name: 'home' }" class="pt-[10%]">Home</router-link>
      </nav>
      <div class="flex justify-between">
          <div class="flex">
              <p class="pt-[15%] pr-4">Fitri</p>
              <img class="w-[50px] h-[50px]" src="/profile.png" alt="profile icon">
          </div>
      </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: "NavigationForStudent"
}
</script>