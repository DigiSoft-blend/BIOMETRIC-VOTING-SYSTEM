<template>
    <notifications position="bottom left" closeOnClick=true width="300" ignoreDuplicates=true duration=5000 />
 <v-container class="margin-top">
<v-row> 
<v-col   
cols="12"
md="12"
class="mx-auto"
>

<v-banner
color="pink-darken-1"
icon="mdi-key"
lines="two"
class="mx-auto pa-4 pb-8"
max-width="800"
elevation="8"
>
<template v-slot:prepend>
  <v-avatar></v-avatar>
</template>


<v-table
fixed-header
height="400px"
>
<thead>
  <tr>
    <th class="text-left">
      Id
    </th>
    <th class="text-left">
      Username
    </th>
    <th class="text-left">
      Token
    </th>
  </tr>
</thead>
<tbody>
  <tr
   v-for="token in Tokens"
   :key="token.id"
  >
  <td class="text-info">{{ token.id }}</td>
    <td class="text-info">{{ token.userName }}</td>
    <td>
        <td class="text-dark">{{ token.value }}</td>
    </td>
    <!-- <v-btn @click=deleteRole(token.id)>Delete</v-btn> -->
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
          const Tokens = computed(()=>counter.Tokens)
                 
        //    const Submit = (e : any) => {
        //      e.preventDefault()
        //      const payload = {
        //       roleName: roleName.value
        //      }
        //      counter.postRole(payload).then((response)=> {
        //           notify({
        //              title: "Success",
        //              text: "Role created",
        //              type: "success"
        //            });
        //            counter.getRole()
        //          }).catch(error => {
        //            notify({
        //              title: "Access denied",
        //              text: "Your singin request was rejected by our server",
        //              type: "error"
        //            });
        //      })
        //    }

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
             counter.getTokens()
           })
           
         
           return {
             Tokens,
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
   
   
   