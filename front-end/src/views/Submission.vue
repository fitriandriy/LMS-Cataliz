<template>
    <Navigation />
    <div class="font-Roboto text-[#535353] mx-4 md:mx-[50px] lg:mx-[150px] mt-4 lg:mt-9 mb-2">
        <h1 class="font-bold text-lg md:text-2xl">Submission Belajar Fundamental Web Development</h1>
        <hr class="border border-[#cccccf] mt-4 mb-8">
        <div class="flex">
            <img class="w-[20px] h-[20px] mr-2" src="/task.png" alt="task icon">
            <div class="w-full">
                <a href="#" class="text-blue-600 underline">Task</a>
                <div>
                    <p class="text-red-500 my-2">Tenggat 14 Januari 2023 pukul 25.59 WIB</p>
                    <p>Ditambahkan pada 07 Januari 2023</p>
                    <p>Oleh Fitri Andriyani S.Kom,. M.Kom</p>
                </div>
                <p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere ut autem beatae exercitationem repellendus ducimus in aliquam voluptates enim? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum iure vitae voluptates ipsam repudiandae soluta saepe excepturi rem quis? Quia?</p>
            </div>
        </div>
        <hr class="border border-[#cccccf] mt-0 mb-2 md:mt-4 md:mb-8">
        <table class="w-full text-center text-md md:text-base table-auto border-separate border-spacing-0 md:border-spacing-2 border border-slate-400">
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Waktu Diterima</th>
                    <th>Berkas</th>
                    <th>Catatan</th>
                    <th>Status Review</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fitri Andriyani</td>
                    <td>25-03-2023 11:22:32</td>
                    <router-link :to="{ name: 'submission-detile', params: {id: 1} }">
                        <td class="text-blue-600 underline">Berkas</td>
                    </router-link>
                    <td>Lorem ipsum dolor sit amet.</td>
                    <td>Selesai</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Fitri Andriyani</td>
                    <td>25-03-2023 11:22:32</td>
                    <router-link :to="{ name: 'submission-detile', params: {id: 2} }">
                        <td class="text-blue-600 underline">Berkas</td>
                    </router-link>
                    <td>Lorem ipsum dolor sit amet.</td>
                    <td>Selesai</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Fitri Andriyani</td>
                    <td>25-03-2023 11:22:32</td>
                    <router-link :to="{ name: 'submission-detile', params: {id: 3} }">
                        <td class="text-blue-600 underline">Berkas</td>
                    </router-link>
                    <td>Lorem ipsum dolor sit amet.</td>
                    <td>Selesai</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Fitri Andriyani</td>
                    <td>25-03-2023 11:22:32</td>
                    <router-link :to="{ name: 'submission-detile', params: {id: 4} }">
                        <td class="text-blue-600 underline">Berkas</td>
                    </router-link>
                    <td>Lorem ipsum dolor sit amet.</td>
                    <td>Selesai</td>
                    <td>100</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';

export default {
    components: {
        Navigation,
    }
}
</script>