export const BASE_URL = 'http://localhost:5000';
export const SERVER_URL = 'https://backend-sme.herokuapp.com';

export const NODE_ENV = () => {
    let env;
    if (process.env.NODE_ENV === 'production') env = 'https://backend-sme.herokuapp.com';
    else if (process.env.NODE_ENV === 'development') env = 'http://localhost:5000';
    return env;
};
