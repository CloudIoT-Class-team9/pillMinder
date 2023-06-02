import axios from 'axios';

export const client = axios.create({
  baseURL: 'BASE_URL',
  headers: {
    'Content-type': 'application/json',
  },
});

export const getUserData = async (clientId) => {
  try {
    const { data } = await client.get(`/user`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getPillData = async (pillname) => {
  try {
    const { data } = await client.get(`/pill`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getFitbitData = async (clientId, dateTime, time) => {
  try {
    const { data } = await client.get(`/fitbit`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
