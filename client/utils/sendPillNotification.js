import * as Notifications from 'expo-notifications';

// 복약 알림 전송 함수
export const sendPillNotification = async (alarmNum) => {
  // alarmNum이 0일 경우에는 예외 처리
  if (alarmNum <= 0) {
    console.log('알림 개수는 1 이상이어야 합니다.');
    return;
  }

  // 알림 스케줄링을 위해 현재 시간을 가져옴
  // const now = new Date();

  // 간격을 계산하기 위한 1일의 밀리초 값
  // const oneDay = 24 * 60 * 60 * 1000;

  // alarmNum번 알림을 보내기 위한 간격
  // const interval = oneDay / alarmNum;
  // const interval = (10 * 60 * 1000) / alarmNum;
  // console.log(alarmNum);
  // console.log(interval);

  // alarmNum번 알림을 보내기 위한 시간 계산
  // const notificationTimes = [];
  // for (let i = 0; i < alarmNum; i++) {
  //   console.log(now.getTime());

  //   const trigger = now + i * interval;

  //   const notificationTime = new Date(now.getTime() + i * interval);
  //   console.log(notificationTime);
  //   notificationTimes.push(notificationTime);
  // }

  // 알림 예약 함수 (각각의 알림을 스케줄링)
  // console.log(notificationTimes);
  // const scheduleNotifications = async () => {
  //   for (const time of notificationTimes) {
  //     await Notifications.scheduleNotificationAsync({
  //       content: {
  //         title: '복약 시간입니다!',
  //         body: '타이레놀정500mg을 복용할 시간이에요.',
  //         sound: 'default', // 소리 추가
  //         vibrate: [0, 250, 250, 250], // 진동 추가
  //       },
  //       trigger: {
  //         date: time,
  //         type: 'date',
  //       },
  //     });
  //   }
  // };
  const scheduleMultipleNotifications = async () => {
    const timeRange = 10 * 60 * 1000; // 10분 (밀리초 단위)
    const interval = timeRange / alarmNum;

    const currentTime = new Date().getTime();

    for (let i = 1; i <= alarmNum; i++) {
      const trigger = currentTime + i * interval;

      const notificationContent = {
        title: `알림 제목 ${i}`,
        body: `알림 본문 ${i}`,
        data: { key: 'value' },
        sound: 'default',
        vibrate: [0, 250, 250, 250], // 진동 추가
        channelId: 'default',
      };

      await Notifications.scheduleNotificationAsync({
        content: notificationContent,
        trigger,
      });

      console.log(`알림 ${i}이 예약되었습니다.`);
    }
  };
  // 알림 예약 함수 호출
  try {
    await scheduleMultipleNotifications();
    console.log('알림이 예약되었습니다.');
  } catch (error) {
    console.log('알림 예약 중 오류가 발생했습니다:', error);
  }
};
