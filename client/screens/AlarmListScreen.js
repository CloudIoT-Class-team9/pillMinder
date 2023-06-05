import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { React, useEffect, useState } from 'react';
import { getPillData, getUserData } from '../apis/api';

const AlarmListScreen = () => {
  const alarmTimes = ['1:32:20', '9:32:20', '17:32:20'];

  const [userData, setUserdata] = useState({});
  const [pillData, setPilldata] = useState();

  // 유저 받아오기
  useEffect(() => {
    const fetchUserData = async () => {
      const user = await getUserData('Seung');
      if (user !== undefined) {
        setUserdata(user);
        console.log('userData', userData);
      }
    };
    fetchUserData();
  }, []);

  // 약 받아오기
  useEffect(() => {
    const fetchPillData = async () => {
      const pill = await getPillData(userData.pillname);
      if (pill !== undefined) {
        setPilldata(pill);
        console.log('pillData', pillData);
      }
    };
    fetchPillData();
  }, [userData]);

  console.log('userData', userData);
  console.log('pillData', pillData);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.medicationCard}>
        <Text style={styles.cardTitle}>오늘의 복약 알림</Text>
      </View>
      {alarmTimes.map((alarm, index) => (
        <View key={index} style={styles.medicationInfoContainer}>
          <Image source={require('../assets/ic_alarm.png')} style={styles.medicationPhoto} />
          <View style={styles.medicationTextContainer}>
            <Text style={styles.medicationName}>{userData.pillname}</Text>
            <Text style={styles.medicationInstructions}>{alarm}</Text>
          </View>
        </View>
      ))}
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

export default AlarmListScreen;
