import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: localStorage.getItem("accessToken") || "",
  }),
  actions: {
    setAccessToken(token) {
      // 토큰 설정
      this.accessToken = token;
      localStorage.setItem("accessToken", token); // localStorage에 토큰 저장
    },
    clearAccessToken() {
      // 토큰 삭제
      this.accessToken = "";
      localStorage.removeItem("accessToken"); // localStorage에서 토큰 제거
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.accessToken, // 로그인 상태 확인 (토큰이 있는지 여부로 판단)
  },
});
