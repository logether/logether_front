<template>
  <header
    class="bg-white dark:bg-gray-800 shadow-md py-2 px-8 flex justify-between items-center transition duration-300"
  >
    <h1 class="text-2xl font-bold text-indigo-600 dark:text-indigo-300">
      LOGETHER
    </h1>
    <nav class="flex space-x-4">
      <!-- 다크 모드 토글 -->
      <button
        @click="toggleDarkMode"
        class="flex items-center text-black dark:text-white px-4 py-2 rounded-md transition"
      >
        <SunIcon v-if="isDarkMode" class="w-5 h-5" />
        <MoonIcon v-else class="w-5 h-5" />
      </button>

      <!-- 가이드 버튼 -->
      <button
        class="flex items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md transition"
      >
        <BookOpenIcon class="w-5 h-5 mr-2" /> 가이드
      </button>

      <!-- 로그인 상태에 따른 아이콘 변경 -->
      <button
        @click="isLoggedIn ? logout() : (showLoginModal = true)"
        class="flex items-center bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md transition"
      >
        <LogoutIcon v-if="isLoggedIn" class="w-5 h-5 mr-2" />
        <LoginIcon v-else class="w-5 h-5 mr-2" />
        {{ isLoggedIn ? "로그아웃" : "로그인" }}
      </button>
    </nav>

    <!-- 로그인 모달 -->
    <LoginModal
      :show="showLoginModal"
      @close="showLoginModal = false"
      @loginSuccess="handleLoginSuccess"
    />
  </header>
</template>

<script>
import {
  BookOpenIcon,
  SunIcon,
  MoonIcon,
  LoginIcon,
  LogoutIcon,
} from "@heroicons/vue/24/outline";
import { ref, onMounted, watch, computed } from "vue";
import LoginModal from "@/components/LoginModal.vue";
import { useAuthStore } from "@/stores/auth"; // Pinia 스토어 임포트

export default {
  name: "MainWrap",
  components: {
    BookOpenIcon,
    SunIcon,
    MoonIcon,
    LoginIcon,
    LogoutIcon,
    LoginModal,
  },
  setup() {
    const isDarkMode = ref(true);
    const showLoginModal = ref(false); // 로그인 모달 상태
    const authStore = useAuthStore(); // Pinia 스토어 사용

    const isLoggedIn = computed(() => authStore.isLoggedIn); // 반응형 computed 사용

    function toggleDarkMode() {
      isDarkMode.value = !isDarkMode.value;
    }

    function handleLoginSuccess() {
      showLoginModal.value = false; // 모달 닫기
    }

    function logout() {
      authStore.clearAccessToken(); // 로그아웃 시 토큰 삭제
    }

    onMounted(() => {
      if (isDarkMode.value) {
        document.documentElement.classList.add("dark");
      }
    });

    watch(isDarkMode, (newValue) => {
      if (newValue) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });

    return {
      isDarkMode,
      toggleDarkMode,
      showLoginModal,
      isLoggedIn, // computed로 사용하여 반응형 상태 유지
      handleLoginSuccess,
      logout,
    };
  },
};
</script>

<style scoped></style>
