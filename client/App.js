import MainScreen from './MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='PillMinder' component={MainScreen} />
        {/* 스크린 추가 */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
