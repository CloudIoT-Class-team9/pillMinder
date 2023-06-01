import * as Notifications from 'expo-notifications';

import { React, useEffect } from 'react';

import AlarmListScreen from './screens/AlarmListScreen';
import DashBoardScreen from './screens/DashBoardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { sendPillNotification } from './utils/sendPillNotification';

const Tab = createBottomTabNavigator();

const App = () => {
  // 알림 권한 설정
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  useEffect(() => {
    (async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('알림 권한이 거부되었습니다!');
      }
    })();
  }, []);

  useEffect(() => {
    // const removeAllScheduledNotifications = async () => {
    //   await Notifications.cancelAllScheduledNotificationsAsync();
    // };
    // removeAllScheduledNotifications();

    (async () => {
      await sendPillNotification(3);

      const subscription = Notifications.addNotificationReceivedListener((notification) => {
        // 알림이 수신된 경우 처리할 코드
        console.log('알림 수신:', notification);
      });

      return () => {
        subscription.remove();
      };
    })();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 14,
          },
        }}
      >
        <Tab.Screen name='대시보드' component={DashBoardScreen} />
        <Tab.Screen name='복약 알림' component={AlarmListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
