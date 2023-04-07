<template>
    <Navigation />
    <div class="font-Roboto text-[#535353] px-[70px] py-9">
        <h1 class="font-bold text-2xl text-center">Submission Belajar Fundamental Web Development</h1>
        <hr class="border border-[#cccccf] mt-4 mb-4">
        <div class="text-center border border-slate-400 p-3">
            <p class="font-semibold mb-2">Aktivitas Terbaru</p>
            <div class="flex justify-evenly font-medium">
                <p class="text-blue-600">Upload</p>
                <p>Review Selesai</p>
                <p>Diterima</p>
            </div>
        </div>
        <div>
            <h2 class="font-semibold text-lg my-3">Submission Info</h2>
            <div class="grid grid-cols-2 gap-2 mb-6">
                <p>Student Name : <span class="text-blue-600">Fitri Andriyani</span></p>
                <p>Submission ID : <span class="text-blue-600">1</span></p>
                <p>Course : <span class="text-blue-600">Belajar Fundamental Web Development</span></p>
                <p>Dikirim Pada : <span class="text-blue-600">25-03-2023 11:22:32</span></p>
                <p>Submission : <span class="text-blue-600 underline">Berkas</span></p>
                <p>Student Note : <span class="text-blue-600">Lorem ipsum dolor sit amet.</span></p>
            </div>
            <div class="grid grid-cols-2 gap-2 mb-6">
                <div>
                    <h2 class="font-semibold text-lg my-3">Pemenuhan Ketentuan Tugas</h2>
                    <form action="">
                        <input type="checkbox" id="criteria1" name="criteria1">
                        <label for="criteria1"> Mampu menambahkan data buku baru</label><br>
                        <input type="checkbox" id="criteria2" name="criteria2">
                        <label for="criteria2"> Memiliki minimal dua rak buku yakni "belum selesai dibaca" dan "sudah selesai dibaca"</label><br>
                        <input type="checkbox" id="criteria3" name="criteria3">
                        <label for="criteria3"> Dapat menghapus data buku</label><br><br>
                    </form>
                </div>
                <div>
                    <h2 class="font-semibold text-lg my-3">Tambahkan Catatan</h2>
                    <textarea class="rounded-lg border border-[#777777] outline-none px-2" rows="4" cols="50"></textarea>
                </div>
            </div>
            <h2 class="font-semibold text-lg my-3">Masukan Nilai (0-100)</h2>
            <form action="">
                <Vinput :type="'number'" />
            </form>
            <div class="text-center">
                <Vbutton class="my-6" :buttonNames="'SUBMIT'" />
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