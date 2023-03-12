<!-- <template>
      <notifications position="bottom left" closeOnClick=true width="300" ignoreDuplicates=true duration=5000 />
  Admin dashboard
</template> -->
<template>
<v-card style="position: absolute; margin-top: 40px; padding-left: 10px ; height: 100vh;" class="d-none d-sm-flex">  
<v-layout class="view-high ">

        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          @click="rail = false"
          permanent
          location="right"
        >
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="John Leider"
            nav
            class="mt"
          >
            <template v-slot:append>
              <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop = "rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 100vh"></v-main>
      </v-layout>
    </v-card> 
  </template>
    
      
 

<script lang="ts">
import { onMounted, ref } from 'vue'
import { notify } from "@kyvg/vue3-notification";
export default {
    setup(){
      
        const items = ref([
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ])

        const rail = ref(true)
        const drawer = ref(true)

        // const stop = () => {
        //     rail.value = !rail.value
        // }

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

</style>