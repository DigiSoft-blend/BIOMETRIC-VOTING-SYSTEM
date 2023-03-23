<template>
   
    <v-col cols="12" class="mx-auto mtp">
        <v-card-text>
        <!-- <div>Word of the Day</div> -->
        <p class="text-h4 text--primary">
         About BVS
        </p>
<v-divider></v-divider>
<div class="text--primary mt-5">
 BVS is a revolutionary biometric voting system that combines cutting-edge biometric and GPS technologies to ensure that your vote is cast and counted accurately, securely, and without any possibility of fraud. Our system is designed to eliminate all the traditional problems associated with voting, such as vote rigging, duplicate voting, and tampering with ballot papers.
</div>

 <div class="text--primary mt-5">
    BVS is a dedicated voting hardware that is easy to use, intuitive, and fast. The system is designed to be used by anyone, regardless of their technical ability or literacy level. All you need to do is follow the simple instructions, and your vote will be cast in seconds. There are no complicated procedures or technical jargon to worry about.
 </div>
 <div class="text--primary mt-5">
    One of the unique features of BVS is its biometric technology. This means that every voter is identified by their unique biometric data, such as their fingerprint or facial recognition. This ensures that only legitimate voters are able to cast their vote, and eliminates the possibility of duplicate voting or impersonation.
 </div>
 <div class="text--primary mt-5">
    Additionally, BVS also uses GPS technology to ensure that voting takes place in the correct location. This means that voters can only cast their vote from designated polling stations, eliminating the possibility of voting fraudulently from other locations.
 </div>
 <div class="text--primary mt-5">
    With BVS, you can be confident that your vote will be cast and counted accurately, and that the election results will be free from any form of manipulation or tampering. Our system is designed to be secure, reliable, and efficient, and is suitable for any type of election, whether it be local, national, or even international.

So why wait? Sign up for BVS today and experience the future of secure and reliable voting!

 </div>
      </v-card-text>
      
     
  
      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%;"
        >
          <v-card-text class="pb-0">
            <p class="text-h4 text--primary">
              Origin
            </p>
            <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn
              variant="text"
              color="teal-accent-4"
              @click="reveal = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-col>
  </template>

<script lang="ts">
export default {
  data: () => ({
    reveal: false,
  }),
}
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

.mtp{
    margin-top: 100px
}
</style>