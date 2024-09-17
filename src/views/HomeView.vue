<template>
  <div>
    <!-- 일정 및 컨텐츠 섹션 -->
    <main class="py-8 px-8">
      <div class="container mx-auto py-8 h-64">
        <div class="grid grid-cols-7 gap-4">
          <!-- ScheduleCard 컴포넌트를 사용하여 각 날짜 일정을 표시 -->
          <ScheduleCard
            v-for="(day, index) in days"
            :key="index"
            :date="day.date"
            :dayOfWeek="day.dayOfWeek"
            :tasks="day.tasks"
          />
        </div>
      </div>

      <!-- 주요 기능 섹션 -->
      <section class="flex items-center justify-center gap-12">
        <div class="grid grid-cols-3 gap-4">
          <FeatureCard feature="공격대 조회 / 생성">
            <template #icon>
              <img src="path-to-icon2.svg" alt="아이콘1" class="w-16 h-16" />
            </template>
          </FeatureCard>

          <FeatureCard feature="회원 정보" class="mt-8">
            <template #icon>
              <img src="path-to-icon3.svg" alt="아이콘2" class="w-16 h-16" />
            </template>
          </FeatureCard>

          <FeatureCard feature="문의 남기기">
            <template #icon>
              <img src="path-to-icon4.svg" alt="아이콘3" class="w-16 h-16" />
            </template>
          </FeatureCard>
        </div>
        <section>
          <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-300">
            공격대 조합 생성기
          </h2>
          <div
            class="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 transition duration-300"
          >
            <!-- 캐릭터 리스트 표시 -->
            <div class="flex flex-wrap gap-4 h-64">
              <!-- 캐릭터 이미지 -->
              <div
                class="w-16 h-16 bg-gray-300 dark:bg-gray-500 rounded-full"
              ></div>
              <div
                class="w-16 h-16 bg-gray-300 dark:bg-gray-500 rounded-full"
              ></div>
              <div
                class="w-16 h-16 bg-gray-300 dark:bg-gray-500 rounded-full"
              ></div>
              <!-- 캐릭터 이미지 추가 -->
            </div>
          </div>
        </section>
      </section>

      <!-- 캐릭터 리스트 및 공격대 조합 섹션 -->

      <!-- 사이트 정보 섹션 -->
      <footer
        class="mt-8 bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 text-center transition duration-300"
      >
        <p class="text-gray-600 dark:text-gray-400">
          사이트 정보(개발자 정보, 디스코드, 기타 사이트 관련 정보)
        </p>
      </footer>
    </main>
  </div>
</template>

<script>
import ScheduleCard from "../components/Home/ScheduleCard.vue";
import FeatureCard from "../components/Home/FeatureCard.vue";

export default {
  name: "HomeView",
  components: {
    ScheduleCard,
    FeatureCard,
  },
  data() {
    return {
      days: this.getThisWeekSchedule(),
    };
  },
  methods: {
    getThisWeekSchedule() {
      const today = new Date();
      const firstDayOfWeek = today.getDate() - today.getDay() + 1; // 월요일부터 시작
      const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
      let days = [];

      for (let i = 0; i < 7; i++) {
        const currentDate = new Date(today.setDate(firstDayOfWeek + i));
        const formattedDate = currentDate.toISOString().slice(5, 10); // 'MM-DD' 형식

        days.push({
          date: formattedDate,
          dayOfWeek: daysOfWeek[currentDate.getDay()],
          tasks: this.getTasksForDay(i), // 각 요일별 할 일 추가
        });
      }

      return days;
    },
    getTasksForDay(dayIndex) {
      // 여기서 각 요일별로 할 일을 정의
      const tasks = [
        [
          { text: "노칸", completed: true },
          { text: "양겔", completed: false },
          { text: "하양겔", completed: false },
        ],
        [
          { text: "기타", important: true, completed: false },
          { text: "기타 😉", completed: false },
        ],
        [{ text: "레이드1", completed: false }],
        [],
        [{ text: "레이드2 👍", completed: false }],
        [],
        [],
      ];

      return tasks[dayIndex] || [];
    },
  },
};
</script>

<style scoped></style>
