
<template>
<!-- <TopNav/>  -->
<v-container 
>
    <v-card
      class="mx-auto margin-top"
      max-width="500"
    >
      <v-card-title class="text-h6 font-weight-regular justify-space-between">
        <span>{{ currentTitle(step) }}</span>
        <v-avatar
          color="primary mx-1"
          size="24"
          v-text="step"
        ></v-avatar>
      </v-card-title>
  
      <v-window v-model="step">
        <v-window-item :value="1">
          <v-img
              class="mb-4"
              contain
              height="128"
              src="/user (1).png"
            ></v-img>
          <v-card-text>
            <v-text-field
              label="Voters Email"
              placeholder="john@google.com"
            ></v-text-field>
            <span class="text-caption text-grey-darken-1">
              This is the email we will use to verify you are valid a voter
            </span>
          </v-card-text>
        </v-window-item>
  
        <v-window-item :value="2">
          <v-img
              class="mb-4"
              contain
              height="128"
              src="/user (1).png"
            ></v-img>
          <v-card-text>
            <v-text-field
              label="Password"
              type="password"
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              type="password"
            ></v-text-field>
            <span class="text-caption text-grey-darken-1">
              Please enter a password for your voters account
            </span>
          </v-card-text>
        </v-window-item>
  
        <v-window-item :value="3">
          <div class="pa-4 text-center">
            <v-img
              class="mb-4"
              contain
              height="128"
              src="/checked (1).png"
            ></v-img>
            <h3 class="text-h6 font-weight-light mb-2">
              Registration Successful
            </h3>
            <span class="text-caption text-grey">Congratulations!</span>
          </div>
        </v-window-item>
      </v-window>
  
      <v-divider></v-divider>
  
      <v-card-actions>
        <v-btn
          v-if="step > 1"
          variant="text"
          @click="step--"
          class="rounded-pill"
        >
          Back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-if="step < 3"
          color="primary"
          variant="flat"
          @click="step++"
          class="rounded-pill"
        >
          Next
        </v-btn>
      </v-card-actions>
    </v-card>
   
</v-container>

  </template>


<script lang="ts">
import { ref } from '@vue/reactivity'
import TopNav from '@/components/TopNav.vue'
  export default {
    setup(){
        const step = ref(1)
       
        const currentTitle = (step:any) => {
            switch (step) {
            case 1: return 'Sign-up'
            case 2: return 'Create a password'
            // default: return 'Account created'
            }
        }
        return {currentTitle,step}
    },
    components: {
        // TopNav
    }
  }
</script>

<style scoped>
   .margin-top{
      margin-top: 100px;
   }
</style>>


