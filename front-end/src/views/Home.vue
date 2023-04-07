<template>
    <Navigation />
    <div class="font-Roboto text-[#535353] px-4 md:px-[70px] py-2 md:py-9">
        <!-- HEADER AND SEARCH BAR -->
        <div class="md:flex md:justify-between">
            <span class="font-bold text-lg md:text-[24px]">STUDENT DASHBOARD</span>
            <div class="w-100% mt-3 md:mt-0 md:flex md:justify-end md:w-2/4">
                <Vinput :type="'text'" class="h-[30px] md:h-[35px] mr-1 md:w-9/12" placeholder="Cari berdasarkan judul" />
                <Vbutton :buttonNames="'Cari'" class="h-[30px] md:h-[35px]" />
            </div>
        </div>
        <hr class="mt-[15px] border-1 border-[grey] md:invisible">
        <div class="my-4 font-medium text-base md:text-lg content-end mb-8">
            <select name="" id="">
                <option value="front-end">Daftar Kelas Front End</option>
                <option value="back-end">Daftar Kelas Back End</option>
            </select>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div v-for="i in 10">
                <router-link :to="{ name: 'course', params: {id: i} }">
                    <div class="bg-[#F4F4F5] rounded-xl hover:-translate-y-2 hover:shadow-lg hover:shadow-[grey]">
                        <div class>
                            <img src="/webinar-img.png" alt="">
                        </div>
                        <div class="px-4 pb-4">
                            <h2 class="font-semibold">Pengelolaan Data Menggunakan DOM dan Web Storage</h2>
                            <p class="mt-3">Oleh: Fitri Andriyani S.Kom,.M.Kom</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Vbutton from '../components/Button.vue';
import Vinput from '../components/Input.vue';

export default {
    components: {
        Navigation,
        Vbutton,
        Vinput,
    }
}
</script>