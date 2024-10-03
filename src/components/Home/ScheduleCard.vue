<template>
  <div
    class="flex flex-col justify-between h-full border border-gray-300 dark:border-gray-600 p-4 rounded-lg"
  >
    <!-- 날짜와 요일 -->
    <div class="text-center">
      <h2 class="text-lg font-bold text-gray-800 dark:text-white">
        {{ date }}
      </h2>
      <span class="text-sm text-gray-500 dark:text-gray-400">{{
        dayOfWeek
      }}</span>
    </div>

    <!-- 일정 목록 -->
    <ul class="mt-4">
      <li
        v-for="(task, taskIndex) in tasks"
        :key="taskIndex"
        class="flex justify-between items-center mb-2"
      >
        <button
          class="text-left w-full bg-yellow-100 dark:bg-yellow-700 rounded-lg px-2 py-1 text-sm"
          :class="{
            'line-through text-gray-500 dark:text-gray-300': task.completed,
          }"
        >
          {{ task.text }}
        </button>
      </li>
    </ul>

    <!-- 일정이 없을 경우 표시할 빈 공간 -->
    <div
      v-if="tasks.length === 0"
      class="flex-1 flex items-center justify-center text-sm text-gray-400 dark:text-gray-500"
    >
      <span>일정 없음</span>
    </div>
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
