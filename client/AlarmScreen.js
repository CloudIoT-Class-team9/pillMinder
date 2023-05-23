import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const AlarmScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.medicationCard}>
        <Text style={styles.cardTitle}>오늘의 복약 알림</Text>
      </View>
      <View style={styles.medicationInfoContainer}>
        <Image source={require('./assets/ic_alarm.png')} style={styles.medicationPhoto} />
        <View style={styles.medicationTextContainer}>
          <Text style={styles.medicationName}>타이레놀정500mg</Text>
          <Text style={styles.medicationInstructions}>2023.05.23 23:00</Text>
        </View>
      </View>
      <View style={styles.medicationInfoContainer}>
        <Image source={require('./assets/ic_alarm.png')} style={styles.medicationPhoto} />
        <View style={styles.medicationTextContainer}>
          <Text style={styles.medicationName}>타이레놀정500mg</Text>
          <Text style={styles.medicationInstructions}>2023.05.23 15:00</Text>
        </View>
      </View>
      <View style={styles.medicationInfoContainer}>
        <Image source={require('./assets/ic_alarm.png')} style={styles.medicationPhoto} />
        <View style={styles.medicationTextContainer}>
          <Text style={styles.medicationName}>타이레놀정500mg</Text>
          <Text style={styles.medicationInstructions}>2023.05.23 09:00</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  medicationCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  medicationPhoto: {
    width: 60,
    height: 60,
    borderRadius: 26,
  },
  medicationTextContainer: {
    marginLeft: 24,
  },
  medicationInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    marginTop: 12,
    borderRadius: 24,
    borderColor: '#ecedef',
    borderWidth: 1,
    paddingHorizontal: 16,
  },
  medicationName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  medicationInstructions: {
    fontSize: 16,
    color: '#8c8e97',
  },
});

export default AlarmScreen;
