import * as Notifications from 'expo-notifications';

import { React, useEffect } from 'react';

import AlarmListScreen from './screens/AlarmListScreen';
import DashBoardScreen from './screens/DashBoardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { sendPillNotification } from './utils/sendPillNotification';

const Tab = createBottomTabNavigator();

const App = () => {
  const CLIENT_ID = 'Seung123';

  const USER_DATA = {
    name: '남궁승',
    age: 24,
    pillname: '타이레놀정160mg',
  };

  const PILL_DATA = {
    adult: {
      pills: 2,
      times: 3,
    },
    child: {
      pills: 1,
      times: 1,
    },
  };

  const FITBIT_DATA = {
    heartRate: '76.4',
    temperature: '36.4',
  };

  const ALARM_TIMES = [];

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
    (async () => {
      await sendPillNotification('타이레놀정160mg', 1, 3);

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
