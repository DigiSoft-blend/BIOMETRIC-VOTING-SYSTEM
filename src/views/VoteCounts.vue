<!-- <template>
      <notifications position="bottom left" closeOnClick=true width="300" ignoreDuplicates=true duration=5000 />
  Admin dashboard
</template> -->
<template>
    <notifications position="bottom left" closeOnClick=true width="300" ignoreDuplicates=true duration=5000 />
  
   <v-container class="mx-auto">  
    <v-row  style="margin-top:50px;">
     <v-col cols="12">
      <v-card :loading=loader >
      <v-sheet class="" >
      <v-banner
        color="pink-darken-1"
        icon="mdi-account-multiple"
        lines="two"
      >
        <template v-slot:prepend>
          <v-avatar></v-avatar>
        </template>
    
        <v-banner-text>
        <h2>Vote Count</h2>
        All aspirants with vote count are displayed here
        </v-banner-text>
    
        <v-banner-actions>
          <v-btn variant="tonal" color="success" class="me-4" @click="reLoad">Reload</v-btn>
        </v-banner-actions>
      </v-banner>
      <v-table
    
      height="440px"
    >
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Vote count
          </th>
          <th class="text-left">
            Role
          </th>
          <th class="text-left">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.indexOf"
        >
          <td>{{ user.aspirantName }}</td>
          <td>{{ user.aspirantVoteCount }}</td>
          <td>{{ user.aspirantRole }}</td>
         <td><v-btn @click="deleteAsp(user.id)" variant="tonal" color="red" >Remove</v-btn></td>
        </tr>
      </tbody>
    </v-table>
     </v-sheet>
    </v-card>
    </v-col>
  </v-row>
  </v-container>
        <AdminSideBar></AdminSideBar>
  </template>
        
        
    <script lang="ts">
    import { onMounted, ref, computed } from 'vue'
    import { notify } from "@kyvg/vue3-notification";
    import AdminSideBar from '@/components/AdminSideBar.vue';
    import { useCounterStore } from '@/stores/counter'
    
    export default {
        setup(){
          const counter = useCounterStore()
  
            const items = ref([
              { title: 'Home', icon: 'mdi-home-city' },
              { title: 'My Account', icon: 'mdi-account' },
              { title: 'Users', icon: 'mdi-account-group-outline' },
            ])
    
            const rail = ref(true)
            const drawer = ref(true)
         // const loader = ref(false)
  
          const loadApirants = () => {
           counter.formErrorFlag1 = false
           counter.loadtAspirants().then(()=>{
              notify({
                    title: "Aspirants Loaded",
                    text: "You loaded the list of registered Aspirants",
                    type: "success"
                  });
           }).catch(()=>{
            notify({
                    title: "Error loading Users",
                    text: "An error occured while fetching Aspirants, if it persist, contact the software enginearing unit",
                    type: "error"
                  });
           })
          }
  
          const reLoad = () => {
            loadApirants()
          }

          const deleteAsp = (id : any) => {
            counter.deleteVoteCount(id)
            loadApirants()
          }
  
          const users = computed(()=>counter.aspirants)
          const loader = computed(()=>counter.aspLoader2)
         
            onMounted(()=>{
                loadApirants()
            })
    
            return{
                items,
                rail,
                drawer,
                users,
                loader,
                reLoad,
                deleteAsp
            }
    
        },
       components:{
        AdminSideBar
       }
    
    }
    </script>
    
    <style>
    
    .view-hight{
        height: 100vh;
    }
    
    .mt{
      margin-top: 70px;
    }
  
    .link{
      text-decoration: none;
      color: inherit;
    }
    
    </style>