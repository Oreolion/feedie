<template>
  <div class="space-y-4">
    <div v-for="option in options" :key="option" class="bg-[#F2F3F4] py-5 px-8">
      {{ option }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  options: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped></style>
