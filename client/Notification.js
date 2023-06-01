import * as Permissions from 'expo-permissions';

import { Notifications } from 'expo';
import { useEffect } from 'react';

const Notification = () => {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  const registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      // 알림 권한이 거부된 경우 처리할 로직 작성
      return;
    }

    const token = await Notifications.getExpoPushTokenAsync();
    // 서버로 푸시 토큰 전송
  };
};
