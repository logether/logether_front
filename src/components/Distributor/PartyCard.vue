<!--PartyCard.vue-->
<template>
    <div style="width: 230px; height: 300px; display: flex; flex-direction: column;">
        <div class="bg-stone-600" style="flex: 2; display: flex; align-items: center; justify-content: center;">
            <span class="text-2xl font-bold text-stone-300">{{ party_num }}</span>
            <span class="text-2xl font-bold text-stone-300">파티</span>
            <button @click="deleteParty" class="ml-2 bg-red-500 text-white px-2 py-1 rounded">
                삭제
            </button>
        </div>
        <div style="flex: 8; display: flex; flex-direction: column;">
            <CharacterCard
                v-for="(item, index) in party_char"
                :key="index"
                :char_level="item.char_level"
                :char_class="item.char_class"
                :char_name="item.char_name"
                :parties="parties"
                :isSearchResult="false"
                :isInSynergyCard="false" 
                 
            />
        </div>
    </div>
</template>

<script>
import CharacterCard from "./CharacterCard.vue"; // 상대 경로로 수정

export default {
    name: "PartyCard",
    components: {
        CharacterCard,
    },
    props: {
        party_char: {
            type: Array,
            required: true,
        },
        party_num: {
            type: String,
            required: true,
        },
        parties: { 
            type: Array,
            required: true,
        },
    },
    methods: {
        deleteParty() {
            this.$emit('delete-party', this.party_num);
        },
    },
};
</script>
