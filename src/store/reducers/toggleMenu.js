const initialState = false;

const toggleMenu = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_NAV_ON':
            return state = true;
        case 'TOGGLE_NAV_OFF':
            return state = false;
        default:
            return state;
    }
};

export default toggleMenu;
