import { defineStore } from "pinia";
import { ref } from "vue";

export const useFeedbackStore = defineStore("feedback", () => {
  const selectedFeedbackUser = ref("");

  return { selectedFeedbackUser };
});
