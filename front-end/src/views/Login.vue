<template>
    <div class="grid grid-cols-1 lg:flex mx-auto w-3/4 md:w-2/4 my-4 md:my-14 font-Roboto min-h-screen bg">
        <div>
            <img src="../../webinar-img.png" class="w-[300px] md:w-[500px]" alt="webinar-image">
        </div>
        <div class="">
            <h2 class="w-96 font-bold text-2xl">Selamat Datang di<br>Learning Management System Cataliz.id</h2>
            <span class="inline-block my-8">Isi email dan password untuk dapat masuk</span>
            <form action="">
                <ol>
                    <li>
                        <label for="email">Email</label>
                    </li>
                    <li>
                        <input class="w-80 md:w-96 rounded border border-gray-400 p-1 mb-4" type="email" id="email">
                    </li>
                    <li>
                        <label for="password">Password</label>
                    </li>
                    <li>
                        <input class="w-80 md:w-96 rounded border border-gray-400 p-1" type="password" id="password">
                    </li>
                </ol>
                <button type="submit" class="bg-primaryGreen text-white rounded p-1 my-6">MASUK</button>
            </form>
            <span>Belum punya akun? <RouterLink :to="{ name: 'signin' }"><u class="hover:text-sky-600">Daftar</u></RouterLink></span>
        </div>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>

</style>