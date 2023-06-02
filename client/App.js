import * as Notifications from 'expo-notifications';

import { React, useEffect, useState } from 'react';
import { getFitbitData, getPillData, getUserData } from './apis/api';

import AlarmListScreen from './screens/AlarmListScreen';
import DashBoardScreen from './screens/DashBoardScreen';
import { FITBIT_RES } from './data/fitbit';
import { NavigationContainer } from '@react-navigation/native';
import { PILL_RES } from './data/pill';
import { USER_RES } from './data/user';
import { authorize } from './Auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { sendPillNotification } from './utils/sendPillNotification';

const Tab = createBottomTabNavigator();
const code = await authorize();

console.log(code);
const App = () => {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();

  const DATE = `${todayYear}-${todayMonth}-${todayDate}`;
  const CLIENT_ID = 'Seung123';

  console.log(DATE);

  const [userData, setUserdata] = useState({
    name: '',
    age: 0,
    pillname: '',
  });

  const [pillData, setPilldata] = useState({
    adult: {
      pills: 0,
      times: 0,
    },
    child: {
      pills: 0,
      times: 0,
    },
  });

  const [fitbitData, setFitbitdata] = useState({
    heartRate: '0',
    temperature: '0',
  });

  const ALARM_TIMES = ['1:32:20', '9:32:20', '17:32:20'];

  // 알림 권한 설정
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  // API 호출 및 저장
  useEffect(() => {
    (async () => {
      // const user = await getUserData(CLIENT_ID);
      // setUserdata(user);
      // const pill = await getPillData(userData.pillname);
      // setPilldata(pill);
      // const fitbit = await getFitbitData(CLIENT_ID, DATE, ALARM_TIMES[0]);
      // setFitbitdata(fitbit);
    })();
  }, []);

  // 알람 권한 허용
  useEffect(() => {
    (async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('알림 권한이 거부되었습니다!');
      }
    })();
  }, []);

  // 알람 예약
  useEffect(() => {
    // (async () => {
    //   await sendPillNotification(USER_RES.pillname, PILL_RES.adult.pills, PILL_RES.adult.times);
    //   const subscription = Notifications.addNotificationReceivedListener((notification) => {
    //     // 알림이 수신된 경우 처리할 코드
    //     console.log('알림 수신:', notification);
    //   });
    //   return () => {
    //     subscription.remove();
    //   };
    // })();
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
        <Tab.Screen
          name='대시보드'
          initialParams={{
            date: DATE,
            userData: USER_RES,
            pillData: PILL_RES,
            fitbitData: FITBIT_RES,
          }}
          component={DashBoardScreen}
        />
        <Tab.Screen
          name='복약 알림'
          initialParams={{
            pillName: USER_RES.pillname,
            alarmTimes: ALARM_TIMES,
          }}
          component={AlarmListScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
