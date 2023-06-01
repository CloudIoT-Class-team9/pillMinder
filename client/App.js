import * as Notifications from 'expo-notifications';

import AlarmScreen from './AlarmScreen';
import MainScreen from './MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';

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

  // 알림 전송
  const sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '알림 제목 테스트',
        body: '알림 내용 테스트',
      },
      trigger: null, // 즉시 보내려면 'trigger'에 'null'을 설정
    });
  };

  useEffect(() => {
    sendNotification();

    const subscription = Notifications.addNotificationReceivedListener((notification) => {
      // 알림이 수신된 경우 처리할 코드
      console.log('알림 전송 완료', notification);
    });

    return () => {
      subscription.remove();
    };
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
        <Tab.Screen name='대시보드' component={MainScreen} />
        <Tab.Screen name='복약 알림' component={AlarmScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
