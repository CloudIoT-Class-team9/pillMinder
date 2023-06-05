import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://5yvuzb3lfk.execute-api.ap-southeast-2.amazonaws.com/cloud',
  headers: {
    'Content-type': 'application/json',
  },
});

export const getUserData = async (clientId) => {
  try {
    const { data } = await client.get(`/getuser?clientId=${clientId}`);
    console.log('getUserData', data);
    return data;
  } catch (err) {
    console.error('getUserData err', err);
  }
};

export const getPillData = async (pillname) => {
  try {
    const { data } = await client.get(`/getpilltime?pillname=${pillname}`);
    console.log('getPillData', data);
    return data;
  } catch (err) {
    console.error('getPillData err', err);
  }
};

export const getFitbitData = async (dateTime, time) => {
  try {
    const { data } = await client.get(`/getfitbitdata?date=${dateTime}&time=${time}`);
    console.log('getFitbitData', data);
    return data;
  } catch (err) {
    console.error('getFitbitData err', err);
  }
};
