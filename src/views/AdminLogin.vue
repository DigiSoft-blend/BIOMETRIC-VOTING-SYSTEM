
<!-- <template>
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
    
                <h5 class="text-center"  color="secondary">Sing in as an Admin</h5>
                <v-spacer></v-spacer>
               
              <v-text-field
                v-model="email"
                :rules="emailRules"
                :counter="10"
                label="Email"
                required
                type="email"
              ></v-text-field>
            </v-col>
    
            <v-col
              cols="12"
              md="12"
            >
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                required
                type="password"
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
           
            <v-btn type="submit" block color="primary" variant="flat" class="rounded">
              Submit
            </v-btn>
          </v-card-actions>
          
        </v-form> 
        </v-card>
    </v-container> 
    
      </template>
     -->

     <template>
     <notifications position="bottom left" closeOnClick=true width="300" ignoreDuplicates=true duration=5000 />
     <v-form @submit="Submit" class="margin-top">
        <div class="pa-4">
      
          <v-card
            class="mx-auto pa-12 pb-8"
            elevation="8"
            max-width="448"
            rounded="lg"
            :loading="loader"
          >
      
            <div class="text-subtitle-1 text-medium-emphasis">Account</div>
      
            <v-text-field
              v-model="email"
              density="compact"
              placeholder="Email address"
              prepend-inner-icon="mdi-email-outline"
              variant="outlined"
            ></v-text-field>
      
            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
              Password
      
              <a
                class="text-caption text-decoration-none text-blue"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Forgot login password?</a>
            </div>
      
            <v-text-field
              v-model="password"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              placeholder="Enter your password"
              prepend-inner-icon="mdi-lock-outline"
              variant="outlined"
              @click:append-inner="visible = !visible"
            ></v-text-field>
      
            <v-card
              class="mb-12"
              color="surface-variant"
              variant="tonal"
            >
              <v-card-text class="text-medium-emphasis text-caption">
                Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
              </v-card-text>
            </v-card>
      
            <v-btn
              block
              class="mb-8"
              color="blue"
              size="large"
              variant="tonal"
              type="submit"
            >
              Log In
            </v-btn>
      
            <!-- <v-card-text class="text-center">
              <a
                class="text-blue text-decoration-none"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
              </a>
            </v-card-text> -->
          </v-card>
        </div>
    </v-form>
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
            const email = ref("")
            const password = ref("")
            const visible = ref(false)
            
           const emailRules = ref([
            (v: any) => !!v || 'E-mail is required',
            (v: any) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
           ])
    
           const passwordRules = ref([
            (v: any) => !!v || 'Please enter your password',
            (v: any) => (v && v.length >= 8) || 'Password must be 8 characters in length or more',
           ])
    
          
    
         
           const loader = computed(()=>counter.fromRegLoad)
           const formError = computed(()=>counter.formErrorFlag1)
                  
            const Submit = (e : any) => {
              e.preventDefault()
              const payload = {
               email: email.value,
               password: password.value,
              }
              counter.submitAdminLoginCred(payload).then(()=> {
                   router.push("/admindashboard")
                  }).catch(error => {
                    notify({
                      title: "Access denied",
                      text: "Your singin request was rejected by our server",
                      type: "error"
                    });
              })
            }
    
            // onMounted(()=> {
            //   counter.loadtUsers()
            // })
            
          
            return {
              password,
              email,
              Submit,
              emailRules,
              step,
              loader,
              formError,
              passwordRules,
              visible
            }
        },
        components: {
            // TopNav
        }
      }
    </script>
    
    <style scoped>
       .margin-top{
          margin-top: 60px;
       }
    
       .mt5{
        margin-top: 100px
       }
    </style>>
    
    
    