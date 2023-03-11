
<template>
<!-- <TopNav/>  -->
 <v-container 
>
<notifications position="bottom left" closeOnClick=true width="300" ignoreDuplicates=true duration=5000 />
  
    <v-card
      class="mx-auto margin-top md-12"
      max-width="500"
    >

    <v-alert v-if="formError" type="error" closable>Oops ! an error occured, make sure you fill out the form correctly</v-alert>
    
    <v-card-title class="text-h6 font-weight-regular text-center">
        <span></span>
      </v-card-title>
<v-form @submit="Submit">
        
        
    <v-container v-if="true" class="mx-auto">
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
        <v-img
              class=""
              contain
              height="128"
              src="/submit.png"
            ></v-img>
           
          <v-text-field
            v-model="username"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="dob"
            :rules="nameRules"
            label="Data of birth"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>


    <v-container v-if="true" class="mx-auto">
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="gender"
            :rules="nameRules"
            label="Gender"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="state"
            :rules="nameRules"
            label="State"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="senatorialdistrict"
            :rules="nameRules"
            label="Senatorial District"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="true" class="mx-auto">
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="occupation"
            :rules="nameRules"
            label="Occupation"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="phonenumber"
            :rules="nameRules"
            label="Phone number"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
      
  
         <v-progress-linear
            color="deep-purple-accent-4"
            rounded
            :active="loader"
            :indeterminate="loader"
            height="6"
          ></v-progress-linear>
  
      <v-card-actions>
       
        <v-spacer></v-spacer>
       
        <v-btn type="submit" block color="primary" variant="flat" class="rounded-pill">
          Submit
        </v-btn>
      </v-card-actions>
      
    </v-form> 
    </v-card>
</v-container> 

  </template>


<script lang="ts">
import { ref } from '@vue/reactivity'
import { useCounterStore } from '@/stores/counter'
import axios from 'axios'
import TopNav from '@/components/TopNav.vue'
import { computed, onMounted } from 'vue'
import router from '@/router'
import { notify } from "@kyvg/vue3-notification";


  export default {
    setup(){
        const counter = useCounterStore()

        const step = ref(1)
        const username = ref("")
        const email = ref("")
        const dob = ref("")
        const gender = ref("")
        const state = ref("")
        const senatorialdistrict = ref("")
        const occupation = ref("")
        const phonenumber = ref("")
        const FormError = ref('')

        const nameRules = ref([
         (v: any) => !!v || 'Name is required',
        (v: any) => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ])
        
       const emailRules = ref([
        (v: any) => !!v || 'E-mail is required',
        (v: any) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
       ])

       const loader = computed(()=>counter.fromRegLoad)
       const formError = computed(()=>counter.formErrorFlag1)
              
        const Submit = (e : any) => {
          e.preventDefault()
          const payload = {
           dob: dob.value,
           email: email.value,
           state: state.value,
           username: username.value,
           occupation: occupation.value,
           phonenumber: phonenumber.value,
           senatorialdistrict: senatorialdistrict.value,
           gender: gender.value,
          }
          counter.submitVotersCred(payload).then(()=> {
                 notify({
                  title: "Registration success",
                  text: "Your registration was successful, kindly visit your unit to get your voters token",
                  type: "success"
                });
              }).catch(error => {
                notify({
                  title: "Registration error",
                  text: "Pleas make sure you fill out the form correctly",
                  type: "error"
                });
          })
        }

        onMounted(()=> {
          counter.loadtUsers()
        })
        
      
        return {
          username,
          email,
          dob,
          gender,
          state,
          senatorialdistrict,
          occupation,
          phonenumber,
          Submit,
          FormError,
          nameRules,
          emailRules,
          step,
          loader,
          formError
        }
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

   .mt5{
    margin-top: 100px
   }
</style>>


