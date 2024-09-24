<!--DistributorView.vue-->
<template>
    <div>
        <!-- 주요 기능 섹션 -->
        <div class="py-8 px-4 max-w-6xl mx-auto" style="width: 1900px;  height: 800px;">
            <div class="flex h-full justify-center">
                <!--1. 분배된 파티 표시 구역-->
                <div class="bg-orange-100" style="width:600px; flex-shrink: 0; display: flex; flex-direction: column;">
                    <!--1-1. 파티분배기 상단 -->
                    <div class="bg-orange-200" style="flex:2; display: flex;">
                        <!-- 1-1-1. 파티 분배기 타이틀 -->
                        <div class="bg-orange-400" style="flex:7;">
                            <div class="px-5" style="margin-top:80px;">
                                <span class="text-3xl font-bold text-gray-900 dark:text-gray-900">공격대 파티 분배기</span>
                            </div>
                        </div>
                        <!-- 1-1-2. 파티 수 -->
                        <div class="bg-orange-500" style="flex:3;">
                            <div class="text-xl font-bold px-5 flex justify-end" style="margin-top:100px;">
                                <span>파티 수:</span>
                                <span class="mx-2">{{ parties.length }}</span>
                            </div>
                        </div>
                    </div>
                    <!--1-2. 파티목록 -->
                    <div class="bg-orange-300 flex-8 overflow-y-auto" style="flex:8; max-height: 500px;">
                        <!--파티 목록-->
                        <div class="grid grid-cols-2 gap-4 p-4">
                            <PartyCard
                                v-for="(party, index) in parties"
                                :key="index"
                                :party_char="party.charList"
                                :party_num="String(party.num)"
                                :parties="parties"
                                @delete-party="removeParty(party.num)"
                            />
                        </div>
                    </div>
                    <!-- 파티 추가 버튼 -->
                    <div class="flex justify-center mb-4">
                        <button @click="addParty" class="bg-blue-500 text-white px-4 py-2 rounded">
                            파티 추가
                        </button>
                    </div>
                </div>
                <!--2. 공격대원 표시 구역-->
                <div class="bg-red-100" style="width:300px; flex-shrink: 0; display: flex;">
                    <div class="bg-red-200 w-full" style="display: flex; flex-direction: column;">
                        <!--2-1. 공격대원 목록 타이틀-->
                        <div class="bg-red-300" style="flex:2;">
                            <div class="px-5" style="margin-top:80px;">
                                <span class="text-3xl font-bold text-gray-900 dark:text-gray-900">공격대원 목록</span>
                            </div>
                        </div>
                        <!--2-2. 공격대원 목록-->
                        <div class="bg-red-400 flex-8 overflow-y-auto" style="flex:8; max-height: 550px;">
                            <SynergyCard
                                v-for="(synergy, index) in synergies"
                                :key="index"
                                :synergy_char="synergy.charList"
                                :synergy_name="synergy.name"
                                @add-character="addCharacterToSynergy(synergy.name, $event)"
                            />
                        </div>
                     </div>
                </div>
                <!--3. 파티 분배기 옵션 표시 구역-->
                <div class="bg-lime-100" style="width:300px; flex-shrink: 0; display: flex; flex-direction: column;">
                    <!-- 3-1. 분배기 옵션창-->
                     <div class="bg-lime-200" style="flex:5; display: flex; flex-direction: column;">
                        <!--3-1-1. 분배기 옵션창 타이틀-->
                        <div class="bg-lime-300" style="flex:2;">
                            분배기 옵션창 타이틀
                        </div>
                        <!--3-1-2. 분배기 옵션창-->
                        <div class="bg-lime-600" style="flex:8;">
                            분배기 옵션창
                        </div>
                     </div>
                    <!-- 3-2. 로스트아크 api 캐릭터 검색창-->
                    <div class="bg-lime-300" style="flex:5; display: flex; flex-direction: column;">
                        <!-- 3-2-1. 캐릭터 검색창 타이틀-->
                        <div class="bg-lime-400" style="flex:1; display: flex; align-items: center; justify-content: center;">
                            <span class="text-lg font-bold">캐릭터 검색창</span>
                        </div>
                        <!-- 3-2-2. 캐릭터 검색창 입력칸-->
                        <div class="bg-lime-500" style="flex:2; display: flex; align-items: center; padding: 0 10px;">
                            <input
                                v-model="characterName"
                                type="text"
                                placeholder="캐릭터 닉네임 입력"
                                class="border-2 border-gray-300 rounded p-2 flex-1"
                            />
                            <button @click="searchCharacter" class="bg-blue-500 text-white px-4 py-2 rounded ml-2">
                                검색
                            </button>
                        </div>
                        <!-- 3-2-3. 캐릭터 검색 목록-->
                        <div class="bg-lime-600" style="flex:7; overflow-y: auto;">
                            <div v-if="characters.length === 0" class="text-center py-4">
                                검색 결과가 없습니다.
                            </div>
                            <div class="grid grid-cols-2 gap-4 p-4" style="display: flex;">
                                <CharacterCard
                                    v-for="(character, index) in characters"
                                    :key="index"
                                    :char_level="character.level"
                                    :char_class="character.class"
                                    :char_name="character.name"
                                    :parties=parties
                                    :isSearchResult="true"
                                     @add-character="addCharacterToSynergy"
                                    class="character-card" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 풋터 -->
        <footer class=""></footer>
    </div>
