const isLogged = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_SIGNIN':
            return true;
        case 'TOGGLE_SIGNOUT':
            return false;
        default:
            return state;
    }
};

export default isLogged;