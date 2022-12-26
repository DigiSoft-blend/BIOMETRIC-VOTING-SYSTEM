<template>
  <VApp>
     <!-- Side bar -->
     <!-- <SideBarVue/> -->
     <TopNav/>
<VMain
class="home-hero"
>
       <!-- <ImageGallery/> -->

      <v-row
        justify="center"
        align="center"
        no-gutters
        style="height: 200px;"
        class="pa-4"
      >
       
        <v-col
        cols="12"
        sm="6"
        class="text-center"
        >
       
        <v-progress-linear
        :active="true"
        :indeterminate="true"
        absolute
        bottom
        color="secondary"
      ></v-progress-linear>
        
        <div
         class="mx-auto pa-4"
        >
          <h1 class="text-white">
            Biometric Voting System
          </h1>
          <p class="text-bold text-white">Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</p>
        </div>

     
            <v-btn
              variant="flat"
              color="secondary"
              class="rounded-pill btn1"
            > 

        <v-icon
          start
          icon="mdi-cloud-upload"
        ></v-icon>

            Get Sterted
           </v-btn>

          
         
        </v-col>
     
       
        
        
<v-col
cols="12"
sm="4"
>

<v-card
            color="black"
            theme="dark"
            class="mt-4"
          >
            <v-card-title class="text-h5">
              Unlimited music now
            </v-card-title>

            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

            <v-card-actions>
              <v-btn variant="text">
                Listen Now
              </v-btn>
            </v-card-actions>
          </v-card>


          <v-card
            color="#1F7087"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  Supermodel
                </v-card-title>

                <v-card-subtitle>Foster the People</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    class="ml-2"
                    variant="outlined"
                    size="small"
                  >
                    START RADIO
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                rounded="100"
              >
                <v-img src="/logo_size.jpg"></v-img>
              </v-avatar>
            </div>
          </v-card>


          <v-card
            color="black"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  Halcyon Days
                </v-card-title>

                <v-card-subtitle>Ellie Goulding</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    class="ml-2"
                    icon="mdi-play"
                    variant="text"
                  ></v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                rounded="100"
              >
                <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
              </v-avatar>
            </div>

            <v-divider></v-divider>

    <v-card-actions class="pa-4">
      Rate this App

      <v-spacer></v-spacer>

      <span class="text-grey-lighten-2 text-caption mr-2">
       5
      </span>

      <v-rating
        
        color="white"
        active-color="yellow-accent-4"
        half-increments
        hover
        size="18"
      ></v-rating>
    </v-card-actions>
          </v-card>


  <!-- <v-card
    class="mx-auto mt-4"
    max-width="500"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

     
    <v-card-item>
      <v-card-title>Cafe Badilico</v-card-title>

      <v-card-subtitle>
        <span class="mr-1">Local Favorite</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

   

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        variant="text"
       
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card> -->

  </v-col>
 </v-row> 
  

   
     </VMain>
  </VApp>
</template>

<script lang="ts">
 import SideBarVue from '../components/SideBar.vue';
 import ImageGallery from '../components/ImageGallery.vue';
 import TopNav from '../components/TopNav.vue'
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

 const items = ref([
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          },
        ])       

  return {colors, slides, items}      
   
  },
  components:{
    SideBarVue,
    ImageGallery,
    TopNav
  }
}
</script>
<style scoped>
  .home-hero {
    background: url('/pexels-scott-webb-593158.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 1000px #09ade864;
  
    /* clip-path: polrgba(175, 238, 247, 0.655)0%, 0% 100%); */
    
}

.btn1{
  height: 50px;
  width: 200px;
}
</style>

