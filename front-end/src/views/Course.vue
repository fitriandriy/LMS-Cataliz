<template>
    <Navigation />
    <div class="font-Roboto text-[#535353] px-4 md:px-[70px] py-2 md:py-9 mb-10">
        <!-- HEADER - THUMBNAIL, TITLE, DESC -->
        <div class="grid grid-cols-1 md:grid-cols-2">
            <img class="h-48 rounded-lg" src="/course.jpg" alt="course-image">
            <div class="md:ml-3 lg:ml-0">
                <header class="flex justify-between md:justify-start mt-3 md:mt-0">
                    <h1 class="font-bold text-lg md:text-2xl">{{ course.title }}</h1>
                    <router-link :to="{ name: 'edit-course' }">
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi explicabo quisquam eum at repellendus voluptates, alias molestias commodi laudantium, magni aspernatur. Voluptate aperiam quas ut fugit assumenda aut quidem quis. Sit ab molestias, exercitationem animi possimus odio architecto, tempora repudiandae deserunt, iure vero vitae eaque fuga dolor. Ipsa, eligendi!</p>
            </div>
            <div>
                <h2 class="font-bold text-xl mb-2">Prasyarat</h2>
                <ol>
                    <li>{{ course.prerequisites }}</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Text Editor</li>
                </ol>
            </div>
        </div>
        <hr class="border border-[#cccccf] mt-4 mb-8">
        <div>
            <!-- SECTION HEADER AND ADD SECTION'S BUTTON -->
            <div class="flex justify-between mb-5">
                <h2 class="font-bold text-xl mb-2">Koridor Kelas</h2>
                <Router-link :to="{ name: 'create-section' }">
                    <Vbutton :buttonNames="'BUAT SECTION'" />
                </Router-link>
            </div>
            <!-- 1'ST SECTION ITEM'S CONTAINER -->
            <div class="border border-[#cccccf] rounded-lg mb-4">
                <div class="flex justify-between border border-[#cccccf] rounded-lg pt-3 md:py-3 pl-6 bg-[#F4F4F5]">
                    <header class="flex">
                        <h2 class="font-bold text-base md:text-lg">1. Fundamental Javascript</h2>
                        <button @click="handleClick(0)" class="mr-4 ml-2 p-1"><img :class="handleRotate(0)" class="w-[25px] md:w-[20px] mb-3 md:pb-1 transform transition-transform duration-500" src="/arrow-to-show.png" alt=""></button>
                    </header>
                    <router-link :to="{ name: 'edit-section', params: {sectionId: 1} }">
                        <button class="w-[25px] mr-[20px] md:w-[30px] md:mr-[50px]"><img src="/edit.png" alt="edit icon"></button>
                    </router-link>
                </div>
                <div>
                    <div :style="handleToggle(0)" class="max-h-0 overflow-auto duration-500 transition-all">
                        <div class="flex my-4 px-5">
                            <img class="w-[20px] h-[20px] mr-2" src="/video.png" alt="video icon">
                            <div>
                                <a href="#" class="text-blue-600 underline">Introduction</a>
                                <p class="my-4 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere ut autem beatae exercitationem repellendus ducimus in aliquam voluptates enim? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum reiciendis non eos harum laborum consectetur quos voluptas quasi quis quaerat accusamus rerum dolore beatae facere commodi eius, nemo dicta? Nam autem id dolore iure corporis. Tempora voluptatum dolorum corporis fugit animi quae vitae eligendi suscipit delectus praesentium assumenda quasi earum quod adipisci, iure, eaque ad accusantium aliquid iste voluptates. Ipsam dignissimos tempore optio nisi molestias quae, nesciunt aperiam officia doloremque quos odio totam asp</p>
                            </div>
                        </div>
                        <div class="flex px-5">
                            <img class="w-[20px] h-[20px] mr-2" src="/task.png" alt="task icon">
                            <div class="w-full">
                                <a href="#" class="text-blue-600 underline">Task</a>
                                <div class="md:flex md:justify-between">
                                    <div class="mb-3 md:mb-0">
                                        <p class="text-red-500 my-2">Tenggat 14 Januari 2023 pukul 25.59 WIB</p>
                                        <p>Ditambahkan pada 07 Januari 2023</p>
                                        <p>Oleh Fitri Andriyani S.Kom,. M.Kom</p>
                                    </div>
                                    <router-link :to="{ name: 'submission' }" class="text-blue-600 underline md:pr-8">Daftar tugas diserahkan</router-link>
                                </div>
                                <p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere ut autem beatae exercitationem repellendus ducimus in aliquam voluptates enim? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum iure vitae voluptates ipsam repudiandae soluta saepe excepturi rem quis? Quia?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 2'ND SECTION ITEM'S CONTAINER -->
            <div class="border border-[#cccccf] rounded-lg mb-4">
                <div class="flex justify-between border border-[#cccccf] rounded-lg pt-3 md:py-3 pl-6 bg-[#F4F4F5]">
                    <header class="flex">
                        <h2 class="font-bold text-base md:text-lg">2. Manipulasi Document Object Model</h2>
                        <button @click="handleClick(1)" class="mr-4 ml-2 p-1"><img :class="handleRotate(1)" class="w-[25px] md:w-[20px] mb-3 transform transition-transform duration-500" src="/arrow-to-show.png" alt=""></button>
                    </header>
                    <router-link :to="{ name: 'edit-section', params: {sectionId: 2} }">
                        <button class="w-[25px] mr-[20px] md:w-[30px] md:mr-[50px]"><img src="/edit.png" alt="edit icon"></button>
                    </router-link>
                </div>
                <div>
                    <div :style="handleToggle(1)" class="max-h-0 overflow-auto duration-500 transition-all">
                        <div class="flex my-4 px-5">
                            <img class="w-[20px] h-[20px] mr-2" src="/video.png" alt="video icon">
                            <div>
                                <a href="#" class="text-blue-600 underline">Introduction</a>
                                <p class="my-4 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere ut autem beatae exercitationem repellendus ducimus in aliquam voluptates enim? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum reiciendis non eos harum laborum consectetur quos voluptas quasi quis quaerat accusamus rerum dolore beatae facere commodi eius, nemo dicta? Nam autem id dolore iure corporis. Tempora voluptatum dolorum corporis fugit animi quae vitae eligendi suscipit delectus praesentium assumenda quasi earum quod adipisci, iure, eaque ad accusantium aliquid iste voluptates. Ipsam dignissimos tempore optio nisi molestias quae, nesciunt aperiam officia doloremque quos odio totam asp</p>
                            </div>
                        </div>
                        <div class="flex px-5">
                            <img class="w-[20px] h-[20px] mr-2" src="/task.png" alt="task icon">
                            <div class="w-full">
                                <a href="#" class="text-blue-600 underline">Task</a>
                                <div class="md:flex md:justify-between">
                                    <div class="mb-3 md:mb-0">
                                        <p class="text-red-500 my-2">Tenggat 14 Januari 2023 pukul 25.59 WIB</p>
                                        <p>Ditambahkan pada 07 Januari 2023</p>
                                        <p>Oleh Fitri Andriyani S.Kom,. M.Kom</p>
                                    </div>
                                    <router-link :to="{ name: 'submission' }" class="text-blue-600 underline md:pr-8">Daftar tugas diserahkan</router-link>
                                </div>
                                <p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere ut autem beatae exercitationem repellendus ducimus in aliquam voluptates enim? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum iure vitae voluptates ipsam repudiandae soluta saepe excepturi rem quis? Quia?</p>
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
import { useRoute } from 'vue-router';
import { ref, onMounted, reactive } from 'vue';
import Navigation from '../components/Navigation.vue';
import Vbutton from '../components/Button.vue';

const tab = ref([false, false]);

// digunakan untuk mendapatkan id dari url
const route = useRoute();

const handleClick = (index: number) => {
  tab.value[index] = !tab.value[index];
};

const handleRotate = (index: number) => {
  return tab.value[index] === true ? 'rotate-180' : '';
};

const handleToggle = (index: number) => {
  return tab.value[index] === true ? `max-height: 100%` : '';
};

let course = reactive({
    title: '',
    description: '',
    prerequisites: '',
    createdBy_id: '',
});

onMounted(() => {
    axios.get(`http://localhost:3000/courses/${route.params.id}`)
    .then((result) => {
        course.title = result.data.title;
        course.description = result.data.description;
        course.prerequisites = result.data.prerequisites;
        course.createdBy_id = result.data.createdBy_id;
        // console.log(course.value)
    }).catch((err) => {
        console.log(err.response);
    });
});

</script>