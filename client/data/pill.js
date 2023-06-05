// 약 정보 get API
// (약 이름을 보내서 요청 시 '성인 복용 횟수', '어린이 복용 횟수' 응답)

// request body
export const PILL_REQ = {
  pillname: '훼스탈골드정',
};

// response body
export const PILL_RES = {
  adult: {
    pills: 2, // 한 번에 복용해야 하는 약 갯수 (Number)
    times: 3, // 하루에 몇 회 복용해야 하는지 (Number)
  },
  child: {
    pills: 1,
    times: 1,
  },
};
