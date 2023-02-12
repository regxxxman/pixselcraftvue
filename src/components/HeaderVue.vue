<template>
    <div class="header fixed w-full p-3 bg-gray-500/25 backdrop-blur-xl rounded-b-2xl z-50">
        <div class="flex">
            <div
                class="flex-1 sm:text-3xl text-2xl sm:py-0 py-1 pl-5 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                <a href="">PixselCraft</a>
            </div>
            <div class="list text-gray-400 py-2 lg:visible sm:block hidden">
                <ul class="flex ">
                    <li class="lg:px-9 sm:px-3 px-1 hover:text-gray-300"><router-link to="/"> Главная </router-link>
                    </li>
                    <li class="lg:px-9 sm:px-3 px-1 hover:text-gray-300"><router-link to="/about"> О нас</router-link>
                    </li>
                    <li class="lg:px-9 sm:px-3 px-1 hover:text-gray-300"><router-link to="/contact"> Начать
                            играть</router-link></li>
                </ul>
            </div>
            <div class=" sm:flex hidden">
                <a
                    class="btn  text-white  bg-cyan-500/30  hover:bg-cyan-500/50 hover:scale-110 ease-out transition p-2 px-5 mx-1 rounded-xl">
                    Войти</a>
                <a
                    class="btn  text-cyan-500  bg-cyan-900/30 hover:bg-cyan-900/50 hover:scale-110 ease-out transition p-2 px-5 mx-1 rounded-xl">
                    Регистрация</a>
            </div>
            <div class="sm:hidden flex">
                <a
                    class="btn animate-text  bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 hover:scale-110 ease-out transition p-2 px-5 mx-1 rounded-xl">
                    <span class="material-symbols-outlined text-white align-top">
                        menu
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(() => {

    let lastScroll = 0;
    const defaultOffset = 200;
    const className = "-translate-y-16"
    const header = document.querySelector('.header');

    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains(className);

    window.addEventListener('scroll', () => {
        if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
            //scroll down
            header.classList.add(className);
        }
        else if (scrollPosition() < lastScroll && containHide()) {
            //scroll up
            header.classList.remove(className);
        }

        lastScroll = scrollPosition();
    })
})

</script>

<style lang="sass">
@import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
.header 
    transition: .3s cubic-bezier(.75, -1.27,.3,2.33) transform
</style>