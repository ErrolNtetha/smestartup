// Define the initial state here
// and pass the through the state in the reducer

const InitialState = {
    counter: 0,
    title: 'Learning Redux',
}

const counterReducer = (state = InitialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
          return state.counter + 1
        case 'DECREMENT':
            return state.counter - 1
        default:
      } 
}

export default counterReducer;