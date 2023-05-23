import AlarmScreen from './AlarmScreen';
import MainScreen from './MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const App = () => {
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
