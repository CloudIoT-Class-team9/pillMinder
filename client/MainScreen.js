import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const HealthScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <Text style={styles.dateText}>5월 23일</Text>
        <Text style={styles.greetingText}>박현지님, 안녕하세요</Text>
      </View>
      <View style={styles.medicationCard}>
        <Text style={styles.cardTitle}>오늘의 복약 알림</Text>
      </View>
      <View style={styles.medicationInfoContainer}>
        <Image source={require('./assets/pill.png')} style={styles.medicationPhoto} />
        <View style={styles.medicationTextContainer}>
          <Text style={styles.medicationName}>타이레놀정500mg</Text>
          <Text style={styles.medicationInstructions}>1일 3회 복용</Text>
        </View>
      </View>
      <View style={styles.dashboardCard}>
        <Text style={styles.cardTitle}>오늘의 건강 정보</Text>
        {/* 건강 데이더 */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  userCard: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  dateText: {
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 8,
  },
  greetingText: {
    fontSize: 32,
    fontWeight: 800,
  },
  medicationCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 16,
  },
  medicationInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 24,
    borderColor: '#ecedef',
    borderWidth: 1,
  },
  medicationPhoto: {
    width: 60,
    height: 60,
    borderRadius: 26,
    marginLeft: 8,
  },
  medicationTextContainer: {
    marginLeft: 8,
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
  dashboardCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HealthScreen;
