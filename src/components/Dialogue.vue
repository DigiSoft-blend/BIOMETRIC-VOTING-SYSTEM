<template>
  <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          dark
          v-bind="props"
        >
         More Options
        </v-btn>
      </template>
      <v-card :loading=loader>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Token Generation</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              variant="text"
              @click="dialog = false"
            >
             Done
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          lines="two"
          subheader
        >
          <v-list-subheader>Token Dialogue</v-list-subheader>
          <v-list-item title="User Token Generation" subtitle="All registered users must have a unique token"></v-list-item>
  <v-container>
  <v-row>
  <v-col cols="6">   
  <v-form @submit="getToken">
    <v-text-field
          v-model="username1"
          density="compact"
          placeholder="User Name"
          prepend-inner-icon="mdi-account"
          variant="outlined"
       ></v-text-field>

    <v-banner
     v-if="openToken"
      icon="mdi-file"
      color="deep-purple-accent-4"
      class="mb-4"
    >
      <v-banner-text>
      Token.
      </v-banner-text>
         <v-h2 class="text-primary">{{generatedToken}}</v-h2>
      <!-- <template v-slot:actions>
        <v-btn>Action</v-btn>
      </template> -->
    </v-banner>

       <v-btn
          color="info"
          variant="outlined"
          prepend-icon="mdi-key"
          type="submit"
        >
        Generate Token
      </v-btn>
    </v-form>     
  </v-col>

  <v-col cols="6"> 
    <v-form @submit="vToken">  
    <v-text-field
          v-model="token"
          density="compact"
          placeholder="Token"
          prepend-inner-icon="mdi-file"
          variant="outlined"
       ></v-text-field>

       <v-btn
          color="info"
          variant="outlined"
          prepend-icon="mdi-cached"
          type="submit"
        >
        Verify Token
      </v-btn>
      </v-form>
  </v-col>
</v-row>          
    </v-container> 

         <v-container>
          <v-text-field
              v-model="username2"
              density="compact"
              placeholder="User Name"
              prepend-inner-icon="mdi-account"
              variant="outlined"
            ></v-text-field>

        <v-btn
          color="info"
          variant="outlined"
          prepend-icon="mdi-key"
        >
        Get Token By Username
      </v-btn>
         </v-container>

    
        </v-list>
      </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { ref,computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import { notify } from "@kyvg/vue3-notification";

export default {
   setup(){
    const dialog = ref(false)
    const notifications = ref(false)
    const sound = ref(true)
    const widgets = ref(false)
    const username1 = ref("")
    const username2 = ref("")
    const token = ref("")
    const openToken = ref(false)
    
    const counter = useCounterStore()

    const route = useRoute()

    const generatedToken = computed(()=> counter.token)
    const loader = computed(()=> counter.tokenLoader)
    const tokenValid = computed(()=> counter.tokenValid)

    const getToken = (e : any) => {
          e.preventDefault()
          counter.generateToken(username1.value).then(()=> {
            openToken.value=true
            
                notify({
                  title: "Request Accepted",
                  text: "",
                  type: "success"
                });
            
              }).catch(error => {
                openToken.value=false
                notify({
                  title: "Token Generation error",
                  text: "The username is required for the token generation",
                  type: "error"
                });
          })
        }
        const vToken = (e : any) => {
          e.preventDefault()
          counter.verifyToken(token.value).then(()=> {
            if(tokenValid.value === true){
                notify({
                  title: "Token Request Accepted",
                  text: "Token verified and valid",
                  type: "success"
                });
            }
            else{
                notify({
                  title: "Invalid Token",
                  text: "The token you entered is invalid",
                  type: "error"
                });
            }    
            
              }).catch(error => {
                openToken.value=false
                notify({
                  title: "Invalid Token",
                  text: "The token you entered is invalid",
                  type: "error"
                });
          })

          onMounted(()=>{
            openToken.value = false
          })
        }

    return{
        dialog,
        notifications,
        sound,
        widgets,
        username1,
        username2,
        token,
        getToken,
        generatedToken,
        openToken,
        loader,
        vToken
    }
   }
}
</script>

<style>

</style>