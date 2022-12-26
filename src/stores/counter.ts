import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
//Stats
state: () => ({
  count: 5,
  name: "Silas Udofia" 
}),
//Actions 
actions: {
  increment() {
    this.count++
  },
  decrement() {
    this.count--
  },
},
//getters
getters:{
  oddOrEven: (state) => {
      if(state.count % 2 === 0){
       return 'even'
      }else{
       return 'odd'
      }
  }
}

})
