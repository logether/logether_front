<template>
  <div class="p-4 border border-gray-200 rounded-lg bg-white shadow-md">
    <div
      class="flex items-center justify-between pb-2 border-b border-gray-300 mb-2"
    >
      <h2 class="text-lg font-bold">{{ date }}</h2>
      <span class="text-sm text-gray-500">{{ dayOfWeek }}</span>
    </div>
    <ul>
      <li
        v-for="(task, taskIndex) in tasks"
        :key="taskIndex"
        class="text-sm py-1"
        :class="{
          'text-yellow-500 font-bold': task.important, // 중요 일정 강조
          'line-through text-gray-400': task.completed, // 완료된 일정은 줄 긋기
        }"
      >
        {{ task.text }}
        <!-- 완료 여부 체크 아이콘 -->
        <span v-if="task.completed" class="ml-2 text-gray-500">&#x2714;</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ScheduleCard",
  props: {
    date: {
      type: String,
      required: true,
    },
    dayOfWeek: {
      type: String,
      required: true,
    },
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
