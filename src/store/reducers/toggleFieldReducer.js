const initialState = false;

const toggleField = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_ON':
            return state = true;
        case 'TOGGLE_OFF':
            return state = false;
        default:
            return state;
    }
};

export default toggleField;