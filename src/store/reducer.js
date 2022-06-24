const initialState = {
    counter: -1,
    persons: [1, 2, 3, 4, 5]
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DEC_COUNTER':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case 'SUB_COUNTER':
            return{
                ...state,
                counter: state.counter - action.payload
            }
        default: return state
    }
}
export default rootReducer