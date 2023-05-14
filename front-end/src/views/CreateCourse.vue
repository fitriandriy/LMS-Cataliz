<template>
  <Navigation />
  <div class="font-Roboto text-[#535353] mx-4 md:mx-[50px] lg:mx-[270px] mt-4 lg:mt-9 mb-2 border border-[#cccccf] rounded-lg">
    <div class="pt-[20px] px-[10px] md:px-[50px] pb-[20px]">
      <h2 class="font-bold text-xl mb-2">Course Baru</h2>
      <form @submit.prevent="onCreateCourse()" class="flex flex-col">
        <label>Judul Course (100 Karakter)</label>
        <input v-model="data.title" class="mb-4 rounded border border-gray-400 p-1" type="text" id="title">
        <label>Deskripsi</label>
        <textarea v-model="data.description" class="mb-4 px-2 rounded-lg border border-[#777777] outline-none" rows="4" cols="50"></textarea>
        <label>Thumbnail (jpg/jpeg/png)</label>
        <input v-on:change="upload" class="mb-4 rounded border border-gray-400 p-1" type="file" id="thumbnail">
        <label>Prerequisites</label>
        <input v-model="data.prerequisites" class="mb-4 rounded border border-gray-400 p-1" type="text" id="prerequisites">
        <Vbutton :buttonNames="'BUAT COURSE'" class="w-[155px]" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">

import Navigation from '../components/Navigation.vue';
import Vbutton from '../components/Button.vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

let data = reactive({
    title: '',
    description: '',
    thumbnail: '',
    prerequisites: '',
    createdBy_id: ''
}); 

const upload = (event) => {
  data.thumbnail = URL.createObjectURL(event.target.files[0]);
}

const router = useRouter();
const token = localStorage.getItem("accessToken");
const config = {
  headers: { Authorization: `Bearer ${token}` }
};

function onCreateCourse() {
    axios.post(
      'http://localhost:3000/courses',
      data,
      config
      ).then((result) => {
      if (result) {
        alert(`Course successfuly created!`)
      }

      router.push({
        name: 'home'
      });
    }).catch((err) => {
        alert(`${err}`)
    });
}

</script>