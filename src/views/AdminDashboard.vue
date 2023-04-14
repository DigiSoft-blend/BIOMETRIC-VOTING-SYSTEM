<!-- <template>
      <notifications position="bottom left" closeOnClick=true width="300" ignoreDuplicates=true duration=5000 />
  Admin dashboard
</template> -->
<template>
  <v-row>   
    <v-col cols="11" class="mx-auto">  
    <v-row no-gutters style="margin-top:100px;">
      <v-col>
        <v-sheet class="pa-2 ma-2 border">
            <v-banner
    color="pink-darken-1"
    icon="mdi-lock"
    lines="two"
  >
    <template v-slot:prepend>
      <v-avatar></v-avatar>
    </template>

    <v-banner-text>
    <h2>Register Aspirants</h2>
     Register aspirants here. 
    </v-banner-text>

    <v-banner-actions>
    <router-link class="link" to="/aspirantregister">
      <v-btn variant="tonal" color="success">Register Now</v-btn>
    </router-link>  
    </v-banner-actions>
  </v-banner>

 </v-sheet>


</v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2 border">
            <v-banner
    color="pink-darken-1"
    icon="mdi-lock"
    lines="two"
  >
    <template v-slot:prepend>
      <v-avatar></v-avatar>
    </template>

    <v-banner-text>
    <h2>Roles</h2>
    Create new aspirant roles here. 
    </v-banner-text>

      <v-banner-actions>
        <router-link class="link" to="/roles">
          <v-btn variant="tonal" color="success">Roles Interface</v-btn>
        </router-link>
      </v-banner-actions>
  </v-banner>

        </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2 border">
            <v-banner
    color="pink-darken-1"
    icon="mdi-lock"
    lines="two"
  >
    <template v-slot:prepend>
      <v-avatar></v-avatar>
    </template>

    <v-banner-text>
    <h2>Users</h2>
    View users here
    </v-banner-text>

    <v-banner-actions>
    <router-link class="link" to="/users">
      <v-btn variant="tonal" color="success">Users Interface</v-btn>
    </router-link>  
    </v-banner-actions>
  </v-banner>

        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2 border">
   <v-banner
    color="pink-darken-1"
    icon="mdi-lock"
    lines="two"
  >
    <template v-slot:prepend>
      <v-avatar></v-avatar>
    </template>

    <v-banner-text>  
    <h2>View Aspirants</h2>
    View aspirants here
    </v-banner-text>

    <v-banner-actions>
      <router-link class="link" to="/aspirants">
      <v-btn variant="tonal" color="success">Load Aspirants</v-btn>
    </router-link> 
    </v-banner-actions>
  </v-banner>

        </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters>
      
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-banner
    color="pink-darken-1"
    icon="mdi-lock"
    lines="two"
  >
    <template v-slot:prepend>
      <v-avatar></v-avatar>
    </template>

    <v-banner-text>  
    <h2>View Tokens</h2>
    View tokens here
    </v-banner-text>

    <v-banner-actions>
      <router-link class="link" to="/usertokens">
      <v-btn variant="tonal" color="success">Load Tokens</v-btn>
    </router-link> 
    </v-banner-actions>
  </v-banner>

        </v-sheet>
      </v-col>
    </v-row>
</v-col>

    <AdminSideBar></AdminSideBar>
</v-row>    
</template>
    
    
<script lang="ts">
import { onMounted, ref } from 'vue'
import { notify } from "@kyvg/vue3-notification";
import AdminSideBar from '@/components/AdminSideBar.vue';
export default {
    setup(){
      
        const items = ref([
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ])

        const rail = ref(true)
        const drawer = ref(true)

     
        onMounted(()=>{
            notify({
                title: "Access granted",
                text: "Your request has been accepted",
                type: "success"
            });
        })

        return{
            items,
            rail,
            drawer
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
}

</style>