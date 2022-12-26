<template>
    <v-card class="pa-3">
     <v-row>
      <v-col
        v-for="n in 200"
        :key="n"
        cols="12"
        sm="2"
      >

      <v-card>
        <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        cover
        class="bg-grey-lighten-2"
      >
    
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
    
    </v-img>
       <v-sheet class="ma-2 pa-2">
          Download 
        </v-sheet>
      </v-card>

        
      </v-col>
    </v-row>
</v-card>
</template>