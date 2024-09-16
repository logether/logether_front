<template>
  <div
    class="bg-gray-100 dark:bg-gray-900 min-h-screen transition duration-300"
  >
    <!-- 상단 네비게이션 바 -->
    <MainWrap />

    <!-- 일정 및 컨텐츠 섹션 -->
    <main class="py-8 px-8">
      <div class="container mx-auto py-8">
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
      <section class="grid grid-cols-3 gap-8">
        <FeatureCard feature="공격대 조회 / 생성" />
        <FeatureCard feature="회원 정보" />
        <FeatureCard feature="문의 남기기" />
      </section>

      <!-- 캐릭터 리스트 및 공격대 조합 섹션 -->
      <section class="mt-8">
        <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-300">
          공격대 조합 생성기
        </h2>
        <div
          class="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 transition duration-300"
        >
          <!-- 캐릭터 리스트 표시 -->
          <div class="flex flex-wrap gap-4">
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
import MainWrap from "@/layouts/MainWrap.vue";

export default {
  name: "HomeView",
  components: {
    MainWrap,
    ScheduleCard,
    FeatureCard,
  },
  data() {
    return {
      days: [
        {
          date: "09.09",
          dayOfWeek: "월",
          tasks: [
            { text: "마우스를 갖다대서 완료", completed: true },
            { text: "편집하려면 클릭", completed: false },
            { text: "다른 오일로 드래그", completed: false },
          ],
        },
        {
          date: "10.09",
          dayOfWeek: "화",
          tasks: [
            { text: "색상에서 선택", important: true, completed: false },
            { text: "마음에 들었으면 좋겠어요 😉", completed: false },
          ],
        },
        {
          date: "11.09",
          dayOfWeek: "수",
          tasks: [{ text: "그게 다예요!", completed: false }],
        },
        {
          date: "12.09",
          dayOfWeek: "목",
          tasks: [],
        },
        {
          date: "13.09",
          dayOfWeek: "금",
          tasks: [{ text: "저장하는 것을 잊지 마세요. 👍", completed: false }],
        },
        {
          date: "14.09",
          dayOfWeek: "토",
          tasks: [],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
