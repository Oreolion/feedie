<template>
  <textarea
    class="border border-gray-100 h-[230px] w-full rounded p-3"
    placeholder="Say something"
    @input="handleInput"
    :value="value"
  ></textarea>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const emits = defineEmits(["selected"]);
defineProps<{ value: string }>();

const handleInput = (event: any) => {
  console.log("------->", event.target.value);
  emits("selected", event.target.value);
};
</script>

<style lang="scss" scoped></style>
