import jwtDecode, { JwtPayload } from 'jwt-decode';

export const decodeToken = () => {
    const token: string | null = localStorage.getItem('token').split(' ')[1];

    const decoded = jwtDecode<JwtPayload>(token);
    return decoded;
};
