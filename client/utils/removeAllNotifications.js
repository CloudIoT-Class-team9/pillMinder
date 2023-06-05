import * as Notifications from 'expo-notifications';

// 예약된 알림 삭제 함수 (임시)
export const removeAllScheduledNotifications = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
};
removeAllScheduledNotifications();
