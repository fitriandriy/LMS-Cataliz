<template>
    <div class="font-Roboto font-medium text-[#535353] flex justify-between px-4 md:px-[50px] lg:px-[70px] py-4 bg-[#F4F4F5] shadow-lg">
        <!-- MOBILE NAV BAR -->
        <nav class="visible md:hidden flex">
            <div @click="handleClick(0)">
                <img src="/burger.png" alt="burger button" class="w-[40px]">
                <ol  :style="handleToggle(0)" class="max-h-0 overflow-hidden absolute ml-1 mt-5 bg-[#F4F4F5] rounded-sm duration-500 transition-all">
                    <li>
                        <router-link :to="{ name: 'home' }" class="inline-block w-full px-2 py-3 hover:bg-[#DADADA]">Home</router-link>
                    </li>
                    <li v-if="userStore.$state.user.role === 'facilitator'">
                        <router-link :to="{ name: 'create-course' }" class="inline-block px-2 py-3 hover:bg-[#DADADA]">Create Course</router-link>
                    </li>
                </ol>
            </div>
        </nav>
        <!-- MEDIUM-2XL NAV BAR -->
        <nav class="hidden md:visible md:flex md:justify-between">
            <img class="w-[100px] h-[50px]" src="/logo.png" alt="logo">
            <router-link :to="{ name: 'home' }" class="pt-[13px] hover:font-bold">Home</router-link>
            <router-link :to="{ name: 'create-course' }" v-if="userStore.$state.user.role === 'facilitator'" class="pt-[13px] pl-4 hover:font-bold">Create Course</router-link>
        </nav>
        <!-- PROFILE SECTION -->
        <div class="flex justify-between">
            <div class="flex">
                <p class="pt-[15px] pr-4 min-w-[115px] text-right overflow-hidden">{{ userStore.$state.user.name }}</p>
                <div @click="handleClick(1)" class="flex">
                    <img class="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" src="/profile.png" alt="profile icon">
                    <img :class="handleRotate(1)" class="w-4 h-2 mt-[24px] ml-1" src="/arrow-to-show.png" alt="">
                </div>
                <ol :style="handleToggle(1)" class="ml-[80px] mt-[60px] lg:mt-[70px] max-h-0 w-[105px] overflow-hidden absolute bg-[#F4F4F5] rounded-sm duration-500 transition-all">
                    <li>
                        <router-link :to="{ name: 'home' }" class="inline-block w-full px-2 py-3 hover:bg-[#DADADA]">My Account</router-link>
                    </li>
                    <li>
                        <button @click="signOut" class="px-2 py-3 hover:bg-[#DADADA] w-full text-left">Sign Out</button>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { RouterLink } from 'vue-router';
import { useUserStore } from '../states/user';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const userStore = useUserStore();
const router = useRouter();

const tab = ref([false, false]);

const handleClick = (index: number) => {
  tab.value[index] = !tab.value[index];
};

const handleToggle = (index: number) => {
  return tab.value[index] === true ? `max-height: 100%` : '';
};

const handleRotate = (index: number) => {
  return tab.value[index] === true ? 'rotate-180' : '';
};

const token = localStorage.getItem("accessToken");
const config = {
    headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDQ2ZGU5NDQzMDM5YWE2ZmRiOGRiZGQiLCJ1c2VyUm9sZSI6InN0dWRlbnQiLCJpYXQiOjE2ODI1Mzc5MTIsImV4cCI6MTY4MjU0MTUxMn0.kJrV8A7itF7MbLvgqC9jl-qA2DwiTRqGv_XIM2J-PzQ' }
};

const signOut = () => {
    localStorage.setItem("authenticated", "false");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    // alert(result.data.message)
    router.push({ name: "login" });    

    // axios.post(
    //     'http://localhost:3000/auth/logout',
    //     config
    // ).then((result) => {
    //     // localStorage.setItem("authenticated", "false");
    //     // localStorage.removeItem("accessToken");
    //     // localStorage.removeItem("username");
    //     alert(result)
    //     // router.push({ name: "login" });
    // }).catch((err) => {
    //     alert(err);
    // })
}

</script>