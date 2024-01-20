<template>
  <div
    class="grid grid-cols-10 gap-1"
    @mouseleave="handleMouseLeave"
    @mouseenter="handleMouseEnter"
  >
    <div
      v-for="n of 10"
      :key="n"
      class="h-[74px] cursor-pointer"
      :class="[(value || hoveredIndex) >= n ? 'bg-yellow-700' : 'bg-[#F2F3F4]']"
      @mouseover="handleMouseOver(n)"
      @click="handleClick(n)"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emits = defineEmits(["selected"]);
defineProps<{ value: number }>();

const hoveredIndex = ref(0);
const selectedIndex = ref(0);

const handleMouseOver = (index: number) => {
  hoveredIndex.value = index;
};

const handleMouseLeave = () => {
  hoveredIndex.value = 0;
};

const handleMouseEnter = () => {
  selectedIndex.value = 0;
  emits("selected", 0);
};

const handleClick = (index: number) => {
  selectedIndex.value = index;
  emits("selected", index);
};
</script>

<style lang="scss" scoped></style>
