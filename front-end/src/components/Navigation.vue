<template>
    <div class="font-Roboto font-medium text-[#535353] flex justify-between px-4 md:px-[50px] lg:px-[70px] py-4 bg-[#F4F4F5]">
        <!-- MOBILE NAV BAR -->
        <nav class="visible md:hidden flex">
            <div @click="handleClick(0)">
                <img src="/burger.png" alt="burger button" class="w-[40px]">
                <ol  :style="handleToggle(0)" class="max-h-0 overflow-auto fixed ml-1 bg-[#F4F4F5] rounded-sm duration-500 transition-all">
                    <li>
                        <router-link :to="{ name: 'home' }" class="inline-block mt-[20px] mb-[10px] px-2 md:pt-[13px] hover:font-bold">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'create-course' }" class="px-2 md:pt-[13px] md:pl-4 hover:font-bold">Create Course</router-link>
                    </li>
                </ol>
            </div>
        </nav>
        <!-- MEDIUM-2XL NAV BAR -->
        <nav class="hidden md:visible md:flex md:justify-between">
            <img class="w-[100px] h-[50px]" src="/logo.png" alt="logo">
            <router-link :to="{ name: 'home' }" class="pt-[13px] hover:font-bold">Home</router-link>
            <router-link :to="{ name: 'create-course' }" class="pt-[13px] pl-4 hover:font-bold">Create Course</router-link>
        </nav>
        <div class="flex justify-between">
            <div class="flex">
                <p class="pt-[15%] pr-4">Fitri</p>
                <img class="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" src="/profile.png" alt="profile icon">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const tab = ref([false, false]);

const handleClick = (index: number) => {
  tab.value[index] = !tab.value[index];
};

const handleToggle = (index: number) => {
  return tab.value[index] === true ? `max-height: 100%` : '';
};

</script>