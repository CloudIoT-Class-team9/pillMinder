import * as Notifications from 'expo-notifications';

import { React, useEffect, useState } from 'react';

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

  // 알람 권한 허용
  useEffect(() => {
    (async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('알림 권한이 거부되었습니다!');
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
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
