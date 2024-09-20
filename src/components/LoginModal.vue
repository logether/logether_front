<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white dark:bg-gray-800 rounded-lg p-8 w-96 shadow-lg">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold dark:text-white">로그인</h2>
        <button @click="close" class="text-gray-600 dark:text-white text-xl">
          &times;
        </button>
      </div>
      <form @submit.prevent="login">
        <!-- 이메일 입력 -->
        <div class="mb-4">
          <input
            v-model="username"
            type="email"
            placeholder="이메일"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <!-- 비밀번호 입력 -->
        <div class="mb-6">
          <input
            v-model="password"
            type="password"
            placeholder="비밀번호"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <!-- 로그인 버튼 -->
        <div class="mb-4">
          <button
            type="submit"
            class="w-full bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            로그인
          </button>
        </div>
        <!-- 회원가입/비밀번호 찾기 링크 -->
        <div class="text-sm text-center text-gray-500 dark:text-gray-300 mb-6">
          <a href="#" class="hover:underline mr-4">회원가입</a>
          <a href="#" class="hover:underline">비밀번호 찾기</a>
        </div>
        <!-- 구분선 -->
        <div class="relative flex justify-center items-center mb-6">
          <span class="bg-gray-300 dark:bg-gray-500 w-20 h-px"></span>
          <span
            class="bg-white dark:bg-gray-800 px-4 text-gray-500 dark:text-gray-300 text-sm"
            >또는</span
          >
          <span class="bg-gray-300 dark:bg-gray-500 w-20 h-px"></span>
        </div>
        <!-- 구글 로그인 버튼 -->
        <div>
          <button
            type="button"
            class="w-full flex items-center justify-center border border-gray-300 hover:bg-gray-50 px-4 py-3 rounded-lg transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              class="w-5 h-5 mr-3"
              alt="Google logo"
            />
            구글 로그인으로 시작하기
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // 로그인 처리 로직
      console.log("로그인 시도:", this.username, this.password);
      this.$emit("close");
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped></style>
