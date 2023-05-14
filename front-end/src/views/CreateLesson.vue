<template>
  <Navigation />
  <div class="flex justify-between font-Roboto text-[#535353] mx-4 md:mx-[150px] lg:mx-[270px] mt-4 my-2">
    <h2 class="font-bold text-xl mb-2">Buat Lesson</h2>
  </div>
  <div class="font-Roboto text-[#535353] mx-4 md:mx-[150px] lg:mx-[270px] mt-4 border border-[#cccccf] rounded-lg mb-4">
    <div class="pt-[20px] px-[10px] lg:px-[50px] pb-[20px] mb-[5px]">
      <header class="flex justify-between">
        <h2>Video Materi</h2>
      </header>
      <form @submit.prevent="onCreateLesson()" class="flex flex-col">
        <label>Judul Video (100 Karakter)</label>
        <input v-model="lesson.title" type="text" class="mb-4 rounded border border-gray-400 p-1">
        <label>Deskripsi</label>
        <textarea v-model="lesson.description" class="mb-4 px-2 rounded-lg border border-[#777777] outline-none" rows="4" cols="50"></textarea>
        <label>Video Link</label>
        <input v-model="lesson.video_link" class="mb-4 rounded border border-gray-400 p-1" type="text" name="" id="">
        <Vbutton :buttonNames="'ADD LESSON'" class="font-medium md:w-[145px] my-5" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from '../components/Navigation.vue';
import Vbutton from '../components/Button.vue';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';
import { useCourseStore } from '../states/course';
const courseStore = useCourseStore();

const router = useRouter();
const route = useRoute();

let lesson = reactive({
  title: '',
  description: '',
  section_id: `${courseStore.$state.course.section_id}`,
  video_link: ''
})

const token = localStorage.getItem("accessToken");
const config = {
  headers: { Authorization: `Bearer ${token}` }
};

function onCreateLesson() {
  axios.post(
    `http://localhost:3000/courses/${route.params.id}/sections/${route.params.sectionId}/lessons`,
    lesson,
    config
  ).then((result) => {
    if (result) {
      alert(`Lesson successfuly created!`)
    }

    router.push({
      name: 'course',
      params: {id: route.params.id}
    });
  }).catch((err) => {
    alert(`${err}`)
  });
}

</script>