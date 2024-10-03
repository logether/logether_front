// src/utils/scheduleUtils.js
// 추후 삭제예정

export function getWeekSchedules(weekOffset) {
  const today = new Date();
  const startDate = new Date(
    today.setDate(today.getDate() + weekOffset * 7 - today.getDay())
  ); // 주의 시작일 계산
  const days = [];

  for (let i = 0; i < 28; i++) {
    // 4주간의 일정
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    const dayOfWeek = currentDate.toLocaleString("ko-KR", { weekday: "short" });
    const dateStr = `${currentDate.getFullYear()}.${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${currentDate.getDate().toString().padStart(2, "0")}`;

    days.push({
      date: dateStr,
      dayOfWeek,
      tasks: [
        { text: "공격대 준비", completed: false, important: true },
        { text: "보스 공략", completed: false, important: false },
      ],
      participants: [
        { name: "참가자1", role: "탱커" },
        { name: "참가자2", role: "딜러" },
      ],
    });
  }

  return days;
}
