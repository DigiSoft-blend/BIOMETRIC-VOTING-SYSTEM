<template>
    <v-footer
      class=" text-center d-flex flex-column padd"
    >
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="text"
        ></v-btn>
      </div>
  
      <div class="pt-0">
        BVS is a revolutionary biometric voting system that combines cutting-edge biometric and GPS technologies to ensure that your vote is cast and counted accurately, securely, and without any possibility of fraud. Our system is designed to eliminate all the traditional problems associated with voting, such as vote rigging, duplicate voting, and tampering with ballot papers
      </div>
  
      <v-divider></v-divider>
  
      <div>
        {{ new Date().getFullYear() }} — <strong>BVS</strong>
      </div>
    </v-footer>
  </template>


<script lang="ts">
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>
 .padd{
    padding-bottom: 100px;
    background: linear-gradient(to top right, rgba(19,84,122,.8), rgba(128,208,199,.8));
    color: white;
 }
</style>