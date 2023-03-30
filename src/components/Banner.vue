<template>
     <v-row
        justify="center"
        align="center"
        no-gutters
        class="pa-4 home-hero"
      >
       
        <v-col
        cols="12"
        sm="6"
        class="text-center ma-2"
        >
       
        <v-progress-linear
        :active="false"
        :indeterminate="true"
        absolute
        bottom
        color="secondary"
      ></v-progress-linear>
        
        <div
         class="mx-auto pa-4"
        >
          <h1 class="text-white">
            Welcome to BVS – the ultimate solution for secure and reliable voting!
          </h1>
          <!-- <p class="text-bold text-white"> 
            BVS is a revolutionary biometric voting system that combines cutting-edge biometric and GPS technologies to ensure that your vote is cast and counted accurately, securely, and without any possibility of fraud. Our system is designed to eliminate all the traditional problems associated with voting, such as vote rigging, duplicate voting, and tampering with ballot papers.
            Sign up for BVS today and experience the future of secure and reliable voting!
          </p> -->
          <!-- <p  class="text-bold text-white mt-4">
            BVS — 2023
          </p> -->
        </div>

        <!-- <router-link to="/registration" class="link">
          <v-btn
            variant="flat"
            color="secondary"
            class="rounded-pill btn1"
          > 

        <v-icon
          start
          icon="mdi-cloud-upload"
        ></v-icon>
            Register Now  
           </v-btn>
        </router-link> -->
      
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
              Fingerprint modalities supported
            </v-card-title>

            <v-card-subtitle>BVS provides a solution for large-scale biometric identification systems.</v-card-subtitle>

            <v-card-actions>
              <v-btn variant="text">
                Register to get a token Now
              </v-btn>
            </v-card-actions>
          </v-card>


          <v-card
            color="#1F7087"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="p">
                  BVS
                </v-card-title>

                <v-card-subtitle>Your vote counts !</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    class="ml-2"
                    variant="outlined"
                    size="small"
                  >
                    Learn More
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="100"
                rounded="0"
              >
                <v-img src="/Coat_of_arms_of_Nigeria.svg"></v-img>
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
                  Fast matching
                </v-card-title>

                <v-card-subtitle>Biometric data enrollment</v-card-subtitle>

                <v-card-actions>
                  <!-- <v-btn
                    class="ml-2"
                    icon="mdi-play"
                    variant="text"
                  ></v-btn> -->
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="100"
                rounded="0"
              >
                <v-img src="/fingerprint.jpg"></v-img>
              </v-avatar>
            </div>

            <v-divider></v-divider>


    <!-- <v-card-actions class="pa-4">
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
    </v-card-actions> -->
          </v-card>   
  </v-col>
 </v-row>  
</template>


<script lang="ts">

  import { useCounterStore } from '@/stores/counter'
  import { computed, onMounted, ref } from 'vue'

export default {
  setup() {
    const counter = useCounterStore()
    const Count = ref(0)
    Count.value = counter.count

    const reset = () => {
         counter.formErrorFlag1 = false
    }

     const aspirants = computed(()=>counter.aspirants)

    onMounted(()=>{
       reset()
       counter.loadtAspirants()
    })

    return { 
      Count, 
      aspirants
    }
  },
}
</script>

<style scoped>
     .link{
         color: inherit;
         text-decoration: none;
     }
  </style>