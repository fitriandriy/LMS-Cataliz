<template>
    <Navigation />
    <div class="font-Roboto text-[#535353] px-4 md:px-[70px] py-2 md:py-9 mb-10">
        <!-- HEADER - THUMBNAIL, TITLE, DESC -->
        <div class="grid grid-cols-1 md:grid-cols-2">
            <!-- <img class="h-48 rounded-lg" src="/course.jpg" alt="course-image"> -->
            <img class="h-48 rounded-lg" src="/course-images/course.jpg" alt="course-image">
            <div class="md:ml-3 lg:ml-0">
                <header class="flex justify-between md:justify-start mt-3 md:mt-0">
                    <h1 class="font-bold text-lg md:text-2xl">{{ course.title }}</h1>
                    <router-link :to="{ name: 'edit-course' }" v-if="userStore.$state.user.role === 'facilitator'">
                        <button class="w-[40px] mr-[10px] md:mr-0 md:ml-[50px]"><img src="/edit.png" alt="edit icon"></button>
                    </router-link>
                </header>
                <span class="inline-block md:mt-6 mb-4">Dibuat oleh: {{ course.createdBy_id }}</span>
                <p>{{ course.description }}</p>
            </div>
        </div>
        <hr class="border border-[#cccccf] mt-4 mb-8">
        <!-- DESC AND PREREQUISITES -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h2 class="font-bold text-xl mb-2">Deskripsi</h2>
                <p>{{ course.description }}</p>
            </div>
            <div>
                <h2 class="font-bold text-xl mb-2">Prasyarat</h2>
                <p>{{ course.prerequisites }}</p>
            </div>
        </div>
        <hr class="border border-[#cccccf] mt-4 mb-8">
        <div>
            <!-- SECTION HEADER AND ADD SECTION'S BUTTON -->
            <div class="flex justify-between mb-5">
                <h2 class="font-bold text-xl mb-2">Koridor Kelas</h2>
                <div v-if="userStore.$state.user.role === 'facilitator'" class="flex justify-start">
                    <Router-link :to="{ name: 'create-section' }">
                        <Vbutton :buttonNames="'BUAT SECTION'" />
                    </Router-link>
                </div>
            </div>
            <!-- 1'ST SECTION ITEM'S CONTAINER -->
            <div v-for="(data) in course.section" :key="data._id" class="border border-[#cccccf] rounded-lg mb-4">
                <div class="flex justify-between border border-[#cccccf] rounded-lg pt-3 md:py-3 pl-6 bg-[#F4F4F5]">
                    <header class="flex">
                        <h2 class="font-bold text-base md:text-lg">{{course.section.indexOf(data)+1 + '. ' + data.section_title }}</h2>
                        <button @click="handleClick(course.section.indexOf(data))" class="mr-4 ml-2 p-1"><img :class="handleRotate(course.section.indexOf(data))" class="w-[25px] md:w-[20px] mb-3 md:pb-1 mt-[2px] transform transition-transform duration-500" src="/arrow-to-show.png" alt=""></button>
                    </header>
                    <!-- <div v-if="userStore.$state.user.role === 'facilitator'">
                        <Router-link :to="{ name: 'edit-section', params: { id: data.course_id, sectionId: data._id} }">
                            <button class="w-[25px] mr-[20px] md:w-[30px] md:mr-[50px]"><img src="/edit.png" alt="edit icon"></button>
                        </Router-link>
                    </div> -->
                </div>
                <div>
                    <div :style="handleToggle(course.section.indexOf(data))" class="max-h-0 overflow-auto duration-500 transition-all">
                        <!-- <P>SECTION ID {{ data._id }}</P> -->
                        <div v-if="userStore.$state.user.role === 'facilitator'" class="flex justify-start ml-5 my-2">
                            <router-link :to="{ name: 'create-lesson', params: { id: route.params.id } }">
                                <button @click="buttonClicked(data._id)" class="text-white px-4 py-[5px] rounded-lg bg-[#02BC7D] mr-2">ADD LESSON</button>
                            </router-link>
                            <router-link :to="{ name: 'create-task', params: { id: route.params.id } }">
                                <button @click="buttonClicked(data._id)" class="text-white px-4 py-[5px] rounded-lg bg-[#02BC7D]">ADD TASK</button>
                            </router-link>
                        </div>
                        <!-- LESSON -->
                        <div v-for="(lesson) in data.lesson" :key="lesson._id" class="flex my-4 px-5">
                            <img class="w-[20px] h-[20px] mr-2" src="/video.png" alt="video icon">
                            <div>
                                <a href="{{ lesson.video_link }}" class="text-blue-600 underline">{{ lesson.title }}</a>
                                <p class="my-4 w-full">{{ lesson.description }}</p>
                            </div>
                        </div>
                        <!-- TASK -->
                        <div v-for="(task) in data.task" :key="task._id" class="flex px-5">
                            <img class="w-[20px] h-[20px] mr-2" src="/task.png" alt="task icon">
                            <div class="w-full">
                                <a href="#" class="text-blue-600 underline">Task</a>
                                <div class="md:flex md:justify-between">
                                    <div class="mb-3 md:mb-0">
                                        <p class="text-red-500 my-2">Tenggat {{ dayjs(task.deadline).format('DD/MM/YYYY') }}</p>
                                        <p>Ditambahkan pada {{ dayjs(task.createdAt).format('DD/MM/YYYY') }}</p>
                                        <p>Oleh Fitri Andriyani S.Kom,. M.Kom</p>
                                    </div>
                                    <router-link :to="{ name: 'submission' }" v-if="userStore.$state.user.role === 'facilitator'" class="text-blue-600 underline md:pr-8">Daftar tugas diserahkan</router-link>
                                </div>
                                <p class="my-4">{{ task.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative">
            <router-link :to="{ name: 'discussion' }">
                <img class="w-[70px] fixed right-3 bottom-3" src="/chat-img.png" alt="chat image">
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">

import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import * as dayjs from 'dayjs';
import { ref, onMounted, reactive } from 'vue';
import Navigation from '../components/Navigation.vue';
import Vbutton from '../components/Button.vue';
import { useUserStore } from '../states/user';
import { useCourseStore } from '../states/course';
const userStore = useUserStore();
const courseStore = useCourseStore();

const tab = ref([false, false]);

// digunakan untuk mendapatkan id dari url
const route = useRoute();
const router = useRouter();

const handleClick = (index: number) => {
  tab.value[index] = !tab.value[index];
};

const handleRotate = (index: number) => {
  return tab.value[index] === true ? 'rotate-180' : '';
};

const handleToggle = (index: number) => {
  return tab.value[index] === true ? `max-height: 100%` : '';
};

const buttonClicked = (section_id) => {
    courseStore.$state.course.section_id = section_id;
}

let course = reactive({
    title: '',
    description: '',
    prerequisites: '',
    createdBy_id: '',
    thumbnail: '',
    section: [
        {
            _id: '',
            section_title: '',
            course_id: '',
            description: '',
            lesson: 
            [
                {
                    _id: '',
                    title: '',
                    description: '',
                    video_link: '',
                },
            ],
            task:
            [

                {
                    _id: '',
                    deadline: '',
                    createdAt: '',
                    description: '',
                    criteria: [
                        {
                            _id: '',
                            criteria: '',
                            status: null
                        }
                    ]
                }
            ]
        }
    ]
});

const token = localStorage.getItem("accessToken");
const config = {
    headers: { Authorization: `Bearer ${token}` }
    };

onMounted( async () => {
    axios.get(
        `http://localhost:3000/courses/${route.params.id}`,
        config)
    .then((result) => {
        course.title = result.data.course[0].title;
        course.description = result.data.course[0].description;
        course.prerequisites = result.data.course[0].prerequisites;
        course.createdBy_id = result.data.course[0].createdBy_id;
        course.thumbnail = result.data.course[0].thumbnail;
        // console.log(`THUMBNAIL ${JSON.stringify(result)}`)
        // console.log(`THUMBNAIL ${JSON.stringify(result.data.course[0].section)}`)
        // console.log(`TITLE ${result.data.course[0].section}`)
    }).catch((err) => {
        console.log(err.response);
    });

    const check = (data) => {
        return data.course_id == route.params.id;
    }

    axios.get(
        `http://localhost:3000/courses/${route.params.id}/sections`,
        config)
    .then((result) => {
        course.section = result.data.sections.filter(check);
        // course.section = result.data.sections;
        // console.log(`THUMBNAIL ${course.section}`)
        console.log(`THUMBNAIL ${JSON.stringify(course.section)}`)
        // console.log(`THUMBNAIL ${JSON.stringify(data.course[0].section[0].lesson[0])}`)
        // console.log(`TITLE ${result.data.course[0].section}`)
    }).catch((err) => {
        console.log(err.response);
    });
});

</script>