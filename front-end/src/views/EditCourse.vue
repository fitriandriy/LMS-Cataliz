<template>
  <Navigation />
  <div class="font-Roboto text-[#535353] mx-4 md:mx-[50px] lg:mx-[270px] mt-4 lg:mt-9 mb-2 border border-[#cccccf] rounded-lg">
    <div class="pt-[20px] px-[10px] md:px-[50px] pb-[20px]">
      <header class="flex justify-between mb-4 md:mb-0">
        <h2 class="font-bold text-xl mb-2">Edit Course</h2>
        <Vbutton :buttonNames="'HAPUS COURSE'" class="bg-[red]" />
      </header>
      <form @submit.prevent="update()" class="flex flex-col">
        <label>Judul Course (100 Karakter)</label>
        <input v-model="course.title" type="text" class="py-[4px] px-2 rounded-lg border border-[#777777] outline-none mb-4" />
        <label>Deskripsi</label>
        <textarea v-model="course.description" class="mb-4 px-2 rounded-lg border border-[#777777] outline-none" rows="4" cols="50"></textarea>
        <label>Thumbnail (jpg/jpeg/png)</label>
        <input type="file" class="mb-4 rounded-lg border border-[#777777] outline-none" />
        <label>Prerequisites</label>
        <input v-model="course.prerequisites" type="text" class="py-[4px] px-2 rounded-lg border border-[#777777] outline-none mb-4" />
        <button class="text-white px-4 py-[5px] rounded-lg bg-[#02BC7D] w-[155px]">SIMPAN</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import Navigation from '../components/Navigation.vue';
import Vbutton from '../components/Button.vue';
import { useRouter, useRoute } from 'vue-router';

let course = reactive({
    title: '',
    description: '',
    prerequisites: '',
    createdBy_id: '',
    thumbnail: '',
});

const token = localStorage.getItem("accessToken");
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const route = useRoute();
const router = useRouter();

const update = () => {
  axios.patch(
        `http://localhost:3000/courses/${route.params.id}`,
        {
          title: course.title,
          description: course.description,
          prerequisites: course.prerequisites,
        },
        config
    ).then((result) => {
        alert('Data berhasil diupdate!');
        router.push({
          name: 'course',
          params: {id: route.params.id}
        });
    }).catch((err) => {
      console.log(err)
        alert(err);
    });
}

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
    }).catch((err) => {
      console.log(err.response);
    });
});

</script>