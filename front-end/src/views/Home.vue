<template>
    <Navigation />
    <div class="font-Roboto text-[#535353] px-[70px] py-9">
        <div class="flex justify-between">
            <span class="font-bold text-[24px]">STUDENT DASHBOARD</span>
            <div class="flex justify-end w-2/4">
                <Vinput :type="'text'" class="mr-1 w-9/12" />
                <Vbutton :buttonNames="'Cari'" />
            </div>
        </div>
        <div class="my-4 font-medium text-lg content-end">
            <select name="" id="">
                <option value="front-end">Daftar Kelas Front End</option>
                <option value="back-end">Daftar Kelas Back End</option>
            </select>
        </div>
        <div class="grid grid-cols-4 gap-4">
            <div class="bg-[#F4F4F5] rounded-xl">
                <div class>
                    <img src="/webinar-img.png" alt="">
                </div>
                <div class="px-4 pb-4">
                    <router-link :to="{ name: 'course', params: {id: 1} }" class="font-semibold">Pengelolaan Data Menggunakan DOM dan Web Storage</router-link>
                    <p class="mt-3">Oleh: Fitri Andriyani S.Kom,.M.Kom</p>
                </div>
            </div>
            <div class="bg-[#F4F4F5] rounded-xl">
                <div>
                    <img src="/webinar-img.png" alt="">
                </div>
                <div class="px-4 pb-4">
                    <router-link :to="{ name: 'course', params: {id: 2} }" class="font-semibold">Pengelolaan Data Menggunakan DOM dan Web Storage</router-link>
                    <p class="mt-3">Oleh: Fitri Andriyani S.Kom,.M.Kom</p>
                </div>
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