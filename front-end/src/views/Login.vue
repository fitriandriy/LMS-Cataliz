<template>
    <div class="grid grid-cols-1 lg:flex bg-white md:bg-[#F4F4F5] rounded-xl p-8 w-full mx-auto md:w-3/4 xl:w-2/4 md:mt-12 font-Roboto md:shadow-xl md:shadow-slate-400">
        <div>
            <img src="../../webinar-img.png" class="w-[300px] md:w-[200px] lg:w-[500px] mx-auto" alt="webinar-image">
        </div>
        <div class="mx-auto">
            <h2 class="w-96 font-bold text-2xl">Selamat Datang di<br>Learning Management System Cataliz.id</h2>
            <span class="inline-block my-3">Isi username dan password untuk dapat masuk</span>
            <form action="">
                <ol>
                    <li>
                        <label for="username">Username</label>
                    </li>
                    <li>
                        <input v-model="transaction.username" class="w-80 md:w-96 rounded border border-gray-400 p-1 mb-4" type="text" id="username">
                    </li>
                    <li>
                        <label for="password">Password</label>
                    </li>
                    <li>
                        <input v-model="transaction.password" class="w-80 md:w-96 rounded border border-gray-400 p-1" type="password" id="password">
                    </li>
                </ol>
                <button type="submit" @click="login" class="bg-primaryGreen text-white rounded p-1 my-6">MASUK</button>
            </form>
            <span>Belum punya akun? <RouterLink :to="{ name: 'signin' }"><u class="hover:text-sky-600">Daftar</u></RouterLink></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { reactive, ref } from 'vue';
import axios from 'axios';
import api from '../utils/api';
const validation = ref([]);
const router = useRouter();

let transaction = reactive({
    username: '',
    password: ''
}); 

const login = () => {
    axios.post(
        'http://localhost:3000/auth/login',
        transaction
    ).then((result) => {
        const token = result.data.token;
        localStorage.setItem("authenticated", "true");
        localStorage.setItem("username", transaction.username);
        api.putAccessToken(token);

        router.push({
            name: 'home'
        });
    }).catch((err) => {
        validation.value = err.response.data
    });
}

</script>