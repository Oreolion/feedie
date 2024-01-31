<template>
  <div class="pt-[100px]">
    <div
      class="bg-gray-200 border border-[#ccc] h-[100px] w-[100px] rounded-full mx-auto mb-10 flex items-center justify-center"
    >
      <span
        class="text-2xl font-semibold text-gray-400"
        v-if="!profile.photoUrl"
        >I.E</span
      >

      <img src="" alt="" v-else />
    </div>

    <form class="w-[371px] mx-auto flex flex-col gap-y-5">
      <label class="font-semibold flex flex-col gap-y-1">
        Email:

        <input
          class="border border-solid w-full font-normal px-3 h-[43px]"
          disabled
          v-model="v$.email.$model"
        />

        <small class="text-red-500" v-if="v$.email.$errors.length">{{
          v$.email.$errors[0].$message
        }}</small>
      </label>

      <label class="font-semibold flex flex-col gap-y-1">
        Display Name:

        <input
          class="border border-solid w-full font-normal px-3 h-[43px]"
          v-model="v$.displayName.$model"
        />

        <small class="text-red-500" v-if="v$.email.$errors.length">{{
          v$.displayName.$errors[0].$message
        }}</small>
      </label>

      <button
        class="bg-[#AB61E5] w-full text-white font-semibold py-3 rounded"
        :class="{ 'cursor-not-allowed': isSubmitting }"
        :disabled="isSubmitting"
        type="button"
        @click="handleProfileUpdate"
      >
        {{ isSubmitting ? "Signing up..." : "Save" }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { auth } from "@/utils/firebase";

const isSubmitting = ref(false);

const profile = reactive({
  email: "elochi238@gmail.com",
  displayName: "",
  photoUrl: "",
});

const profileRules = {
  email: { required, email },
  displayName: { required },
  photoUrl: { required },
};

const v$ = useVuelidate(profileRules, profile);

const handleProfileUpdate = () => {};

const setProfile = async () => {
  profile.email = auth.currentUser?.email ?? "";
  profile.displayName = auth.currentUser?.displayName ?? "";
  profile.photoUrl = auth.currentUser?.photoURL ?? "";
};

setProfile();
</script>

<style scoped></style>
