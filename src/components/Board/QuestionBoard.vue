<template>
  <div class="py-2 bg-gray-900 text-gray-200 rounded-lg">
    <!-- 게시물 입력란 -->
    <div class="flex items-center mb-4">
      <input
        v-model="newQuestion"
        type="text"
        placeholder="방명록 남기기"
        class="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        @click="postQuestion"
        class="text-xs whitespace-nowrap items-center ml-4 px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-200"
      >
        작성하기
      </button>
    </div>

    <!-- 질문 목록 -->
    <div class="bg-gray-800 p-4 rounded-lg">
      <ul>
        <li
          v-for="(question, index) in questions"
          :key="index"
          class="mb-4 border-b border-gray-700 pb-4"
        >
          <div class="flex items-center mb-2">
            <span class="text-blue-400 font-bold mr-2">{{
              question.username
            }}</span>
            <span class="text-gray-500 text-sm">({{ question.date }})</span>
          </div>
          <p>{{ question.text }}</p>
          <div v-if="question.reply" class="ml-4 mt-2">
            <span class="text-blue-400 font-bold">관리자</span>
            <p class="mt-1 text-gray-400">{{ question.reply }}</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 페이지네이션 -->
    <div class="flex justify-center mt-6">
      <button class="px-3 py-1 bg-gray-700 rounded-md mx-1">처음</button>
      <button class="px-3 py-1 bg-gray-700 rounded-md mx-1">1</button>
      <button class="px-3 py-1 bg-gray-700 rounded-md mx-1">2</button>
      <button class="px-3 py-1 bg-gray-700 rounded-md mx-1">3</button>
      <button class="px-3 py-1 bg-gray-700 rounded-md mx-1">다음</button>
      <button class="px-3 py-1 bg-gray-700 rounded-md mx-1">마지막</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardView",
  data() {
    return {
      newQuestion: "",
      questions: [
        {
          username: "aiop****",
          date: "2024. 9. 17 오후 02:38:37",
          text: "캐릭터를 새로 만들었는데 축제에 추가는 어떻게 하나요",
          reply: "고려해보겠습니다 감사합니다.",
        },
        {
          username: "wowao****",
          date: "2024. 9. 16 오전 09:21:33",
          text: "공지좀 만들어 해주세요 알림 없으니 불편해요",
        },
        {
          username: "sigun****",
          date: "2024. 9. 16 오전 11:10:31",
          text: "내년 행사 관련 공지가 언제쯤 있을까요?",
        },
        {
          username: "otter****",
          date: "2024. 9. 15 오전 06:21:48",
          text: "서비스 잘 이용하고 있습니다. 더불어 주간 클리어 표시 기능도 추가해주세요",
          reply: "고려해보겠습니다 감사합니다.",
        },
        {
          username: "aga22****",
          date: "2024. 9. 14 오후 06:14:46",
          text: "캐릭터 축제 참여 추가 관련 기능이 궁금합니다.",
        },
      ],
    };
  },
  methods: {
    postQuestion() {
      if (this.newQuestion) {
        this.questions.push({
          username: "newUser****",
          date: new Date().toLocaleString(),
          text: this.newQuestion,
        });
        this.newQuestion = "";
      }
    },
  },
};
</script>

<style scoped></style>
