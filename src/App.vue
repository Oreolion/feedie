<template>
  <router-view />
</template>

<script setup>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;

    localStorage.setItem("isLoggedIn", true);

    console.log("----=====>", user);

    // login page --> dashboard (share-feedback)

    // ...
  } else {
    // User is signed out
    // ...
    console.log("User should be signed out");
  }
});
</script>

<style scoped></style>
