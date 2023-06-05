import * as Notifications from 'expo-notifications';

// 예약된 알림 삭제 함수
export const removeAllScheduledNotifications = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
  console.log('알림이 모두 삭제되었습니다.');
};
