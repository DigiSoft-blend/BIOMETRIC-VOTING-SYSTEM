
<template>
 <v-card
    class="mx-auto margin-tp"
    color="#26c6da"
    theme="dark"
    max-width="500"
  >

  <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar
            color="grey-darken-3"
            image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-avatar>
        </template>

        <v-list-item-title>Evan You</v-list-item-title>

        <v-list-item-subtitle>Vue Creator</v-list-item-subtitle>

        <template v-slot:append>
          <div class="justify-self-end">
            <v-icon class="me-1" icon="mdi-heart"></v-icon>
            <span class="subheading me-2">256</span>
            <span class="me-1">·</span>
            <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
            <span class="subheading">45</span>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
    
   
    <v-card-text class="text-h6 py-2">
     Congratulations, your account has been created, kindly visit your polling unit to get your voters token
    </v-card-text>

    <v-card-text>
          <div class="font-weight-bold ms-1 mb-2">
            Today
          </div>

          <!-- {{  user }} -->
          <v-timeline density="compact" align="start">
            <v-timeline-item
              size="x-small"
              v-if="user.length"
            >
              <div>
                <div class="font-weight-normal">
                  <strong> {{ user }} </strong> @ time
                </div>
                
                <!-- <div> message body</div> -->
              </div>
            </v-timeline-item>
            <!-- <v-timeline-item
              size="x-small"
            >
              <div>
                <div class="font-weight-normal">
                  <strong> message from </strong> @ time
                </div>
                <div> message body</div>
              </div>
            </v-timeline-item> -->
          </v-timeline>
        </v-card-text>

   
  </v-card>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import { useCounterStore } from '@/stores/counter'
import { computed } from 'vue'

export default {
  setup(){
    // const user = ref([])
    const counter = useCounterStore()
    var user = computed(()=>counter.userRegistered)
    return {
        user
    }
  }
}
</script>

<style scoped>
  .margin-tp{
    margin-top: 100px;
  }
</style>