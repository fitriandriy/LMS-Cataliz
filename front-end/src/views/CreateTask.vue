<template>
  <Navigation />
  <div class="font-Roboto text-[#535353] mx-4 md:mx-[150px] lg:mx-[300px] mt-4 lg:mt-9 mb-2">
    <h2 class="font-bold text-xl mb-2">Buat Tugas</h2>
  </div>
  <div class="font-Roboto text-[#535353] mx-4 md:mx-[150px] lg:mx-[270px] mt-4 lg:mt-9 border border-[#cccccf] rounded-lg mb-4">
    <div class="pt-[20px] px-[10px] lg:px-[50px] pb-[20px]">
      <form @submit.prevent="onCreateTask()" class="flex flex-col">
        <label>Tenggat Pengumpulan</label>
        <input v-model="task.deadline" :type="'datetime-local'" class="mb-4 border-[1px] p-1 rounded-lg border-[#777777]" />
        <label>Deskripsi Tugas</label>
        <textarea v-model="task.description" class="mb-4 px-2 rounded-lg border border-[#777777] outline-none" rows="4" cols="50"></textarea>
        <Vbutton :buttonNames="'ADD TASK'" class="h-9 font-medium md:w-[145px]" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from '../components/Navigation.vue';
import Vbutton from '../components/Button.vue';
import { onMounted, ref, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';
import { useCourseStore } from '../states/course';
const courseStore = useCourseStore();

const router = useRouter();
const route = useRoute();

let task = reactive({
    deadline: '',
    criteria: [
        {
            name: '-',
            status: false
        }
    ],
    description: '',
    section_id: courseStore.$state.course.section_id
})

let section = ref([]);

const token = localStorage.getItem("accessToken");
const config = {
  headers: { Authorization: `Bearer ${token}` }
};

let dataJudul: string[] = [];
onMounted( async () => {
  axios.get(
    `http://localhost:3000/courses/${route.params.id}/sections`,
    config
  ).then((result) => {
    section = result.data.sections;
    console.log(`SECTION ${JSON.stringify(section)}`);
    // result.data.sections.forEach((element: object) => {
    //   section.push(element);
    // });
    // console.log(dataJudul);
    // return dataJudul;
  }).catch((err) => {
    alert(`${err}`)
  });
})

function onCreateTask() {
  axios.post(
    `http://localhost:3000/courses/${route.params.id}/sections/${task.section_id}/tasks`,
    task,
    config
  ).then((result) => {
    if (result) {
      alert(`Task successfuly created!`)
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