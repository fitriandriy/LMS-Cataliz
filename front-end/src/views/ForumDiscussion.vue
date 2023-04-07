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
                <div>
                    <textarea class="rounded-lg border border-[#777777] outline-none mt-2 p-2 h-28 md:h-[200px] w-full" name="" id="" rows="10" placeholder="Tulis di sini.."></textarea><br>
                    <Vbutton :buttonNames="'Buat Diskusi'" />
                </div>
            </div>
            <div class="md:col-start-3 md:col-end-7">
                <div class="flex justify-end">
                    <Vinput class="w-full mr-2" :type="'text'" placeholder="Cari berdasarkan kata kunci" />
                    <Vbutton :buttonNames="'CARI'" />
                </div>
                <div class="border border-[#777777] rounded-lg mt-2 p-5">
                    <router-link :to="{ name: 'discussion-detile', params: {id: 1} }">
                        <div class="bg-[#F4F4F5] p-5 rounded-lg mb-4">
                            <h2 class="font-semibold">Fitri Andriyani - <span class="text-[#02BC7D]">Fasilitator</span></h2>
                            <p>19.30 WIB - 8 Januari 2023</p>
                            <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..</p>
                        </div>
                    </router-link>
                    <router-link :to="{ name: 'discussion-detile', params: {id: 2} }">
                        <div class="bg-[#F4F4F5] p-5 rounded-lg mb-4">
                            <h2 class="font-semibold">Fitri Andriyani - <span class="text-[#02BC7D]">Fasilitator</span></h2>
                            <p>19.30 WIB - 8 Januari 2023</p>
                            <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Vinput from '../components/Input.vue';
import Vbutton from '../components/Button.vue';

export default {
    components: {
        Navigation,
        Vinput,
        Vbutton
    }
}
</script>