import * as Notifications from 'expo-notifications';

// 알림 전송 함수
export const sendNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: '알림 제목 테스트',
      body: '알림 내용 테스트',
    },
    trigger: null, // 즉시 보내려면 'trigger'에 'null'을 설정
  });
};
