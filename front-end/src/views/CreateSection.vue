<template>
  <Navigation />
  <div class="font-Roboto text-[#535353] mx-4 md:mx-[150px] lg:mx-[300px] mt-4 lg:mt-9 mb-2">
    <h2 class="font-bold text-xl mb-2">Buat Section</h2>
    <form @submit.prevent="onCreateSection()" class="flex flex-col">
      <label>Judul Section (100 Karakter)</label>
      <input v-model="section.section_title" class="mb-4 rounded border border-gray-400 p-1" type="text" id="title">
      <textarea v-model="section.description" class="mb-4 px-2 rounded-lg border border-[#777777] outline-none" rows="4" cols="50"></textarea>
      <Vbutton :buttonNames="'BUAT SECTION'" class="h-10 font-medium md:w-[145px] mb-10" />
    </form>
  </div>
</template>

<script setup lang="ts">
import Navigation from '../components/Navigation.vue';
import Vbutton from '../components/Button.vue';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const route = useRoute();

let section = reactive({
  section_title: '',
  course_id: route.params.id,
  description: ''
})

const token = localStorage.getItem("accessToken");
const config = {
  headers: { Authorization: `Bearer ${token}` }
};

function onCreateSection() {
  axios.post(
    `http://localhost:3000/courses/${route.params.id}/sections`,
    section,
    config
  ).then((result) => {
    if (result) {
      alert(`Section successfuly created!`)
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