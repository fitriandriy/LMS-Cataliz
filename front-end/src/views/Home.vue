<template>
    <Navigation />
    <div class="font-Roboto text-[#535353] px-4 md:px-[70px] py-2 md:py-9">
        <!-- HEADER AND SEARCH BAR -->
        <div class="md:flex md:justify-between">
            <span class="font-bold text-lg md:text-[24px]">STUDENT DASHBOARD</span>
            <div class="w-100% mt-3 md:mt-0 md:flex md:justify-end md:w-2/4">
                <Vinput :type="'text'" class="h-[30px] md:h-[35px] mr-1 md:w-9/12" placeholder="Cari berdasarkan judul" />
                <Vbutton :buttonNames="'Cari'" class="h-[30px] md:h-[35px]" />
            </div>
        </div>
        <hr class="mt-[15px] border-1 border-[grey] md:invisible">
        <!-- BE OR FE FILTERING COURSES -->
        <div class="my-4 font-medium text-base md:text-lg content-end mb-8">
            <select name="" id="">
                <option value="front-end">Daftar Kelas Front End</option>
                <option value="back-end">Daftar Kelas Back End</option>
            </select>
        </div>
        <!-- COURSE LIST -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div v-for="(course) in courseList" :key="course._id">
                <router-link :to="{ name: 'course', params: {id: course._id} }">
                    <div class="bg-[#F4F4F5] rounded-xl hover:-translate-y-2 hover:shadow-lg hover:shadow-[grey]">
                        <div class>
                            <img src="/webinar-img.png" alt="">
                        </div>
                        <div class="px-4 pb-4">
                            <h2 class="font-semibold">{{ course.title }}</h2>
                            <p class="mt-3">{{ course.createdBy_id }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import Navigation from '../components/Navigation.vue';
import Vbutton from '../components/Button.vue';
import Vinput from '../components/Input.vue';

import { useUserStore } from '../states/user';
const userStore = useUserStore();



let courseList = ref([]);

onMounted( async () => {
    await userStore.fetchUser();
    axios.get('http://localhost:3000/courses')
    .then((result) => {
        courseList.value = result.data.courses;
    }).catch((err) => {
        console.log(err.response);
    });
});

</script>