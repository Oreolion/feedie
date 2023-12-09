<template>
  <navbar/>
  <div v-if="users.length" class=" px-9 my-10">
    <div class="rounded-lg max-w-4xl mx-auto border border-black">
      <div v-for="user in users" :key="user.id" class="flex justify-between items-center border-t border-black py-3 hover:bg-gray-100 cursor-pointer">
        <div class="flex items-center gap-5 px-5">
          <img :src="user.picture.medium" alt="" class="rounded-full">
          <h1>{{ user.name.first }}</h1>
        </div>
        <div class="px-5">
          <button class="border border-black font-bold px-16 py-2 rounded-md hover:bg-gray-300 focus:text-white focus:bg-[#AB61E5] focus:border-none" @click="handleDetail()">{{ isDetail ? ' Fill Out ' : 'View Submission' }}</button>
        </div>
        
      </div>
      <div v-if="isDetail">
        <h1>hello</h1>

      </div>
    </div>
    
  </div>
  <div v-else class="text-center my-[20%]">
    <h1 class="text-2xl text-slate-400">fetching data.........</h1>

  </div>

</template>

<script>
import axios from "axios"
import navbar from "@/components/navbar.vue";
export default {
  name: 'app',
  components:{
    navbar
  },
data(){
  return{
    isDetail: false,
    users: []
  }
},
methods:{
handleDetail(){
  this.isDetail = !this.isDetail
}
},
mounted(){
  axios.get('https://randomuser.me/api/?results=10').then((response) =>{ this.users = response.data.results}).catch((error) => console.log(error.message))

},


};
</script>

<style scoped>



</style>
