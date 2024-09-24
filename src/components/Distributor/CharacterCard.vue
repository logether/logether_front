<!--CharacterCard.vue-->
<template>
  <div class="bg-stone-100 border-2 border-stone-200">
      <div class="flex flex-row w-full h-full items-center">
          <div class="flex-none w-12 h-12 bg-gray-300 dark:bg-gray-500 rounded-full"></div>
          <div class="px-2 flex-1 flex flex-col h-full">
              <div class="flex-3 mx-1 flex justify-between items-center">
                  <div class="flex items-center">
                      <span class="text-sm font-bold text-stone-800">Lv.</span>
                      <span class="mx-1 text-sm font-bold text-stone-800">{{ char_level }}</span>
                  </div>
                  <span class="text-sm font-bold text-stone-800 text-right">{{ char_class }}</span>
              </div>
              <div class="flex-7 mx-2 flex justify-between items-center">
                  <span class="text-2xl font-bold text-stone-800">{{ char_name }}</span>
                  <button v-if="isSearchResult" @click="addCharacter" class="bg-green-500 text-white px-2 py-1 rounded">
                      추가
                  </button>
                  <!-- 드롭다운 메뉴: 시너지 카드에서만 표시 -->
                  <div v-if="!isSearchResult && isInSynergyCard" class="relative">
                    <div class="bg-blue-500 text-white px-2 py-1 rounded mt-1 cursor-pointer" @click="toggleDropdown">
                        파티 선택
                    </div>
                    <div v-if="isDropdownOpen" class="dropdown-menu absolute bg-white border-2 border-gray-300 shadow-lg">
                        <ul>
                            <li v-for="party in parties" :key="party.num" @click="selectParty(party.num)" class="px-2 py-1 hover:bg-gray-100 cursor-pointer">
                                {{ party.num }}파티 
                            </li>
                            <li v-if="parties.length === 0" class="px-2 py-1 text-gray-500">대기</li>
                        </ul>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
      char_level: {
          type: String,
          required: true,
      },
      char_class: {
          type: String,
          required: true,
      },
      char_name: {
          type: String,
          required: true,
      },
      isSearchResult: {
          type: Boolean,
          default: false,
      },
      parties: {
          type: Array,
          default: () => [],
      },
      isInSynergyCard: {
          type: Boolean,
          default: false, // SynergyCard에서만 true
      },
  },
  data() {
      return {
          isDropdownOpen: false,
      };
  },
  methods: {
      addCharacter() {
          this.$emit('add-character', {
              level: this.char_level,
              class: this.char_class,
              name: this.char_name,
          });
      },
      toggleDropdown() {
          this.isDropdownOpen = !this.isDropdownOpen;
          console.log(this.parties);
      },
      selectParty(partyNum) {
          this.isDropdownOpen = false; // 드롭다운 닫기
          // 선택한 파티에 대한 추가 작업을 여기에 구현
          console.log(`파티 ${partyNum}가 선택되었습니다.`);
      },
  },
};
</script>

<style scoped>
.dropdown-menu {
    display: block; /* block으로 설정하여 보이게 함 */
    z-index: 10; /* 드롭다운이 다른 요소 위에 보이도록 설정 */
}
</style>