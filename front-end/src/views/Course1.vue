<template>
  <Navigation />
  <div class="font-Roboto text-[#535353] px-[70px] py-9">
      <div class="grid grid-cols-2 gap-4">
          <img class="h-48 rounded-lg" src="/course.jpg" alt="course-image">
          <div>
              <h1 class="font-bold text-2xl">Belajar Fundamental Web Development</h1>
              <span class="inline-block mt-6 mb-4">Dibuat oleh: Fitri Andriyani S.Kom,. M.Kom</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus optio provident ducimus quod amet quis facilis nemo libero aut? Repellat ipsam a vero dicta nemo quaerat blanditiis optio quisquam minima! lorem60</p>
          </div>
      </div>
      <hr class="border border-[#cccccf] mt-4 mb-8">
      <div class="grid grid-cols-2 gap-4">
          <div>
              <h2 class="font-bold text-xl mb-2">Deskripsi</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi explicabo quisquam eum at repellendus voluptates, alias molestias commodi laudantium, magni aspernatur. Voluptate aperiam quas ut fugit assumenda aut quidem quis. Sit ab molestias, exercitationem animi possimus odio architecto, tempora repudiandae deserunt, iure vero vitae eaque fuga dolor. Ipsa, eligendi!</p>
          </div>
          <div>
              <h2 class="font-bold text-xl mb-2">Prasyarat</h2>
              <ol>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Text Editor</li>
              </ol>
          </div>
      </div>
      <hr class="border border-[#cccccf] mt-4 mb-8">
      <div>
          <h2 class="font-bold text-xl mb-2">Koridor Kelas</h2>
          <div class="border border-[#cccccf] rounded-lg">
              <div class="flex border border-[#cccccf] rounded-lg py-3 pl-6 bg-[#F4F4F5]">
                  <h2 class="font-bold text-lg mb-2">1. Fundamental Javascript</h2>
                  <button v-if="sectionOpen !== 'Fundamental Javascript'" @click="showSection('Fundamental Javascript')" class="ml-2 p-1"><img class="w-[20px] pb-1" src="/arrow-to-show.png" alt=""></button>
                  <button v-if="sectionOpen == 'Fundamental Javascript'" @click="showSection('')" class="ml-2 p-1"><img class="w-[20px] pb-1" src="/arrow-to-hide.png" alt=""></button>
              </div>
              <div v-if="sectionOpen == 'Fundamental Javascript'" class="transform-gpu transition-transform ease-in-out duration-300">
                  <div :class="{ 'translate-y-10': sectionOpen !== 'Fundamental Javascript', 'translate-y-0': sectionOpen == 'Fundamental Javascript' }" class="p-5 transition-all transform-gpu ease-in-out delay-300">
                      <div class="flex my-4">
                          <img class="w-[20px] h-[20px] mr-2" src="/video.png" alt="video icon">
                          <div>
                              <a href="#" class="text-blue-600 underline">Introduction</a>
                              <p class="my-4 w-full ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere ut autem beatae exercitationem repellendus ducimus in aliquam voluptates enim? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum reiciendis non eos harum laborum consectetur quos voluptas quasi quis quaerat accusamus rerum dolore beatae facere commodi eius, nemo dicta? Nam autem id dolore iure corporis. Tempora voluptatum dolorum corporis fugit animi quae vitae eligendi suscipit delectus praesentium assumenda quasi earum quod adipisci, iure, eaque ad accusantium aliquid iste voluptates. Ipsam dignissimos tempore optio nisi molestias quae, nesciunt aperiam officia doloremque quos odio totam asp</p>
                          </div>
                      </div>
                      <div class="flex">
                          <img class="w-[20px] h-[20px] mr-2" src="/task.png" alt="task icon">
                          <div class="w-full">
                              <a href="#" class="text-blue-600 underline">Task</a>
                              <div class="flex justify-between">
                                  <div>
                                      <p class="text-red-500 my-2">Tenggat 14 Januari 2023 pukul 25.59 WIB</p>
                                      <p>Ditambahkan pada 07 Januari 2023</p>
                                      <p>Oleh Fitri Andriyani S.Kom,. M.Kom</p>
                                  </div>
                                  <router-link :to="{ name: 'submission' }" class="text-blue-600 underline pr-8">Daftar tugas diserahkan</router-link>
                              </div>
                              <p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere ut autem beatae exercitationem repellendus ducimus in aliquam voluptates enim? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum iure vitae voluptates ipsam repudiandae soluta saepe excepturi rem quis? Quia?</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div> 
          </div>
      </div>
      <div class="relative">
          <router-link :to="{ name: 'discussion' }">
              <img class="w-[70px] fixed right-3 bottom-3" src="/chat-img.png" alt="chat image">
          </router-link>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navigation from '../components/Navigation.vue';
const sectionOpen = ref("");

function showSection(title) {
  sectionOpen.value = title;
}
</script>