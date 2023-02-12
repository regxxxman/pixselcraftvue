<script setup>
import HeaderVue from './components/HeaderVue.vue';
</script>

<template>
  <HeaderVue />

  <!-- <nav class="pt-20">

    <router-link class="pt-20" to="/">Home</router-link> | <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav> -->
  <main>
    <router-view />
  </main>
</template>

<style>

</style>
