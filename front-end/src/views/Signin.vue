<template>
    <div class="grid grid-cols-1 lg:flex mx-auto w-3/4 md:w-2/4 my-4 md:my-14 font-Roboto min-h-screen bg">
        <div>
            <img src="../../webinar-img.png" class="w-[300px] md:w-[500px]" alt="webinar-image">
        </div>
        <div class="">
            <h2 class="w-80 md:w-96 font-bold text-2xl">Selamat Datang di<br>Learning Management System Cataliz.id</h2>
            <span class="inline-block my-8">Isi data diri di bawah untuk registrasi</span>
            <form @submit.prevent="onRegister()">
                <ol>
                    <li>
                        <label for="namaLengkap">Nama Lengkap</label>
                    </li>
                    <li>
                        <input v-model="transaction.username" class="w-80 md:w-96 rounded border border-gray-400 p-1 mb-4" type="text" id="namaLengkap">
                    </li>
                    <li>
                        <label for="email">Email</label>
                    </li>
                    <li>
                        <input v-model="transaction.email" class="w-80 md:w-96 rounded border border-gray-400 p-1 mb-4" type="email" id="email">
                    </li>
                    <li>
                        <label for="password">Password</label>
                    </li>
                    <li>
                        <input v-model="transaction.password" class="w-80 md:w-96 rounded border border-gray-400 p-1" type="password" id="password">
                    </li>
                    <li>
                        <label for="nomorTelepon">Nomor Telepon</label>
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
import api from '../utils/api';

let transaction = reactive({
    username: '',
    email: '',
    password: '',
    role: 'student'
}); 

const validation = ref([]);

const router = useRouter();

function onRegister() {
    axios.post(
        'http://localhost:3000/auth/register',
        transaction
    ).then((result) => {
        const token = result.data.token;
        console.log(`AKSES TOKEN ${token}`);
        api.putAccessToken(token);
        router.push({
            name: 'home'
        });
    }).catch((err) => {
        validation.value = err.response.data
    });
}

</script>