</template>

<script>
import PartyCard from "../components/Distributor/PartyCard.vue";
import CharacterCard from "../components/Distributor/CharacterCard.vue";
import { getCharacterInfo } from "../api/api.js";
import SynergyCard from "../components/Distributor/SynergyCard.vue";

export default {
    name: "DistributorView",
    components: {
        PartyCard,
        CharacterCard,
        SynergyCard,
    },
    data() {
        return {
            characterName: '', // 입력할 캐릭터 이름
            characters: [], // 검색 결과 캐릭터 목록

            
            parties: [
                {
                    num: 1,
                    charList: [
                        { char_level: '1610', char_class: '직업1',char_name: '닉네임1' },
                        { char_level: '1620', char_class: '직업2',char_name: '닉네임2' },
                        { char_level: '1630', char_class: '직업3',char_name: '닉네임3' },
                        { char_level: '1640', char_class: '직업4',char_name: '닉네임4' },
                    ],
                },
            ],
            /*
            parties: [
                {
                    num: 1,
                    charList: []
                },
            ],*/
            synergies: [
                {
                    name: '치명타 확률 증가',
                    charList: [],
                    jobs:['배틀마스터','건슬링어','아르카나','스트라이터','기상술사'],
                },
                {
                    name: '치명타 피해 증가',
                    charList: [],
                    jobs:['창술사'],
                },
                {
                    name: '공격력 증가',
                    charList: [],
                    jobs:['기공사','스카우터'],
                },
                {
                    name: '받는 피해 증가',
                    charList: [],
                    jobs:['소울이터','소서리스','데모닉','호크아이','브레이커','인파이터','슬레이어'],
                },
                {
                    name: '방어력 감소',
                    charList: [],
                    jobs:['워로드','서머너','블래스터','디스트로이어','리퍼'],
                },
                {
                    name: '헤드&백어택 피해 증가',
                    charList: [],
                    jobs:['워로드','블레이드'],
                },
                {
                    name: '정화',
                    charList: [],
                    jobs:['워로드','기공사','도화가','홀리나이트','서머너'],
                },
                {
                    name: '피해 감소&보호막',
                    charList: [],
                    jobs:['워로드','기공사','기상술사'],
                },
                {
                    name: '무력화 피해 증가',
                    charList: [],
                    jobs:['디스트로이어','인파이터','블래스터'],
                },
                {
                    name: '공격속도 증가',
                    charList: [],
                    jobs:['배틀마스터','블레이드','스트라이커','기상술사','바드','도화가'],
                },
                {
                    name: '이동속도 증가',
                    charList: [],
                    jobs:['배틀마스터','블레이드','호크아이','기상술사','도화가','홀리나이트'],
                },
                {
                    name: '마나 회복',
                    charList: [],
                    jobs:['바드','홀리나이트','도화가','서머너'],
                },
                {
                    name: '서포터',
                    charList: [],
                    jobs:['바드','홀리나이트','도화가'],
                },
            ],
        };
    },
    methods: {
        addParty() {
            const newPartyNum = this.parties.length + 1;
            const newParty = {
                num: newPartyNum,
                charList: [
                    /*
                    { char_level: '1600', char_class: `직업${newPartyNum * 4 - 3}`, char_name: `닉네임${newPartyNum * 4 - 3}` },
                    { char_level: '1610', char_class: `직업${newPartyNum * 4 - 3}`,char_name: `닉네임${newPartyNum * 4 - 2}` },
                    { char_level: '1620', char_class: `직업${newPartyNum * 4 - 3}`,char_name: `닉네임${newPartyNum * 4 - 1}` },
                    { char_level: '1630', char_class: `직업${newPartyNum * 4 - 3}`,char_name: `닉네임${newPartyNum * 4}` },*/
                ],
            };
            this.parties.push(newParty);

        },
        removeParty(partyNum) {
            this.parties = this.parties.filter(party => party.num !== partyNum);
            this.reassignPartyNumbers();
        },
        reassignPartyNumbers() {
            this.parties.forEach((party, index) => {
                party.num = index + 1; // 1부터 시작하는 번호로 재조정
            });
        },
        async searchCharacter() {
            try {
                const characterData = await getCharacterInfo(this.characterName);

                this.characters = [{
                    name: characterData.CharacterName,
                    class:characterData.CharacterClassName,
                    level: characterData.ItemAvgLevel,
                }];
            } catch (error) {
                console.error('캐릭터 검색 중 오류 발생:', error);
            }
        },
        addCharacterToSynergy(character) {
            // 캐릭터의 직업과 일치하는 시너지 카드를 찾기
            const matchingSynergies = this.synergies.filter(synergy => 
                synergy.jobs.includes(character.class)
            );

            if (matchingSynergies.length > 0) {
                matchingSynergies.forEach(matchingSynergy => {
                    matchingSynergy.charList.push({
                        char_level: character.level,
                        char_class: character.class,
                        char_name: character.name,
                    });
                    console.log(`${character.class}가 ${matchingSynergy.name} 시너지 카드에 추가되었습니다.`);
                });
            } else {
                console.error(`직업 ${character.class}에 맞는 시너지 카드가 없습니다.`);
            }
        },
    },
};
</script>

<style scoped>
    .character-card {
    width: 100%; /* 부모 요소의 넓이에 맞추기 */
    box-sizing: border-box; /* 패딩과 테두리를 포함하도록 */
}
</style>
