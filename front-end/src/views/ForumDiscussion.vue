<template>
    <Navigation />
    <div class="font-Roboto text-[#535353] mx-4 md:mx-[50px] lg:mx-[150px] mt-4 lg:mt-9 mb-2">
        <!-- HEADER -->
        <div class="flex justify-center">
            <img class="h-[50px] md:h-[70px] lg:h-[100px] mr-3" src="/bubblechat-img.png" alt="">
            <h1 class="text-md md:text-xl lg:text-2xl">
                Selamat Datang di Forum Diskusi Kelas<br>
                <span class="font-semibold">Belajar Fundamental Web Development</span><br>
                Konsultasikan seputar materi belajar anda</h1>
        </div>
        <hr class="border border-[#cccccf] mt-4 mb-4">
        <div class="grid grid-cols-1 md:grid-cols-6 gap-2">
            <!-- ADD DISCUSSION -->
            <div class="md:col-start-1 md:col-end-3 rounded-sm mb-5">
                <Vbutton class="w-full" :buttonNames="'Buat Diskusi Baru'" />
                <form @submit.prevent="onCreateDiscussion()">
                    <textarea v-model="addDiscussion.comment" class="rounded-lg border border-[#777777] outline-none mt-2 p-2 h-28 md:h-[200px] w-full" name="" id="" rows="10" placeholder="Tulis di sini.."></textarea><br>
                    <Vbutton :buttonNames="'Buat Diskusi'" />
                </form>
            </div>
            <div class="md:col-start-3 md:col-end-7">
                <div class="flex justify-end">
                    <Vinput class="w-full mr-2" :type="'text'" placeholder="Cari berdasarkan kata kunci" />
                    <Vbutton :buttonNames="'CARI'" />
                </div>
                <!-- DISCUSSION LIST -->
                <div class="border border-[#777777] rounded-lg mt-2 p-5">
                    <div v-for="data in discussions" :key="data._id" class="bg-[#F4F4F5] p-5 rounded-lg mb-2">
                        <h2 class="font-semibold">{{ data.user[0].username }} - <span class="text-[#02BC7D]">Fasilitator</span></h2>
                        <p>{{ data.createdAt }}</p>
                        <p class="mt-5">{{ data.comment }}</p>
                    </div>
                    <!-- <router-link :to="{ name: 'discussion-detile', params: {id: data._id} }">
                    </router-link> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import Navigation from '../components/Navigation.vue';
import Vinput from '../components/Input.vue';
import Vbutton from '../components/Button.vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '../states/user';
const userStore = useUserStore();
const route = useRoute();
const router = useRouter();

let discussions = ref([
    {
        _id: '',
        comment: '',
        createdAt: '',
        createdBy_id: '',
        user: [
            {
                username: ''
            }
        ]
    }
]);

let addDiscussion = {
    course_id: route.params.id,
    createdBy_id: userStore.$state.user._id,
    comment: '',
}

const token = localStorage.getItem("accessToken");
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const onCreateDiscussion = () => {
    axios.post(
        `http://localhost:3000/courses/${route.params.id}/discussions`,
        addDiscussion,
        config
    ).then((result) => {
        alert(`Diskusi ditambahkan!`);

        window.location.reload()
    }).catch((err) => {
        alert(`${err}`)
    });
}

const check = (data) => {
    return data.course_id == route.params.id;
}

onMounted( async () => {
    axios.get(
      `http://localhost:3000/courses/${route.params.id}/discussions`,
      config)
    .then((result) => {
        discussions.value = result.data.discussions.filter(check);
        console.log(`DISKUSI ${JSON.stringify(discussions.value)}`);
    }).catch((err) => {
        console.log(err.response);
    });
});
</script>