import jwtDecode, { JwtPayload } from 'jwt-decode';

export const decodedToken = () => {
    const token: string | null = localStorage.getItem('accessToken').split(' ')[1];

    const decoded = jwtDecode<JwtPayload>(token);
    return decoded;
};
