// 약 정보 get API
// (약 이름을 보내서 요청 시 '성인 복용 횟수', '어린이 복용 횟수' 응답)

// request body
export const PILL_REQ = {
  pillname: '훼스탈골드정',
};

// response body
export const PILL_RES = {
  adult: 3,
  child: 1,
};
