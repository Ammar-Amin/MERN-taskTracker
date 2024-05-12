import * as actionTypes from '../actions/type';

export const tasksReducer = (state = [], action) => {

    switch (action.type) {
        case actionTypes.ADD_TASK:
            return [action.payload, ...state]
        case actionTypes.GETALL_TASK:
            return action.payload
        case actionTypes.TOGGLE_TASK:
            return state.map(task => (
                task._id === action.payload._id
                    ? { ...task, done: !task.done }
                    : task)
            )
        case actionTypes.UPDATE_TASK:
            return state.map(task => (
                task._id === action.payload._id
                    ? { ...task, data: action.payload.data }
                    : task)
            )
        case actionTypes.REMOVE_TASK:
            return state.filter(task => task._id !== action.payload._id
            )
        default:
            return state;

    }
}