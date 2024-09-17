<template>
  <header
    class="bg-white dark:bg-gray-800 shadow-md py-2 px-8 flex justify-between items-center transition duration-300"
  >
    <h1 class="text-2xl font-bold text-indigo-600 dark:text-indigo-300">
      LOGETHER
    </h1>
    <nav class="flex space-x-4">
      <button
        @click="toggleDarkMode"
        class="flex items-center text-black dark:text-white px-4 py-2 rounded-md transition"
      >
        <SunIcon v-if="isDarkMode" class="w-5 h-5" />
        <MoonIcon v-else class="w-5 h-5" />
      </button>
      <button
        class="flex items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md transition"
      >
        <BookOpenIcon class="w-5 h-5 mr-2" /> 가이드
      </button>
      <button
        class="flex items-center bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md transition"
      >
        로그인
      </button>
    </nav>
  </header>
</template>

<script>
import { BookOpenIcon, SunIcon, MoonIcon } from "@heroicons/vue/24/outline";
import { ref, onMounted, watch } from "vue";

export default {
  name: "MainWrap",
  components: {
    BookOpenIcon,
    SunIcon,
    MoonIcon,
  },
  setup() {
    const isDarkMode = ref(true);

    function toggleDarkMode() {
      isDarkMode.value = !isDarkMode.value;
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
    };
  },
};
</script>

<style scoped></style>
