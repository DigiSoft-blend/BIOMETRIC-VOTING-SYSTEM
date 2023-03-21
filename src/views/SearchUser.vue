<template>
    <!-- <v-card
      class="mx-auto mt mb-5"
      width="600"
    > -->
  <v-container-fluid class="mt">  
      <v-toolbar
        color="white"
        height="88"
        flat
      >
        <template v-slot:prepend>
          <router-link to="/users" class="link">
          <v-btn icon="mdi-arrow-left">
          </v-btn>
        </router-link>
        </template>
  
        <v-text-field
          v-model="search"
          clearable
          hide-details
          label="Search User"
          prepend-inner-icon="mdi-magnify"
          single-line
        ></v-text-field>
  
        <template v-slot:append>
          <!-- <v-btn icon="mdi-dots-vertical"></v-btn> -->
        </template>
      </v-toolbar>
  
   
      <v-divider></v-divider>
    <v-card :loading="loader">
      <v-list lines="three">
        <v-list-item
          v-for="(item, i) in searching"
          :key="i"
          link
        >
          <template v-slot:prepend>
            <v-avatar
              class="me-4 mt-2"
              rounded="0"
            >
              <v-img src="/Untitled-design.png" cover class="rounded-circle"></v-img>
            </v-avatar>
          </template>
  
         <router-link :to="{ name: 'user', params: { id : item.id }}">  
         <v-list-item-title
            class="text-uppercase font-weight-regular text-caption"
            v-text="item.userName +''+' ('+ item.email +')'"  
          ></v-list-item-title>
          <div v-text="item.state  +''+' ('+ 'senatorial district: ' + item.senatorialDistrict +')'"></div>
        </router-link>
        </v-list-item>
      
      </v-list>
    </v-card>  
    </v-container-fluid>
  </template>


<script lang="ts">
import {onMounted, computed, ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
  export default {
    setup(){
    
   const search = ref('')

   const counter = useCounterStore()

   const users = computed(()=> counter.getUsers)
   const loader = computed(()=>counter.userLoader)

   const keywords =  computed(()=> {
        if (!search.value) { return [] }

        const keywords = []

        for (const search of searching.value) {
          keywords.push(search.email)
        }

        return keywords
    })

     const searching = computed(()=> {
        if (!search.value) return users.value

        const newsearch = search.value.toLowerCase()
 
        return users.value.filter(item => {
          const text = item.email.toLowerCase()

          return text.indexOf(newsearch) > -1
        })
      })

      const loadusers = () => {
         counter.formErrorFlag1 = false
         counter.loadtUsers()
        }

      onMounted(()=>{
            loadusers()
       })

      return{
        search,
        keywords,
        searching,
        loader
      }
    }
  }
</script>

<style scoped>
  .mt{
    margin-top: 60px;
  }

  .link{
    text-decoration: none;
    color: inherit;
  }
</style>