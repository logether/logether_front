<!--SynergyCard.vue-->
<template>
    <div class="w-full border-2 border-stone-800" style="display: flex; flex-direction: column;">
        <!-- 1. 시너지 카드 이름-->
        <div class="bg-stone-600" style="flex: 2; display: flex; align-items: center; justify-content: center;">
            <span class="text-2xl font-bold text-stone-300">{{ synergy_name }}</span>
        </div>
        <!-- 2. 시너지 카드 공대원 목록-->
        <div style="flex: 8; display: flex; flex-direction: column;">
            <CharacterCard
                v-for="(item, index) in synergy_char"
                :key="index"
                :char_level="item.char_level"
                :char_class="item.char_class"
                :char_name="item.char_name"
                :parties="parties"
                :isInSynergyCard="true"
            />
        </div>
    </div>
</template>

<script>
import CharacterCard from "./CharacterCard.vue"; // 상대 경로로 수정

export default {
    name: "SynergyCard",
    components: {
        CharacterCard,
    },
    props: {
        synergy_name: {
            type: String,
            required: true,
        },
        synergy_char: {
            type: Array,
            required: true,
        },
        parties: {
            type: Array,
            default: () => [],
        },
    },
    methods: {

    },
};
</script>

