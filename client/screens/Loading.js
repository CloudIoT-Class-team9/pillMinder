import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const Loading = () => {
  return (
    <View style={styles.medicationCard}>
      <Text style={styles.cardTitle}>로딩중</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Loading;
