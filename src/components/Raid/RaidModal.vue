<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white dark:bg-gray-800 rounded-lg p-8 w-96 shadow-lg">
      <div class="flex justify-between items-center mb-6">
        <h2 v-if="isSearching" class="text-xl font-bold dark:text-white">
          공격대 조회
        </h2>
        <h2 v-else class="text-xl font-bold dark:text-white">공격대 생성</h2>
        <button @click="close" class="text-gray-600 dark:text-white text-xl">
          &times;
        </button>
      </div>

      <!-- 공격대 조회 폼 -->
      <form v-if="isSearching" @submit.prevent="searchRaid">
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
            @click="switchToCreate"
            class="w-full bg-gray-700 text-white px-4 py-3 rounded-lg hover:bg-gray-600 transition"
          >
            공격대 만들기
          </button>
        </div>
      </form>

      <!-- 공격대 생성 폼 -->
      <form v-else @submit.prevent="createRaid">
        <!-- 공대장 이름 입력 -->
        <div class="mb-4">
          <input
            v-model="raidLeader"
            type="text"
            placeholder="공대장 이름"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

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
        <div class="mb-4">
          <input
            v-model="password"
            type="password"
            placeholder="비밀번호"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <!-- 인원 수 입력 -->
        <div class="mb-4">
          <input
            v-model="memberCount"
            type="number"
            min="1"
            placeholder="인원 수 (기본값: 16명)"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <!-- 링크 입력 -->
        <div class="mb-4">
          <input
            v-model="link"
            type="url"
            placeholder="공격대 링크"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <!-- 체크박스 -->
        <div class="mb-6">
          <label class="inline-flex items-center">
            <input
              v-model="allowLinkAccess"
              type="checkbox"
              class="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300"
              >링크를 통한 접근 허용</span
            >
          </label>
        </div>

        <!-- 생성하기 버튼 -->
        <div class="mb-4">
          <button
            type="submit"
            class="w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            생성하기
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

        <!-- 공격대 조회로 돌아가기 버튼 -->
        <div>
          <button
            type="button"
            @click="switchToSearch"
            class="w-full bg-gray-700 text-white px-4 py-3 rounded-lg hover:bg-gray-600 transition"
          >
            공격대 조회하기
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const isSearching = ref(true); // 조회 모드가 기본값
    const raidName = ref("");
    const password = ref("");
    const raidLeader = ref("");
    const memberCount = ref(16); // 기본값: 16명
    const link = ref("");
    const allowLinkAccess = ref(false);

    // 공격대 조회
    const searchRaid = () => {
      console.log("공격대 조회 시도:", raidName.value, password.value);
      alert(`공격대 "${raidName.value}" 조회 시도`);
    };

    // 공격대 생성
    const createRaid = () => {
      const raidData = {
        raidLeader: raidLeader.value,
        raidName: raidName.value,
        password: password.value,
        memberCount: memberCount.value,
        link: link.value,
        allowLinkAccess: allowLinkAccess.value,
      };
      console.log("공격대 생성 시도:", raidData);
      alert(`공격대 "${raidName.value}" 생성 시도`);
    };

    // 조회 -> 생성 모드로 전환
    const switchToCreate = () => {
      isSearching.value = false;
    };

    // 생성 -> 조회 모드로 돌아가기
    const switchToSearch = () => {
      isSearching.value = true;
    };

    return {
      isSearching,
      raidName,
      password,
      raidLeader,
      memberCount,
      link,
      allowLinkAccess,
      searchRaid,
      createRaid,
      switchToCreate,
      switchToSearch,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped></style>
