import * as Notifications from 'expo-notifications';

// 복약 알림 전송 함수
export const sendPillNotification = async (pillname, pills, alarmNum) => {
  // alarmNum이 0일 경우에는 예외 처리
  if (alarmNum <= 0) {
    console.log('알림 개수는 1 이상이어야 합니다.');
    return;
  }

  const alarmTimes = []; // 알람 시간을 저장할 배열

  //  알림 예약 함수 (각각의 알림을 스케줄링)
  const scheduleMultipleNotifications = async () => {
    // 간격을 계산하기 위한 1일의 밀리초 값
    const oneDay = 24 * 60 * 60 * 1000;

    const interval = oneDay / alarmNum;

    // 알림 스케줄링을 위해 현재 시간을 가져옴
    const currentTime = new Date().getTime();

    // 알림 예약 함수
    for (let i = 1; i <= alarmNum; i++) {
      // alarmNum번 알림을 보낼 시간 계산
      const trigger = currentTime + i * interval;

      const notificationContent = {
        title: `복약 시간입니다! [${i} / ${alarmNum}회]`,
        body: `${pillname} ${pills}정을 복용할 시간이에요.`,
        data: { key: 'value' },
        sound: 'default', // 소리 추가
        vibrate: [0, 250, 250, 250], // 진동 추가
        channelId: 'default',
      };

      await Notifications.scheduleNotificationAsync({
        content: notificationContent,
        trigger,
      });

      const date = new Date(trigger);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const formattedDate = `${hours}:${minutes}`;

      alarmTimes.push(formattedDate);
      console.log(`복약 알림 ${i}이 ${formattedDate}에 예약되었습니다.`);
    }

    console.log('알림 예약 시간 : ', alarmTimes);
    return alarmTimes;
  };

  // 알림 예약 함수 호출
  try {
    await scheduleMultipleNotifications();
    console.log('복약 알림이 모두 정상적으로 예약되었습니다.');
  } catch (error) {
    console.log('복약 알림 예약 중 오류가 발생했습니다:', error);
  }
};
