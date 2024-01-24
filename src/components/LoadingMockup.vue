<template>
      <div
        v-for="(user, index) in users"
        :key="user.indexOf"
        class="flex justify-between items-center py-3 border border-[#e0e3e6]"
        :class="{ 'border-t border-[#D9DCDE]': index !== 0 }"
      >
        <div class="flex items-center gap-5 px-5">
          <div class="w-[58px] h-[58px] rounded-full bg-[#e0e3e6] animate-pulse"></div>

          <div class="bg-[#e0e3e6] w-64 h-6 animate-pulse"></div>
        </div>

        <div class="px-5">
          <div class="bg-[#e0e3e6] w-32 h-10 animate-pulse"></div>
        </div>
      </div>
</template>

<script lang="ts">
   export default {
    data(){
        return{
            users: [] = ["user1", "user2", "user3", "user4", "user5"]
        }
    }
   }
</script>