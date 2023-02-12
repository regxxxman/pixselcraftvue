<script setup>
import Cursor from '@/components/Cursor.vue';
import Cube from '@/components/Cube.vue'

import { onMounted } from 'vue';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

</script>

<template>

  <Cursor />

  <div class="bg flex flex-col min-h-screen ">

    <!-- <CanvasVue class=" absolute w-full" /> -->
    <Cube class="absolute" />

    <div class="flex flex-col lg:flex-row mx-5 lg:space-x-4 pt-16 text-gray-200 my-auto justify-center">

      <div class="basis-1/4">
        <div class="mt-5 p-3 bg-gray-500/25  backdrop-blur-xl rounded-md">
          <h1 class="font-bold text-2xl"><span class="text-red-500 ">PixselCraft</span> - игровой проект
            Minecraft.
          </h1>
          <p class="text-gray-300 pt-1">Каждый игрок ищет уютную атмосферу и интересный геймплей,
            отзывчивую
            модерацию и баланс на сервере. <br>
            Всё это есть на проекте нового поколения - PixselCraft!
          </p>
        </div>

        <div class="flex justify-center pt-2">
          <a
            class="btn w-full text-center  text-white  bg-cyan-500/25 hover:bg-cyan-500/50 hover:scale-110 ease-out transition backdrop-blur-xl p-2 mr-1 rounded-xl">
            Войти
          </a>
          <a
            class="btn w-full text-center  text-cyan-500  bg-cyan-900/25 hover:bg-cyan-900/50 hover:scale-110 ease-out transition backdrop-blur-xl p-2 ml-1  rounded-xl">
            Регистрация
          </a>

        </div>
      </div>

      <div class="basis-1/2 my-auto flex flex-col space-y-3 pt-5 w-full">

        <h1 class="font-bold text-2xl bg-gray-500/25 backdrop-blur-xl rounded-md p-3">
          <span class="text-orange-500">Онлайн</span> на наших серверах
          <p class="text-base text-left font-light ">
            У наших серверов разные наборы модов и востребованность у игроков
          </p>
        </h1>
        <div v-for="server in servers" :key="server.Name" class="pt-2">
          <div class="pb-1 flex flex-col sm:flex-row sm:space-x-2">
            <p class="font-bold text-xl z-10"><span class="text-red-500 ">{{ server.Name }}</span> {{
              server.online
            }}
              из 100</p>
            <div class="flex space-x-2">
              <span
                class="py-0.5 px-2 bg-gray-500/25 backdrop-blur-xl rounded-xl  hover:underline decoration-cyan-500"><a
                  href="">{{ server.mods[0] }}</a></span>
              <span
                class="py-0.5 px-2 bg-gray-500/25 backdrop-blur-xl rounded-xl  hover:underline decoration-cyan-500"><a
                  href="">{{ server.mods[1] }}</a></span>
              <span
                class="py-0.5 px-2 bg-gray-500/25 backdrop-blur-xl rounded-xl  hover:underline decoration-cyan-500">...</span>

            </div>
          </div>

          <div class="w-full bg-gray-500/40 backdrop-blur-xl rounded-full p-1 mt-0.5">
            <div
              class=" bg-gradient-to-r  from-green-300 via-blue-500 to-purple-600 animate-text p-2 backdrop-blur-xl text-base font-light text-blue-100 text-center leading-none rounded-full"
              :style="'width:' + server.online + '%'"> {{ server.online }}%</div>
          </div>
        </div>


      </div>
    </div>
  </div>

  <swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>

  <div class="text-white min-h-screen bg2">
    <h1>Новости</h1>
  </div>



</template>

<script>
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  data() {
    return {
      servers: [
        { Name: "HiTech", online: 35, mods: ['AE2', 'IndustrialCraft 2'] },
        { Name: "DarkSide", online: 10, mods: ['zalupa', 'IndustrialCraft 2'] },
      ]
    }
  },
  onMounted() {

  },

}
</script>

<style lang="sass" scoped>
.bg 
    background: url('../src/assets/BG.jpg') no-repeat
    background-size: 100% 100%


.bg2 
    background: url('../src/assets/bg_site2.jpg') no-repeat
    background-size: 100% 100%

</style>

