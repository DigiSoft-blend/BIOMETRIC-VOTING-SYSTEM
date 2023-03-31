
import { defineStore } from 'pinia'
import http from "@/http-common";


export const useCounterStore = defineStore('counter', {

//Stats
state: () => ({
  count: 5,
  name: "Silas Udofia" ,
  users: "",
  user: "",
  fromRegLoad: false,
  updatUserLoader: false,
  formErrorFlag1: false,
  userLoader: false,
  userRegistered: [],
  token:"",
  tokenLoader: false,
  tokenValid: false,
  aspirants: "",
  allApirants: "",
  aspLoader: false,
  aspLoader2: false,
  voteCount: 0,
  aspirant: "",
  logoutLoader: false
}),


//Actions 
actions: {
  increment() {
    this.count++
  },
  decrement() {
    this.count--
  },

  loadSingleUsers(id: any){
    this.userLoader = true
    return new Promise(( resolve, reject) => {  
    http.get("/Users/"+id).then(response => {
      const res = response.data
      this.user = res
      this.userLoader = false
      console.log(this.user)
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


  updateVotersCred(id: any, credentials : any){
    this.updatUserLoader = true
    return new Promise(( resolve, reject) => { 
    http.put("/Users/"+id, {} , { params:{
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
        this.updatUserLoader = false
        console.log(this.userRegistered) 
        resolve(response) 
        })
        .catch(error => {
        const err = error.response.data.errors
        this.updatUserLoader = false
        reject(error) 
        }) 
      })   
  },

  

  submitAdminLoginCred(credentials : any){
    this.fromRegLoad = true
    //this.formErrorFlag1 = false
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
        // this.formErrorFlag1 = true
        const err = error.response.data.errors
        reject(error) 
        }) 
      })   
  },


  generateToken(username : any){
    this.tokenLoader = true
    return new Promise(( resolve, reject) => { 
    http.get("/Token/GetTokenByName/"+username
      ).then(response => {
        const res = response.data.value
        this.token = res
        this.tokenLoader = false
        resolve(response) 
        })
        .catch(error => {
        const err = error.response.data.errors
        this.tokenLoader = false
        reject(error) 
        }) 
      })   
  },

  verifyToken(token : any){
    this.tokenLoader = true
    return new Promise(( resolve, reject) => { 
    http.get("/Token/verify/"+token
      ).then(response => {
        const res = response.data
        this.tokenValid = res
        this.tokenLoader = false
        resolve(response) 
        })
        .catch(error => {
        const err = error.response.data.errors
        this.tokenLoader = false
        reject(error) 
        }) 
      })   
  },

  loadtAspirants(){
    this.aspLoader = true
    return new Promise(( resolve, reject) => {  
    http.get("/VoteCount").then(response => {
      const res = response.data
      this.aspirants = res
      this.aspLoader = false
      resolve(response) 
      })
      .catch(error => {
      const err = error.response.data
      console.log(err)
      this.aspLoader = false
      reject(error) 
      })
    }) 
  },

 
  

  loadtallAspirants(){
    this.aspLoader2 = true
    return new Promise(( resolve, reject) => {  
    http.get("/Aspirants").then(response => {
      this.aspLoader2 = false
      const res = response.data
      this.allApirants = res
      resolve(response) 
      })
      .catch(error => {
      const err = error.response.data
      this.aspLoader2 = false
      reject(error) 
      })
    }) 
  },


  loadtVoteCount(id : any){
    return new Promise(( resolve, reject) => {  
    http.get("/VoteCount/"+id).then(response => {
      const res = response.data
      this.voteCount = res
      resolve(response) 
      })
      .catch(error => {
      const err = error.response.data
      console.log(err)
      reject(error) 
      })
    }) 
  },

  submitAspirantsCred(credentials : any){
    this.fromRegLoad = true
    this.formErrorFlag1 = false
    return new Promise(( resolve, reject) => { 
    http.post("/Aspirants", {} , { params:{
          Dob: credentials.dob,
          Email: credentials.email,
          state: credentials.state,
          username: credentials.username,
          occupation: credentials.occupation,
          phonenumber: credentials.phonenumber,
          senatorialdistrict: credentials.senatorialdistrict,
          gender: credentials.gender,
          role: credentials.role
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

  
  deleteAspirants(id : any){
    this.aspLoader2 = true
    return new Promise(( resolve, reject) => {  
    http.delete("/Aspirants/"+id).then(response => {
      this.aspLoader2 = false
      resolve(response) 
      })
      .catch(error => {
      this.aspLoader2 = false
      reject(error) 
      })
    }) 
  },

  deleteVoteCount(id : any){
    this.aspLoader2 = true
    return new Promise(( resolve, reject) => {  
    http.delete("/VoteCount/"+id).then(response => {
      this.aspLoader2 = false
      resolve(response) 
      })
      .catch(error => {
      this.aspLoader2 = false
      reject(error) 
      })
    }) 
  },
 

  loadSingleAspirant(id: any){
    this.userLoader = true
    return new Promise(( resolve, reject) => {  
    http.get("/Aspirants/"+id).then(response => {
      const res = response.data
      this.aspirant = res
      this.userLoader = false
      console.log(this.user)
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

 
  updateAspirantsCred(id: any, credentials : any){
    this.updatUserLoader = true
    return new Promise(( resolve, reject) => { 
    http.put("/Aspirants/"+id, {} , { params:{
          Dob: credentials.dob,
          Email: credentials.email,
          state: credentials.state,
          username: credentials.username,
          occupation: credentials.occupation,
          phonenumber: credentials.phonenumber,
          senatorialdistrict: credentials.senatorialdistrict,
          gender: credentials.gender,
          role: credentials.role
      }},
      ).then(response => {
        const res = response.data
        this.updatUserLoader = false
        console.log(this.userRegistered) 
        resolve(response) 
        })
        .catch(error => {
        const err = error.response.data.errors
        this.updatUserLoader = false
        reject(error) 
        }) 
      })   
  },

  logout(){
    this.logoutLoader = true
    return new Promise(( resolve, reject) => {  
    http.post("/Account/logout").then(response => {
      this.logoutLoader = false
      resolve(response) 
      })
      .catch(error => {
      this.logoutLoader = false
      reject(error) 
      })
    }) 
  },

  deleteUser(id : any){
    this.aspLoader2 = true
    return new Promise(( resolve, reject) => {  
    http.delete("/Users/"+id).then(response => {
      resolve(response) 
      })
      .catch(error => {
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
  },

  getAspirants: (state) => {
    return  state.allApirants
  },

  getAspirant: (state) => {
    return state.aspirant
  }

}

})
