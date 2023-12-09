<template>
  <nav class="flex justify-between items-center bg-gray-100 px-9">
        <div class="flex items-center gap-16 px-10 ">
          <div>
            <h1 class="font-extrabold text-lg">Honesto</h1>
          </div>
          <div class="flex items-center gap-8 text-base ">
            <router-link to="/">Share Feedback</router-link>
            <router-link to="/about">My Feedback</router-link>
            <router-link to="/contact">Team Feedback</router-link>
          </div>

        </div>
        <div class="flex items-center gap-2 font-light">
          <div>
            <span class="bg-gray-600 text-xl rounded-full px-4 py-3 "><font-awesome-icon icon="fa-solid fa-user" class="text-xl" /></span>
          </div>
          <div>
            <h1 class="">Jane Smith</h1>
            <h2 class="text-xs font-medium text-gray-500 uppercase">LogOut</h2>
          </div>

        </div>

      </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav a.router-link-exact-active {
  border-bottom: 2px solid #AB61E5;
  padding:20px 0;
 
}

</style>