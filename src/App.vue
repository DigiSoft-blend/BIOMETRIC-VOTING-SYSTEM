
<script setup lang="ts">
 import HomeView from './views/HomeView.vue'
 import RegisterVue from './views/Register.vue';
 import TopNavVue from './components/TopNav.vue';
</script>


<template>
  <!-- <HomeView/> -->
  <!-- <RegisterVue/> -->
  <VApp 
    class="colr"
  >
    <TopNavVue/>
    <RouterView></RouterView>
  </VApp>  
</template>

<style scoped>
  .colr{
    background-color: rgba(224, 224, 224, 0.153);
  }
</style>