import axios from 'axios';

const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyOTY3MzYifQ.BUvWWUVg2_bYdEBMGlLUm1t3jbGXrl1a32dEmP0xPN0FpiLg2-iunfK8pQBrN6TnUH_kTEqpihhZSbu0xol1aBOpKGLOjsmN2OWB9qnCmVQZPjdnNVllbghRiJozMFupgVKz64Bk9vqEr_EYddrIuYjXbLmiISJoR_P0qwTDmaeqf7ngjoumy6UF7yDIUROlAbmPNxrD5IIX5epW9sdcvnv_UjoEYVPv7LAeMRLvNixpNfYckXWM1b7osvxAFpl8ko7RznkqxdW0bp_xeiWIGn1s7EH8TwMKMgaO7gN-f8N9cRmpTsp5Q820UreREV6pjLzFHxP6ypABKjStJYDozg'; // API 키
const BASE_URL = 'https://developer-lostark.game.onstove.com/'; // 로스트아크 API 기본 URL

// Axios 인스턴스 생성
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `bearer ${API_KEY}`,
        'Content-Type': 'application/json ',
        'Accept': 'application/json',
    },
});

// 캐릭터 정보 가져오는 함수
export const getCharacterInfo = async (nickname) => {
    try {
        const response = await apiClient.get(`/armories/characters/${nickname}/profiles`);
        return response.data;
    } catch (error) {
        console.error('Error fetching character info:', error);
        throw error;
    }
};


export default {
    getCharacterInfo,
};