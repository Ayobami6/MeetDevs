// @ts-nocheck
import axios from 'axios';

interface AuthCredentials {
  email: string;
  password: string;
  name?: string;
}

export const authenticate = async (
  endpoint: string,
  credentials: AuthCredentials,
) => {
  const res = await axios.post(
    `https://meetdevs-api.onrender.com/${endpoint}`,
    credentials,
  );
  return res;
};
