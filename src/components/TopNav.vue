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
              v-model="tab"
              align-with-title
              class="d-none d-sm-flex"
            >
             
              <v-tab
                v-for="item in items"
                :key="item"
              >
                {{ item }}
              </v-tab>
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
          <v-list-item-group >
            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-image" title="Color gallery" value="color"></v-list-item>
                <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
                <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
            </v-list>
            
        </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

  </template>

  <script lang="ts">
  export default {
    el: '#app',
    data () {
      return {
        drawer: false,
        tab: null,
        items: [
          'web', 'shopping', 'videos', 'images', 'news',
        ],
      }
    }
  }
  </script>