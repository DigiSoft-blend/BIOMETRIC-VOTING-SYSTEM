
import { defineStore } from 'pinia'
import http from "@/http-common";


export const useCounterStore = defineStore('counter', {

//Stats
state: () => ({
  count: 5,
  name: "Silas Udofia" ,
  users: "",
  fromRegLoad: false,
  formErrorFlag1: false,
  userLoader: false,
  userRegistered: []
}),


//Actions 
actions: {
  increment() {
    this.count++
  },
  decrement() {
    this.count--
  },

  loadtUsers(){
    this.userLoader = true
    return new Promise(( resolve, reject) => {  
    http.get("/Users").then(response => {
      const res = response.data
      this.users = res
      this.userLoader = false
      resolve(response) 
      })
      .catch(error => {
      const err = error.response.data
      console.log(err)
      this.userLoader = false
      reject(error) 
      })
    }) 
  },

  submitVotersCred(credentials : any){
    this.fromRegLoad = true
    this.formErrorFlag1 = false
    return new Promise(( resolve, reject) => { 
    http.post("/Users", {} , { params:{
          Dob: credentials.dob,
          Email: credentials.email,
          state: credentials.state,
          username: credentials.username,
          occupation: credentials.occupation,
          phonenumber: credentials.phonenumber,
          senatorialdistrict: credentials.senatorialdistrict,
          gender: credentials.gender,
      }},
      ).then(response => {
        const res = response.data
        this.userRegistered = res
        this.fromRegLoad = false
        console.log(this.userRegistered) 
        resolve(response) 
        })
        .catch(error => {
         this.fromRegLoad = false
         this.formErrorFlag1 = true
        const err = error.response.data.errors
        reject(error) 
        }) 
      })   
  },

  submitAdminLoginCred(credentials : any){
    this.fromRegLoad = true
    this.formErrorFlag1 = false
    return new Promise(( resolve, reject) => { 
    http.post("/Account/login", {} , { params:{
          password: credentials.password,
          email: credentials.email,
      }},
      ).then(response => {
        const res = response.data
        this.userRegistered = res
        this.fromRegLoad = false
        console.log(this.userRegistered) 
        resolve(response) 
        })
        .catch(error => {
         this.fromRegLoad = false
         this.formErrorFlag1 = true
        const err = error.response.data.errors
        reject(error) 
        }) 
      })   
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
  },

  getUsers: (state) => {
    return state.users
  }
}

})
