<template>
      <v-app-bar
        color="teal-darken-4"
      >
       <!-- image="https://picsum.photos/1920/1080?random" -->
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

       
        <template v-slot:append>
          <v-app-bar-nav-icon @click="drawer = true"
           class="d-flex d-sm-none"
          >
          </v-app-bar-nav-icon>

          <v-tabs
             
              align-with-title
              class="d-none d-sm-flex"
            >
            <router-link to="/" class="link"><v-tab>Home</v-tab></router-link>
            <router-link to="/registration" class="link"><v-tab>Register</v-tab></router-link>
              <v-tab>News</v-tab>
              <v-tab>Help</v-tab>
         </v-tabs>
        </template>
       
        
         <v-list-item
            prepend-avatar="/logo_size.jpg"
          >
           <span class="d-none d-sm-flex">Biometric Voting System</span> 
        </v-list-item>
       
        
        <v-spacer></v-spacer>

       
      </v-app-bar>

         


      <!-- Add a navigation bar -->
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
       
        class="d-flex position-fixed"
      >
        <v-list
          nav
          dense
        >
          <!-- <v-list-item-group > -->
            <v-list density="compact" nav>
              <router-link to="/" class="link"><v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item></router-link>
              <router-link to="/registration" class="link"><v-list-item prepend-icon="mdi-account" title="Register" value="register"></v-list-item></router-link>
              <router-link to="/" class="link"><v-list-item prepend-icon="mdi-earth" title="News" value="News"></v-list-item></router-link>
              <router-link to="/" class="link"><v-list-item prepend-icon="mdi-help" title="Help" value="Help"></v-list-item></router-link>
            </v-list>
            
        <!-- </v-list-item-group> -->
        </v-list>
      </v-navigation-drawer>

  </template>

  <script lang="ts">
  import { ref } from 'vue';
  export default {
    setup(){
      const drawer = ref(false)
      const tab = ref(null)
      return {drawer,tab}
    }
    // el: '#app',
    // data () {
    //   return {
    //     drawer: false,
    //     tab: null,
    //     items: [
    //       'web', 'shopping', 'videos', 'images', 'news',
    //     ],
    //   }
    // }
  }
  </script>

  <style scoped>
     .link{
         color: inherit;
         text-decoration: none;
     }
  </style>