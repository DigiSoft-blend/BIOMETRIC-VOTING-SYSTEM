<template>
    <notifications position="bottom left" closeOnClick=true width="300" ignoreDuplicates=true duration=5000 />
<v-container class="mt"> 
    <div>
      <v-banner
        lines="three"
        icon="$warning"
        color="warning"
        class="my-4"
      >
        <v-banner-text>
          Update registered voters credentials here.
        </v-banner-text>
        <v-banner-text>
          <span class="text-h6">Update {{ user.userName }}'s Profile  {{ user.email }} </span>
          <!-- {{ user }} -->
        </v-banner-text>
        <template v-slot:actions>
         <router-link to="/searchusers" class="link">
            <v-btn>Cancel</v-btn>
         </router-link>  
         <Dialogue></Dialogue>
      </template>  
      </v-banner>
    </div>

    <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>
    
      <v-form @submit="Submit"> 
        <v-card-text>
          <v-container>
          
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  v-model=email
                  label="Legal email*"
                  type="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  v-model="username"
                  label="Legal username"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  v-model="occupation"
                  label="Legal occupation*"
                  hint=" Medical doctor, Software Engineer etc.."
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="phonenumber"
                  label="Phone number*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="state"
                  label="State*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="dob"
                  label="Date of Birth*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="senatorialdistrict"
                  label="Senatorial District*"
                  type="text"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                v-model="gender"
                  :items="['Male', 'Female']"
                  label="gender*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests (Optional)"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
        <v-progress-linear
            v-if="loader"
            color="deep-purple-accent-4"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn> -->
          <v-btn
            color="blue-darken-1"
            variant="flat"
            type="submit"
          >
            Update
          </v-btn>
        </v-card-actions>
    </v-form>

</v-container> 
</template>



<script lang="ts">
import { ref,computed, onMounted, watch } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { useRoute } from 'vue-router'
import { notify } from "@kyvg/vue3-notification";
import Dialogue from '@/components/Dialogue.vue';

export default {
  setup(){
     const counter = useCounterStore()
     const user = computed(()=>counter.user)
     const route = useRoute()

    const username = ref("")
    const email = ref("")
    const dob = ref("")
    const gender = ref("")
    const state = ref("")
    const senatorialdistrict = ref("")
    const occupation = ref("")
    const phonenumber = ref("")
    const FormError = ref('')
    const dialog = ref(false)
    const notifications = ref(false)
    const sound = ref(true)
    const widgets = ref(false)

    const items = ref([
        {
          title:"Generate Token"
        },
        {
           title: "Get User Token"
        },
        {
           title: "Verify User Token"
        }
    ])

      onMounted(()=>{
        counter.loadSingleUsers(route.params.id)
       })

    const loader = computed(()=> counter.updatUserLoader)
   
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
          counter.updateVotersCred(route.params.id, payload).then(()=> {
                 notify({
                  title: "User account updated",
                  text: "This user account has been updated, kindly inform them about the changes",
                  type: "success"
                });
              }).catch(error => {
                notify({
                  title: "Registration error",
                  text: "Please make sure you fill out the form correctly",
                  type: "error"
                });
          })

   
       }

     return {
        user,
        username,
        email,
        dob,
        gender,
        state,
        senatorialdistrict,
        occupation,
        phonenumber,
        Submit,
        loader,
        items,
        dialog,
        notifications,
        sound,
        widgets,
     }
  },

  components:{
    Dialogue
  }
}
</script>

<style scoped>
.mt{
    margin-top:50px
}

.link{
    text-decoration: none;
}
</style>