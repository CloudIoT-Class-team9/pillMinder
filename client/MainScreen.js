import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const HealthScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dashboardCard}>
        <Text style={styles.cardTitle}>오늘의 복약 알림</Text>
        {/* 약 정보 */}
      </View>
      <View style={styles.medicationCard}>
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
  dashboardCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  medicationCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default HealthScreen;
