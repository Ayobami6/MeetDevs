import axios from 'axios';

interface AuthCredentials {
    email: string;
    password: string;
    name?: string;
}

export const authenticate = async (
    endpoint: string,
    credentials: AuthCredentials
) => {
    const res = await axios.post(
        `http://localhost:3000/${endpoint}`,
        credentials
    );
    return res;
};

export const employerAuth = async (endpoint: string) => {};
