<template>
  <!-- <TopNav/> -->
  <VMain>
    <Banner/>
  </VMain>
  <RowContent1/>
  <RowContent2/>
  <Footer/>

</template>

<script lang="ts">
 import SideBarVue from '../components/SideBar.vue';
 import ImageGallery from '../components/ImageGallery.vue';
 import TopNav from '../components/TopNav.vue';
 import Footer from '@/components/Footer.vue';
 import Banner from '@/components/Banner.vue';
 import RowContent1 from '@/components/RowContent1.vue';
 import RowContent2 from '@/components/RowContent2.vue';
 import { ref } from 'vue';
export default {
  setup() {

  const colors = ref([
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ])

 const slides = ref([
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ])   

 
  return {colors, slides}      
   
  },
  components:{
    Banner,
    RowContent1,
    RowContent2,
    SideBarVue,
    ImageGallery,
    Footer
  }
}
</script>
<style scoped>
  .home-hero {
    /* background: url('/pexels-scott-webb-593158.jpg'); */
    background: url('/istockphoto-1202620313-612x612.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 1000px #010101c1;
  
    /* clip-path: polrgba(175, 238, 247, 0.655)0%, 0% 100%); */
    
}

.btn1{
  height: 50px;
  width: 200px;
}
</style>

