<template>
 <v-container>
   <v-row gutters>
    <v-col
        cols="12"
        sm="5"
      >

      <v-card
        v-for="asp in aspirants" :key=asp.id
            color="dark"
            theme="dark"
            class="mb-4"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div class="border">
                <v-card-title class="text-h5">
                  {{ asp.userName }}
                </v-card-title>

                <v-card-subtitle>Aspiring For {{ asp.role }}</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    class="ms-2"
                    variant="outlined"
                    size="small"
                  >
                   Vote
                  </v-btn>
    <v-avatar color="info" size="x-large" class="mx-5">
      64
    </v-avatar>
                </v-card-actions>
              </div>
              
              <v-avatar
                class="ma-3"
               
                rounded="0"
              >
                <v-img src="/Untitled-design.png"></v-img>
              </v-avatar>

              <v-avatar
                class="ma-3"
                size="125"
                rounded="0"
              >
                <v-img src="/user (2).png"></v-img>
              </v-avatar>

            </div>
          </v-card>

<!-- <v-card
    v-for="asp in aspirants" :key=asp.id
    class="mx-auto mb-3"
    max-width="300"
    max-height="200"
    rounded="0"
  >
    <v-img
      height="100%"
      cover
      src="/istockphoto-1202620313-612x612.jpg"
    >
      <v-avatar
        color="blue"
        size="150"
        rounded="0"
      >
        <v-img cover src="/user (2).png"></v-img>
      </v-avatar>


    <v-avatar color="info" size="x-large" class="mx-5">
      64
    </v-avatar>
  
      <v-list-item
        class="text-white"
        :title= asp.userName
        :subtitle= asp.role 
      >
    </v-list-item>
    </v-img>
  </v-card> -->


      
      <!-- <v-expansion-panels variant="popout" class="pa-4 d-none d-sm-flex">
    <v-expansion-panel
      v-for="(message, i) in messages"
      :key="i"
      hide-actions
    >
      <v-expansion-panel-title>
        <v-row
          align="center"
          class="spacer"
          no-gutters
        >
          <v-col
            cols="4"
            sm="2"
            md="1"
          >
            <v-avatar
              size="36px"
            >
              <v-img
                v-if="message.avatar"
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              ></v-img>
              <v-icon
                v-else
                :color="message.color"
                :icon="message.icon"
              ></v-icon>
            </v-avatar>
          </v-col>


          

          <v-col
            class="hidden-xs-only text-left ml-2"
            sm="5"
            md="3"
          >
            <strong v-html="message.name"></strong>
            <span
              v-if="message.total"
              class="text-grey"
            >
              &nbsp;({{ message.total }})
            </span>
          </v-col>

          <v-col
            class="text-no-wrap text-left"
            cols="5"
            sm="3"
          >
            <v-chip
              v-if="message.new"
              :color="`${message.color}-lighten-1`"
              class="ml-0 mr-2"
              label
              small
            >
              {{ message.new }} new
            </v-chip>
            <strong v-html="message.title"></strong>
          </v-col>


          

          <v-col
            v-if="message.excerpt"
            class="text-medium-emphasis text-truncate hidden-sm-and-down"
          >
            &mdash;
            {{ message.excerpt }}
          </v-col>
        </v-row>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <v-card-text v-text="lorem"></v-card-text>
      </v-expansion-panel-text>

      <v-expansion-panel-text>
        <v-card-text v-text="lorem"></v-card-text>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels> -->
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

    onMounted(()=>{
       counter.loadtAspirants()
    })

      
      return {messages, lorem, aspirants}      
    },
}
</script>

<style scoped>
  
</style>