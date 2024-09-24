<template>
  <div>
    <div
      class="text-black dark:text-white flex items-center justify-between pb-2 border-b border-gray-300 mb-2"
    >
      <h2 class="text-lg font-bold">{{ date }}</h2>
      <span class="text-sm text-gray-500">{{ dayOfWeek }}</span>
    </div>
    <ul>
      <li
        v-for="(task, taskIndex) in tasks"
        :key="taskIndex"
        class="text-sm py-1 flex items-center justify-between dark:text-white"
        :class="{
          'line-through text-gray-400 dark:text-white': task.completed, // 완료된 일정 줄 긋기
        }"
      >
        <!-- 중요 일정 강조 아이콘 -->
        <div class="flex items-center">
          <span v-if="task.important" class="mr-2 text-yellow-500">✨</span>
          {{ task.text }}
        </div>
        <!-- 완료 여부 체크박스 오른쪽 끝 -->
        <div class="flex items-center">
          <input type="checkbox" class="ml-auto" v-model="task.completed" />
          <span v-if="task.completed" class="ml-2 text-gray-500">&#x2714;</span>
        </div>
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
