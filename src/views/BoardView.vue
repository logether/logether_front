<!-- views/BoardView.vue -->
<template>
  <div class="w-full py-8">
    <h1 class="text-2xl font-bold mb-6 text-black dark:text-white">
      문의 남기기
    </h1>
    <QuestionBoard />
  </div>
</template>

<script>
import QuestionBoard from "../components/Board/QuestionBoard.vue";

export default {
  name: "BoardView",
  components: {
    QuestionBoard,
  },
};
</script>

<style scoped></style>
