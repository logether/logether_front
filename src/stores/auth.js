import { jwtDecode } from "jwt-decode";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: localStorage.getItem("accessToken") || "",
    decodedToken: null,
  }),
  actions: {
    setAccessToken(token) {
      // 토큰 설정
      this.accessToken = token;
      localStorage.setItem("accessToken", token); // localStorage에 토큰 저장
      this.decodedToken = jwtDecode(token);
      console.log("디코딩된 토큰:", this.decodedToken);
    },
    clearAccessToken() {
      // 토큰 삭제
      this.accessToken = "";
      this.decodedToken = null;
      localStorage.removeItem("accessToken"); // localStorage에서 토큰 제거
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.accessToken, // 로그인 상태 확인 (토큰이 있는지 여부로 판단)
    userInfo: (state) => state.decodedToken,
  },
});
