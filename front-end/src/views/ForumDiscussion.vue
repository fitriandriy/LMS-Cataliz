<template>
    <Navigation />
    <div class="font-Roboto text-[#535353] px-[70px] py-9">
        <div class="flex justify-center">
            <img class="h-[100px] mr-3" src="/bubblechat-img.png" alt="">
            <h1 class="text-2xl">
                Selamat Datang di Forum Diskusi Kelas<br>
                <span class="font-semibold">Belajar Fundamental Web Development</span><br>
                Konsultasikan seputar materi belajar anda</h1>
        </div>
        <hr class="border border-[#cccccf] mt-4 mb-4">
        <div class="grid grid-cols-6 gap-2">
            <div class="col-start-1 col-end-3 rounded-sm border border-[#777777] p-1">
                <Vbutton class="w-full" :buttonNames="'Buat Diskusi Baru'" />
                <div>
                    <textarea class="rounded-lg border border-[#777777] outline-none mt-2 w-full" name="" id="" rows="10" placeholder="Tulis di sini.."></textarea><br>
                    <Vbutton :buttonNames="'Buat Diskusi'" />
                </div>
            </div>
            <div class="col-start-3 col-end-7">
                <div class="flex justify-end">
                    <Vinput class="w-3/4 mr-2" :type="'text'" />
                    <Vbutton :buttonNames="'CARI'" />
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