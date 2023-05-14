<template>
    <div class="grid grid-cols-1 lg:flex bg-white md:bg-[#F4F4F5] rounded-xl p-8 w-full mx-auto md:w-3/4 xl:w-2/4 md:mt-12 font-Roboto md:shadow-xl md:shadow-slate-400">
        <div>
            <img src="../../webinar-img.png" class="w-[300px] md:w-[200px] lg:w-[500px] mx-auto" alt="webinar-image">
        </div>
        <div class="mx-auto">
            <h2 class="w-80 md:w-96 font-bold text-2xl">Selamat Datang di <br>Learning Management System Cataliz.id</h2>
            <span class="inline-block my-3">Isi data diri di bawah untuk registrasi</span>
            <form @submit.prevent="onRegister()">
                <ol>
                    <li>
                        <label for="namaLengkap">Nama Lengkap</label>
                    </li>
                    <li>
                        <input v-model="dataUser.username" class="w-80 md:w-96 rounded border border-gray-400 p-1 mb-4" type="text" id="namaLengkap">
                    </li>
                    <li>
                        <label for="email">Email</label>
                    </li>
                    <li>
                        <input v-model="dataUser.email" class="w-80 md:w-96 rounded border border-gray-400 p-1 mb-4" type="email" id="email">
                    </li>
                    <li>
                        <label for="password">Password</label>
                    </li>
                    <li>
                        <input v-model="dataUser.password" class="w-80 md:w-96 rounded border border-gray-400 p-1 mb-4" type="password" id="password">
                    </li>
                    <li>
                        <label for="nomorTelepon">Nomor Telepon</label>
                    </li>
                    <li>
                        <input v-model="dataUser.phone_number" class="w-80 md:w-96 rounded border border-gray-400 p-1" type="text" id="nomorTelepon">
                    </li>
                </ol>
                <button type="submit" class="bg-primaryGreen text-white rounded p-1 my-6">DAFTAR</button>
            </form>
            <span>Sudah punya akun? <RouterLink :to="{ name: 'login' }"><u class="hover:text-sky-600">Masuk</u></RouterLink></span>
        </div>
    </div>
</template>

<script setup lang="ts">

import { reactive, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import axios from 'axios';

let dataUser = reactive({
    username: '',
    email: '',
    password: '',
    phone_number: '',
    role: 'student'
}); 

const validation = ref([]);

const router = useRouter();

function onRegister() {
    axios.post(
        'http://localhost:3000/auth/register',
        dataUser
    ).then((result) => {
        alert('Berhasil mendaftar, silahkan login.');
        router.push({
            name: 'login'
        });
    }).catch((err) => {
        validation.value = err.response.data
    });
}

</script>
