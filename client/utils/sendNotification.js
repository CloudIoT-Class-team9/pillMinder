import * as Notifications from 'expo-notifications';

// 알림 전송 함수
export const sendNotification = async (alarmNum) => {
  // 알림 스케줄링을 위해 현재 시간을 가져옴
  const now = new Date();

  // 간격을 계산하기 위한 1일의 밀리초 값
  const oneDay = 24 * 60 * 60 * 1000;

  // alarmNum번 알림을 보내기 위한 간격
  const interval = oneDay / alarmNum;

  // alarmNum번 알림을 보내기 위한 시간 계산
  const notificationTimes = [];
  for (let i = 0; i < alarmNum; i++) {
    const notificationTime = new Date(now.getTime() + i * interval);
    notificationTimes.push(notificationTime);
  }

  // 각각의 알림을 스케줄링
  notificationTimes.forEach(async (time) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '복약 시간입니다!',
        body: '00 약을 복용할 시간이에요.',
        sound: 'default', // 소리 추가
        vibrate: [0, 250, 250, 250], // 진동 추가
      },
      trigger: {
        date: time,
      },
    });
  });
};
