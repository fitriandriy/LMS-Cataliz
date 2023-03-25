<template>
    <div class="flex mx-auto w-2/4 my-14 font-Roboto min-h-screen bg">
        <div>
            <img src="../../webinar-img.png" alt="webinar-image">
        </div>
        <div class="">
            <h2 class="w-96 font-bold text-2xl">Selamat Datang di<br>Learning Management System Cataliz.id</h2>
            <span class="inline-block my-8">Isi data diri di bawah untuk registrasi</span>
            <form action="">
                <ol>
                    <li>
                        <label for="namaLengkap">Nama Lengkap</label>
                    </li>
                    <li>
                        <input class="w-96 rounded border border-gray-400 p-1 mb-4" type="text" id="namaLengkap">
                    </li>
                    <li>
                        <label for="email">Email</label>
                    </li>
                    <li>
                        <input class="w-96 rounded border border-gray-400 p-1 mb-4" type="email" id="email">
                    </li>
                    <li>
                        <label for="password">Password</label>
                    </li>
                    <li>
                        <input class="w-96 rounded border border-gray-400 p-1" type="password" id="password">
                    </li>
                    <li>
                        <label for="nomorTelepon">Nomor Telepon</label>
                    </li>
                    <li>
                        <input class="w-96 rounded border border-gray-400 p-1 mb-4" type="text" id="nomorTelepon">
                    </li>
                </ol>
                <button type="submit" class="bg-primaryGreen text-white rounded p-1 my-6">DAFTAR</button>
            </form>
            <span>Sudah punya akun? <RouterLink :to="{ name: 'login' }"><u class="hover:text-sky-600">Daftar</u></RouterLink></span>
        </div>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>

</style>