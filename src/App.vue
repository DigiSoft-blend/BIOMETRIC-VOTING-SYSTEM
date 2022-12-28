
<script setup lang="ts">
 import HomeView from './views/HomeView.vue'
 import RegisterVue from './views/Register.vue';
 import TopNavVue from './components/TopNav.vue';
</script>


<template>
  <!-- <HomeView/> -->
  <!-- <RegisterVue/> -->
  <VApp>
    <TopNavVue/>
    <RouterView></RouterView>
  </VApp>  
</template>