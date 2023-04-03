
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
                  src="/user (1).png"
                ></v-img>
    
                <h5 class="text-center"  color="secondary">Aspirant registration</h5>
                <v-spacer></v-spacer>
               
              <v-text-field
                v-model="username"
                :rules="nameRules"
                :counter="40"
                label="Full name"
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
                :rules="dobRules"
                label="Date of birth"
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
                v-model="role"
                :rules="roleRules"
                label="Role"
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="12"
            >
              <v-text-field
                v-model="gender"
                :rules="genderRules"
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
                :rules="stateRules"
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
                :rules="sdistrictRules"
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
                :rules="occupationRules"
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
                :rules="phoneRules"
                label="Phone number"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
          
      
             <v-progress-linear
               
                :active="loader"
                :indeterminate="loader"
                height="6"
              ></v-progress-linear>
      
          <v-card-actions>
           
            <v-spacer></v-spacer>
           
            <v-btn
                  block
                  class="mb-8"
                  color="blue"
                  size="large"
                  variant="tonal"
                  type="submit"
                >
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
            const role = ref("")
            const gender = ref("")
            const state = ref("")
            const senatorialdistrict = ref("")
            const occupation = ref("")
            const phonenumber = ref("")
            const FormError = ref('')
    
            const nameRules = ref([
             (v: any) => !!v || 'Name is required',
            (v: any) => (v && v.length <= 40) || 'Name must be less than 40 characters',
            ])
            
           const emailRules = ref([
            (v: any) => !!v || 'E-mail is required',
            (v: any) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
           ])
    
           const dobRules = ref([
            (v: any) => !!v || 'Date of birth is required',
           ])
    
    
           const genderRules = ref([
            (v: any) => !!v || 'Gender is required',
           ])
    
           const stateRules = ref([
            (v: any) => !!v || 'State is required',
            (v: any) => (v && v.length <= 10) || 'State must be less than 30 characters',
           ])
    
           const sdistrictRules = ref([
             (v: any) => !!v || 'Senatorial district is required',
            (v: any) => (v && v.length <= 11) || 'Senatorial district must be less than 30 characters',
            ])
    
           const occupationRules = ref([
             (v: any) => !!v || 'Occupation is required',
            (v: any) => (v && v.length <= 11) || 'Occupation must be less than 20 characters',
            ])
    
           const phoneRules = ref([
             (v: any) => !!v || 'Phone number is required',
            (v: any) => (v && v.length <= 11) || 'Phone number must be less than 12 characters',
            ])

            const roleRules = ref([
             (v: any) => !!v || 'Role is required',
            (v: any) => (v && v.length <= 11) || 'Role must be less than 20 characters',
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
               role: role.value
              }
              counter.submitAspirantsCred(payload).then(()=> {
                     notify({
                      title: "Aspirants Registration success",
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
              counter.formErrorFlag1 = false
              counter.loadtUsers()
            })
            
          
            return {
              username,
              email,
              dob,
              role,
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
              formError,
              phoneRules,
              roleRules,
              occupationRules,
              sdistrictRules,
              stateRules,
              genderRules,
              dobRules
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
    
    
    