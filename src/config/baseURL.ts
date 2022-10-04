export const BASE_URL = 'http://localhost:5000';
export const SERVER_URL = 'https://blendotsme.onrender.com';

export const NODE_ENV = () => {
    let env;
    if (process.env.NODE_ENV === 'production') env = SERVER_URL;
    else if (process.env.NODE_ENV === 'development') env = BASE_URL;
    return env;
};
