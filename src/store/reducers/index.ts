// Reducers are functions that return a new global state every time an action is dispatched. 
// They take in the current global state and return the new state based on the action that is dispatched/called.  
// This new state is calculated based on the previous state.

const GlobalState = {
    data: ""
};

const gameReducer = (state = GlobalState, action) => {
    switch (action.type) {
        case "MOVE_RIGHT":
            /**
             * Perform a certain set of operations
             */
            return {
                ...state, data: action.payload
            };

        default:
            return state;
    }
}

export default gameReducer;