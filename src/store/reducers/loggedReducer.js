const isLogged = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_SIGNIN':
            return !state;
        default:
            return state;
    }
}

export default isLogged;