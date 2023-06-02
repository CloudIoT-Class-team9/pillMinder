// 사용자 fitbit 정보 get API
// clientId, 날짜, 시간을 보내서 요청 시 요청한 시간에 해당하는 'heartRate(평균값)', 'temperature' 응답

// request body
export const FITBIT_REQ = {
  clientId: 'Seung123',
  dateTime: '2023-05-18',
  time: '13:00:00',
};

// response body
export const FITBIT_RES = {
  heartRate: '76.4',
  temperature: '36.4',
};
