export default function taskReducre(state = {}, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return action.payload //[...state, action.payload];
        default:
            return state;
    }
}