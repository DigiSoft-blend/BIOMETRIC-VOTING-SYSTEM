<template>
 <v-container>
   <v-row gutters>
    <v-col
        cols="12"
        md="7"
        class="mx-auto"
      >

      <v-card
        v-for="asp in aspirants" :key=asp.id
            color="dark"
            theme="light"
            class="mb-4"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div class="border">
                
                <v-card-title class="text-h5">
                  {{ asp.aspirantName }}
                </v-card-title>

                <v-card-subtitle>{{ asp.aspirantRole }}</v-card-subtitle>
                <v-card-subtitle>{{ asp.state }}</v-card-subtitle>
                
                <v-card-actions>
                
    <!-- <v-avatar color="info" size="x-large" class="mx-5">
     
    </v-avatar> -->
    <h3 class="ms-2">Votes: {{ asp.aspirantVoteCount }}</h3>
    <!-- {{ asp.aspirantVoteCount }} -->
                </v-card-actions>
              </div>
              <v-avatar
                class="ma-3"
                size="50"
                rounded="50"
              >
                <v-img src="/Untitled-design.png"></v-img>
              </v-avatar>

              <v-avatar
                class="ma-3"
                size="70"
                rounded="0"
              >
                <v-img src="/user (2).png"></v-img>
              </v-avatar>
             
            </div>
            
          </v-card>



      
  
      </v-col>
    </v-row>
  </v-container> 

</template>

<script lang="ts">
import { useCounterStore } from '@/stores/counter'
import { computed, onMounted, ref } from 'vue'
export default {
    setup() {
      //   const items = ref([
      //  { type: 'subheader', title: 'Aspirants' },
      //   {
      //     prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      //     title: 'Brunch this weekend?',
      //     subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      //   },
      //   { type: 'divider', inset: true },
      //   {
      //     prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      //     title: 'Summer BBQ',
      //     subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      //   },
      //   { type: 'divider', inset: true },
      //   {
      //     prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      //     title: 'Oui oui',
      //     subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      //   },
      //   { type: 'divider', inset: true },
      //   {
      //     prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      //     title: 'Birthday gift',
      //     subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      //   },
      //   { type: 'divider', inset: true },
      //   {
      //     prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      //     title: 'Recipe to try',
      //     subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      //   },
      //   ])    
        
    const messages = ref( [
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'John Leider',
          title: 'Welcome to Vuetify!',
          excerpt: 'Thank you for joining our community...',
        },
        {
          color: 'red',
          icon: 'mdi-account-multiple',
          name: 'Social',
          new: 1,
          total: 3,
          title: 'Twitter',
        },
        {
          color: 'teal',
          icon: 'mdi-tag',
          name: 'Promos',
          new: 2,
          total: 4,
          title: 'Shop your way',
          exceprt: 'New deals available, Join Today',
        },
      ],)   
      
      const lorem = ref('Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.')

           
    

    const counter = useCounterStore()
  
     const aspirants = computed(()=>counter.aspirants)
     
     const  uservotecount = (id :any) => {
      counter.loadtVoteCount(id)
      const count = computed(()=>counter.voteCount)
      return count
     }

    onMounted(()=>{
       counter.loadtAspirants()
      //  counter.loadtVoteCount("silas")
    })

      
      return {
        messages,
        lorem, 
        aspirants,
        uservotecount
      }      
    },
}
</script>

<style scoped>
  .c-white{
    color: white;
  }
</style>