<template>
  <div
    class="relative bg-gray-200 dark:bg-gray-600 h-80 w-60 flex flex-col justify-between items-center text-lg font-bold rounded-lg hover:scale-105 transition-transform duration-200 ease-in-out shadow-lg hover:shadow-xl"
  >
    <div class="flex flex-col items-center justify-center h-full">
      <slot name="icon" />
      <h3 class="text-2xl font-semibold mt-4">{{ feature }}</h3>
    </div>
    <div
      class="bg-white dark:bg-gray-700 w-30 ml-auto py-2 rounded-lg flex items-center justify-end px-4"
    >
      <span class="text-sm text-gray-600 dark:text-gray-400">바로가기</span>
      <span class="text-xl font-bold">→</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    feature: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* 애니메이션 관련 스타일은 클래스에서 관리 */
</style>
