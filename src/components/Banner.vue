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
            Biometric Voting System
          </h1>
          <p class="text-bold text-white">Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</p>
        </div>

        <router-link to="/registration" class="link">
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
        </router-link>
      
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
                size="100"
                rounded="0"
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
                size="100"
                rounded="0"
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
  </v-col>
 </v-row>  
</template>

<style scoped>
     .link{
         color: inherit;
         text-decoration: none;
     }
  </style>