<template>
        <notifications position="bottom left" closeOnClick=true width="300" ignoreDuplicates=true duration=5000 />
     <v-container class="margin-top">
        <v-row> 
          <v-col   
          cols="12"
              md="6"
          >
        <v-form @submit="Submit">      
          <div class="">
             <v-card
               class="mx-auto pa-12 pb-8"
               elevation="8"
               max-width="500"
               rounded="sm"
               :loading="loader"
             >
              
         
               <div class="text-subtitle-1 text-medium-emphasis">Add Roles</div>
         
               <v-text-field
                 v-model="roleName"
                 density="compact"
                 placeholder="Role Name"
                 variant="outlined"
               ></v-text-field>
              
         
               <v-card
                 class=""
                 color="surface-variant"
                 variant="tonal"
               >
               </v-card>
         
               <v-btn
                 block
                 class=""
                 color="blue"
                 size="large"
                 variant="tonal"
                 type="submit"
               >
                Create
               </v-btn>
         
             </v-card>
           </div>
       </v-form>
       </v-col>

<v-col   
cols="12"
md="6"
  >
    
  <v-banner
    color="pink-darken-1"
    icon="mdi-account-box"
    lines="two"
    class="mx-auto pa-4 pb-8"
    max-width="600"
    elevation="8"
  >
    <template v-slot:prepend>
      <v-avatar></v-avatar>
    </template>

   
  <v-table
  fixed-header
  height="200px"
  >
    <thead>
      <tr>
        <th class="text-left">
          Role name
        </th>
        <th class="text-left">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
       v-for="role in Roles"
       :key="role.id"
      >
        <td class="text-info">{{ role.role }}</td>
        <td>
          <v-btn @click=deleteRole(role.id)>Delete</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
  </v-banner>

       </v-col>
      </v-row> 
    </v-container>
    <AdminSideBar></AdminSideBar>
         </template>
       
       <script lang="ts">
       import { ref } from '@vue/reactivity'
       import { useCounterStore } from '@/stores/counter'
       import axios from 'axios'
       import TopNav from '@/components/TopNav.vue'
       import { computed, onMounted } from 'vue'
       import router from '@/router'
       import { notify } from "@kyvg/vue3-notification";
       import AdminSideBar from '@/components/AdminSideBar.vue';
       
         export default {
           setup(){
               const counter = useCounterStore()
               const roleName = ref("")
               
              const roleRules = ref([
               (v: any) => !!v || 'Role is required',
              ])
            
              const Roles = computed(()=>counter.Roles)
                     
               const Submit = (e : any) => {
                 e.preventDefault()
                 const payload = {
                  roleName: roleName.value
                 }
                 counter.postRole(payload).then((response)=> {
                      notify({
                         title: "Success",
                         text: "Role created",
                         type: "success"
                       });
                       counter.getRole()
                     }).catch(error => {
                       notify({
                         title: "Access denied",
                         text: "Your singin request was rejected by our server",
                         type: "error"
                       });
                 })
               }

               const deleteRole = (id :any) => {
                counter.deleteRole(id).then(()=>{
              
                  notify({
                         title: "Roles Deleted",
                         text: "A role was deleted",
                         type: "warning"
                       });
                       counter.getRole()
                })
        }
       
               onMounted(()=> {
                 counter.getRole()
               })
               
             
               return {
                 roleName,
                 Submit,
                 Roles,
                 deleteRole
               }
           },
           components:{
              AdminSideBar
            }
         }
       </script>
       
       <style scoped>
          .margin-top{
             margin-top: 100px;
          }
       
          .mt5{
           margin-top: 100px
          }
       </style>>
       
       
       