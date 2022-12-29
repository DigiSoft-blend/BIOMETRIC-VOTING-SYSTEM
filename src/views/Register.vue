
<template>
<!-- <TopNav/>  -->
<v-container 
>
    <v-card
      class="mx-auto margin-top"
      max-width="500"
    >
      <v-card-title class="text-h6 font-weight-regular text-center">
        <span>{{ currentTitle(step) }}</span>
        <!-- <v-avatar
          color="primary mx-1"
          size="24"
          v-text="step"
        ></v-avatar> -->
      </v-card-title>
  
      <v-window v-model="step">
        <v-window-item :value="1">
          <v-img
              class="mb-4"
              contain
              height="128"
              src="/id.png"
            ></v-img>
          <v-card-text>
            <v-text-field
              label="User name"
              type="text"
            ></v-text-field>
            <v-text-field
              label="Voters email"
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
              src="/id.png"
            ></v-img>
          <v-card-text>
            <v-text-field
              label="Date of birth"
              type="text"
            ></v-text-field>
            <v-text-field
              label="Gender"
              type="password"
            ></v-text-field>
            <span class="text-caption text-grey-darken-1">
              Please enter this information for proper identification
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="3">
          <v-img
              class="mb-4"
              contain
              height="128"
              src="/id.png"
            ></v-img>
          <v-card-text>
            <v-text-field
              label="State"
              type="text"
            ></v-text-field>
            <v-text-field
              label="Senatorial district"
              type="text"
            ></v-text-field>
            <span class="text-caption text-grey-darken-1">
              Please enter this information for proper identification
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="4">
          <v-img
              class="mb-4"
              contain
              height="128"
              src="/id.png"
            ></v-img>
          <v-card-text>
            <v-text-field
              label="Occupation"
              type="text"
            ></v-text-field>
            <v-text-field
              label="Phone number"
              type="text"
            ></v-text-field>
            <span class="text-caption text-grey-darken-1">
              Please enter this information for proper identification
            </span>
          </v-card-text>
        </v-window-item>
  
  
        <v-window-item :value="5">
          <div class="pa-4 text-center">
            <v-img
              class="mb-4"
              contain
              height="128"
              src="/checked (1).png"
            ></v-img>
            <h3 class="text-h6 font-weight-light mb-2">
              Registration in progress
            </h3>
            <span class="text-caption text-grey">We are getting your credentials ready...</span>

            <v-progress-linear
            color="deep-purple-accent-1"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
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
          v-if="step < 5"
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
            case 1: return 'Sign up to get your voters token'
            case 2: return 'More about yourself'
            case 3: return 'More about yourself'
            case 4: return 'More about yourself'
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


