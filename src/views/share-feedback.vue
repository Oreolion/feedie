<template>
  <div class="max-w-4xl mx-auto my-10">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-2xl font-semibold">Share Feedback</h1>

      <label class="flex flex-col">
        <span
          class="text-xs uppercase font-bold text-[#59636E] tracking-[1.8px] mb-1"
          >Feedback Period</span
        >
        <select class="h-[48px] w-[342px] border border-[#D9DCDE] rounded px-3">
          <option value="">October 2018</option>
        </select>
      </label>
    </div>

    <div class="wrapper" v-if="users.length">
      <div
        v-for="(user, index) in users"
        :key="user.id"
        class="flex justify-between items-center py-3 hover:bg-[#d5b0f21a] cursor-pointer"
        :class="{ 'border-t border-[#D9DCDE]': index !== 0 }"
      >
        <div class="flex items-center gap-5 px-5">
          <div class="w-[58px] h-[58px] rounded-full">
            <img
              :src="user.picture.medium"
              alt=""
              class="rounded-full w-full h-full"
            />
          </div>

          <div class="text-xl font-semibold text-[#59636E]">
            {{ user.name.first }}
          </div>
        </div>

        <div class="px-5">
          <button
            class="border border-[#ACB1B6] font-semibold rounded hover:bg-[#D9DCDE] w-[198px] h-[48px] focus:text-white focus:bg-[#AB61E5] focus:border-none"
            @click="handleDetail(index)"
          >
            {{ !user.isFilledOut ? " Fill Out " : "View Submission" }}
          </button>
        </div>
      </div>
    </div>

    <div v-else class="text-center my-[20%]">
      <h1 class="text-2xl text-slate-400">fetching data.........</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      isDetail: false,
      users: [],
    };
  },
  methods: {
    handleDetail(index) {
      this.users = this.users.map((user, i) => {
        if (i === index) {
          return { ...user, isFilledOut: !user.isFilledOut };
        }

        return user;
      });
    },
  },
  mounted() {
    axios
      .get("https://randomuser.me/api/?results=5")
      .then((response) => {
        this.users = response.data.results.map((item) => ({
          ...item,
          isFilledOut: false,
        }));
      })
      .catch((error) => console.log(error.message));
  },
};
</script>

<style scoped>
.wrapper {
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
