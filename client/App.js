import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>pillMinder</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
