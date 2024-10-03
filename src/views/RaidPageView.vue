<template>
  <div class="p-6">
    <!-- 현재 월 표시 및 주차 이동 버튼 -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
        {{ currentMonth }} {{ currentYear }}
      </h1>
      <div>
        <button
          @click="prevWeek"
          class="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white rounded-full p-2 mx-1 hover:bg-gray-300 dark:hover:bg-gray-500"
        >
          이전
        </button>
        <button
          @click="nextWeek"
          class="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white rounded-full p-2 mx-1 hover:bg-gray-300 dark:hover:bg-gray-500"
        >
          다음
        </button>
      </div>
    </div>

    <!-- 달력 그리드: 한 줄에 7일씩 표시 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
      <div v-for="(day, index) in monthDays" :key="index" class="h-full">
        <ScheduleCard
          :date="day.date"
          :dayOfWeek="day.dayOfWeek"
          :tasks="day.tasks"
          @click="openScheduleModal(day)"
        />
      </div>
    </div>

    <!-- 스케줄 모달 -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white dark:bg-gray-800 rounded-lg p-8 w-96 shadow-lg">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold dark:text-white">
            {{ selectedSchedule.date }} 스케줄
          </h2>
          <button
            @click="closeModal"
            class="text-gray-600 dark:text-white text-xl"
          >
            &times;
          </button>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">참가자 목록</h3>
          <ul class="mb-4">
            <li
              v-for="(participant, index) in selectedSchedule.participants"
              :key="index"
              class="py-2"
            >
              {{ participant.name }} - {{ participant.role }}
            </li>
          </ul>
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded"
            @click="closeModal"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import ScheduleCard from "@/components/Home/ScheduleCard";
import { getWeekSchedules } from "@/utils/scheduleUtils"; // getWeekSchedules는 주 단위 스케줄 함수

export default {
  name: "RaidPageView",
  components: {
    ScheduleCard,
  },
  setup() {
    const isModalOpen = ref(false);
    const selectedSchedule = ref({ date: "", participants: [] });
    const monthDays = ref([]);
    const currentDate = ref(new Date());
    const weekOffset = ref(0); // 현재 주에서의 오프셋

    // 현재 년도와 월을 표시
    const currentMonth = computed(() => {
      const date = new Date(currentDate.value);
      date.setDate(date.getDate() + weekOffset.value * 7); // 주차에 따라 날짜 변경
      return date.toLocaleString("ko-KR", { month: "long" });
    });

    const currentYear = computed(() => {
      const date = new Date(currentDate.value);
      date.setDate(date.getDate() + weekOffset.value * 7);
      return date.getFullYear();
    });

    // 특정 주의 스케줄 가져오기 (4주간)
    const updateMonthDays = () => {
      monthDays.value = getWeekSchedules(weekOffset.value); // 주차 오프셋에 따른 28일 스케줄 가져오기
    };

    // 이전 주로 이동
    const prevWeek = () => {
      weekOffset.value -= 1;
      updateMonthDays();
    };

    // 다음 주로 이동
    const nextWeek = () => {
      weekOffset.value += 1;
      updateMonthDays();
    };

    // 모달 열기
    const openScheduleModal = (day) => {
      selectedSchedule.value = day; // 선택된 스케줄 정보
      isModalOpen.value = true;
    };

    // 모달 닫기
    const closeModal = () => {
      isModalOpen.value = false;
    };

    // 현재 주의 스케줄 가져오기
    onMounted(() => {
      updateMonthDays();
    });

    return {
      isModalOpen,
      selectedSchedule,
      monthDays,
      openScheduleModal,
      closeModal,
      currentMonth,
      currentYear,
      prevWeek,
      nextWeek,
    };
  },
};
</script>

<style scoped></style>
