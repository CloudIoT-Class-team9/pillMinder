import * as AuthSession from 'expo-auth-session';

import Constants from 'expo-constants';

const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });

export const authConfig = {
  clientId: Constants.manifest.extra.FITBIT_CLIENT_ID,
  clientSecret: Constants.manifest.extra.FITBIT_CLIENT_SECRET,
  redirectUri,
  scopes: ['activity', 'heartrate'], // 필요한 권한에 따라 스코프를 조정합니다.
  prompt: 'consent', // 사용자에게 매번 동의를 요청하도록 설정합니다.
};

export const authorize = async () => {
  const result = await AuthSession.startAsync({
    authUrl:
      `https://www.fitbit.com/oauth2/authorize?` +
      `client_id=${authConfig.clientId}` +
      `&response_type=code` +
      `&redirect_uri=${encodeURIComponent(authConfig.redirectUri)}` +
      `&scope=${encodeURIComponent(authConfig.scopes.join(' '))}` +
      `&prompt=${encodeURIComponent(authConfig.prompt)}`,
  });

  return result.params.code;
};
