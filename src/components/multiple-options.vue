<template>
  <div class="space-y-4">
    <div
      v-for="option in options"
      :key="option"
      class="py-5 px-8 hover:bg-gray-300 cursor-pointer"
      :class="[value === option ? 'bg-gray-500' : 'bg-[#F2F3F4]']"
      @click="$emit('selected', option)"
    >
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
  value: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
