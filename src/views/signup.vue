<template>
  <div
    class="bg-[url('../assets/images/login-bg.png')] h-screen bg-cover relative"
  >
    <form
      class="bg-white w-[371px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-24 pb-12"
    >
      <h-logo class="mx-auto" />

      <div class="text-2xl font-semibold text-center mb-10">Honesto</div>

      <div class="px-16 space-y-5">
        <label class="font-semibold flex flex-col gap-y-1">
          Email:

          <input
            class="border border-solid w-full font-normal px-3 h-[43px]"
            v-model="user.email"
          />
        </label>

        <label class="font-semibold flex flex-col gap-y-1">
          Password:

          <input
            class="border border-solid w-full font-normal px-3 h-[43px]"
            v-model="user.password"
          />
        </label>

        <label class="font-semibold flex flex-col gap-y-1">
          Confirm Password:

          <input
            class="border border-solid w-full font-normal px-3 h-[43px]"
            v-model="confirmPassword"
          />
        </label>

        <button
          class="bg-[#AB61E5] w-full text-white font-semibold py-3 rounded"
          type="button"
          @click="handleSignup"
        >
          Signup
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { auth } from "@/utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import HLogo from "@/components/svg-components/h-logo.vue";
import { ref } from "vue";

const loginAs = ref<string>("");
const user = ref({
  email: "",
  password: "",
});
const confirmPassword = ref("");

const handleSignup = async () => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      user.value.email,
      user.value.password
    );
    console.log("-------->", response);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
