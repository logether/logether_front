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
        <div class="mb-4">
          <input
            v-model="username"
            type="email"
            placeholder="이메일"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div class="mb-6">
          <input
            v-model="password"
            type="password"
            placeholder="비밀번호"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div class="mb-4">
          <button
            type="submit"
            class="w-full bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import { User } from "@/utils/repository";

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
  setup() {
    const authStore = useAuthStore(); // Pinia 스토어 사용

    return {
      authStore,
    };
  },
  methods: {
    async login() {
      const res = await User.Login({
        userId: this.username,
        userPw: this.password,
      });
      if (res.accessToken) {
        const accessToken = res.accessToken; // 토큰 저장
        this.authStore.setAccessToken(accessToken);
        console.log("스토어 상태:", this.authStore);
        console.log("디코딩된 토큰 정보:", this.authStore.decodedToken);
        this.$emit("loginSuccess"); // 부모 컴포넌트에 로그인 성공 알림
      } else {
        alert("로그인 실패. 다시 시도해주세요.");
      }
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped></style>
