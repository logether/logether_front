<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white dark:bg-gray-800 rounded-lg p-8 w-96 shadow-lg">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold dark:text-white">공격대 조회 / 생성</h2>
        <button @click="close" class="text-gray-600 dark:text-white text-xl">
          &times;
        </button>
      </div>
      <form @submit.prevent="searchRaid">
        <!-- 공격대 이름 입력 -->
        <div class="mb-4">
          <input
            v-model="raidName"
            type="text"
            placeholder="공격대 이름"
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
        <!-- 조회하기 버튼 -->
        <div class="mb-4">
          <button
            type="submit"
            class="w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            조회하기
          </button>
        </div>
        <!-- 구분선 -->
        <div class="relative flex justify-center items-center mb-4">
          <span class="bg-gray-300 dark:bg-gray-500 w-20 h-px"></span>
          <span
            class="bg-white dark:bg-gray-800 px-4 text-gray-500 dark:text-gray-300 text-sm"
            >또는</span
          >
          <span class="bg-gray-300 dark:bg-gray-500 w-20 h-px"></span>
        </div>
        <!-- 공격대 만들기 버튼 -->
        <div>
          <button
            type="button"
            @click="createRaid"
            class="w-full bg-gray-700 text-white px-4 py-3 rounded-lg hover:bg-gray-600 transition"
          >
            공격대 만들기
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
      raidName: "",
      password: "",
    };
  },
  methods: {
    // 공격대 조회
    searchRaid() {
      console.log("공격대 조회 시도:", this.raidName, this.password);
      alert(`공격대 "${this.raidName}" 조회 시도`);
      this.$emit("close");
    },
    // 공격대 생성
    createRaid() {
      console.log("공격대 생성 시도:", this.raidName);
      alert(`공격대 "${this.raidName}" 생성 시도`);
      this.$emit("close");
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped></style>
