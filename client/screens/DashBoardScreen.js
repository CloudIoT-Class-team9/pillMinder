import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const DashBoardScreen = ({ route }) => {
  const { date, userData, pillData, fitbitData } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.userCard}>
        <ImageBackground
          source={require('../assets/background_image.png')}
          style={styles.userCardBackground}
        >
          <Text style={styles.dateText}>{date}</Text>
          <Text style={styles.greetingText}>
            <Text style={styles.nameText}>{userData.name}</Text>
            보호자님, 안녕하세요
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.medicationCard}>
        <Text style={styles.cardTitle}>오늘의 복약 알림</Text>
      </View>
      <View style={styles.medicationInfoContainer}>
        <Image source={require('../assets/pill.png')} style={styles.medicationPhoto} />
        <View style={styles.medicationTextContainer}>
          <Text style={styles.medicationName}>{userData.pillname}</Text>
          <Text style={styles.medicationInstructions}>
            1일 {pillData.adult.times}회 {pillData.adult.pills}정 복용
          </Text>
        </View>
      </View>
      <View style={styles.dashboardCard}>
        <Text style={styles.cardTitle}>오늘의 건강 정보</Text>
      </View>
      <View style={styles.healthInfoContainer}>
        <View style={styles.healthInfoRow}>
          <View style={styles.healthInfoCard}>
            <View style={styles.cardContent}>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/ic_1.png')} style={styles.healthInfoImage} />
              </View>
              <Text style={styles.healthInfoText}>Heart Rate</Text>
              <Text style={styles.healthDetailText}>{fitbitData.heartRate}</Text>
            </View>
          </View>
          <View style={styles.healthInfoCard}>
            <View style={styles.cardContent}>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/ic_2.png')} style={styles.healthInfoImage} />
              </View>
              <Text style={styles.healthInfoText}>Heart</Text>
              <Text style={styles.healthDetailText}>{fitbitData.heartRate}</Text>
            </View>
          </View>
        </View>
        <View style={styles.healthInfoRow}>
          <View style={styles.healthInfoCard}>
            <View style={styles.cardContent}>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/ic_3.png')} style={styles.healthInfoImage} />
              </View>
              <Text style={styles.healthInfoText}>Temperature</Text>
              <Text style={styles.healthDetailText}>{fitbitData.temperature}</Text>
            </View>
          </View>
          <View style={styles.healthInfoCard}>
            <View style={styles.cardContent}>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/ic_4.png')} style={styles.healthInfoImage} />
              </View>
              <Text style={styles.healthInfoText}>Stress</Text>
              <Text style={styles.healthDetailText}>Stress 데이터</Text>
            </View>
          </View>
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
  userCard: {
    borderRadius: 8,
    marginBottom: 16,
  },
  userCardBackground: {
    borderRadius: 24,
    overflow: 'hidden',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 8,
    paddingTop: 16,
    paddingLeft: 24,
    color: '#fff',
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 600,
    paddingBottom: 16,
    paddingLeft: 24,
    color: '#fff',
  },
  nameText: {
    fontSize: 28,
    fontWeight: 900,
    color: '#fff',
  },
  medicationCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 16,
  },
  medicationPhoto: {
    width: 60,
    height: 60,
    borderRadius: 26,
  },
  medicationTextContainer: {
    marginLeft: 8,
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
    paddingHorizontal: 16,
  },
  alarmIcon: {
    width: 60,
    height: 60,
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
  healthInfoContainer: {
    marginTop: 8,
  },
  healthInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  healthInfoCard: {
    flex: 0.48,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderColor: '#ecedef',
    borderWidth: 1,
    padding: 16,
    height: 150,
  },
  cardContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 8,
  },
  healthInfoImage: {
    width: 64,
    height: 64,
  },
  healthInfoText: {
    fontSize: 20,
    fontWeight: 600,
    color: '#000',
    marginBottom: 4,
  },
  healthDetailText: {
    fontSize: 16,
    fontWeight: 400,
    color: '#8c8e97',
  },
});

export default DashBoardScreen;
