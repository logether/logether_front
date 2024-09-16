<template>
  <div
    class="bg-gray-200 dark:bg-gray-600 h-40 flex justify-center items-center text-lg font-bold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition"
  >
    {{ feature }}
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

<style scoped></style>
