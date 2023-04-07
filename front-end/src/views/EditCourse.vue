<template>
  <Navigation />
  <div class="font-Roboto text-[#535353] mx-4 md:mx-[50px] lg:mx-[270px] mt-4 lg:mt-9 mb-2 border border-[#cccccf] rounded-lg">
    <div class="pt-[20px] px-[10px] md:px-[50px] pb-[20px]">
      <header class="flex justify-between mb-4 md:mb-0">
        <h2 class="font-bold text-xl mb-2">Edit Course</h2>
        <Vbutton :buttonNames="'HAPUS COURSE'" class="bg-[red]" />
      </header>
      <form action="" class="flex flex-col">
        <label>Judul Course (100 Karakter)</label>
        <Vinput :type="'text'" class="mb-4" />
        <label>Deskripsi</label>
        <textarea class="mb-4 px-2 rounded-lg border border-[#777777] outline-none" rows="4" cols="50"></textarea>
        <label>Thumbnail (jpg/jpeg/png)</label>
        <Vinput :type="'file'" class="mb-4" />
        <label>Prerequisites</label>
        <Vinput :type="'text'" class="mb-2" />
        <Vinput :type="'text'" class="mb-2" />
        <Vinput :type="'text'" class="mb-2" />
        <Vbutton :buttonNames="'TAMBAH KOLOM'" class="w-[155px]" />
      </form>
    </div>
  </div>
  <Vbutton :buttonNames="'SIMPAN'" class="w-[100px] ml-[15px] md:ml-[50px] lg:ml-[270px] mb-10" />
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Vinput from '../components/Input.vue';
import Vbutton from '../components/Button.vue';

export default {
    components: {
        Navigation,
        Vinput,
        Vbutton,
    }
}
</script>