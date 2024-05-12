import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { thunk } from 'redux-thunk'

import { tasksReducer } from './reducers/tasksReducer'

const reducer = combineReducers({
    tasks: tasksReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store