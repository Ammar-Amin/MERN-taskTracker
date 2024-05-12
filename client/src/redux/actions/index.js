import axios from 'axios';
import { ADD_TASK, GETALL_TASK, REMOVE_TASK, TOGGLE_TASK, UPDATE_TASK } from './type';

const API_URL = 'https://mern-tasktracker-kyxy.onrender.com';

export const addTask = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/task`, { data })
        dispatch({ type: ADD_TASK, payload: res.data })
    } catch (e) {
        console.log('Error calling addTask()', e.message);
    }
}

export const getAllTasks = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/task`)
        // console.log('AllTasks:', res)
        dispatch({ type: GETALL_TASK, payload: res.data })
        return res;
    } catch (e) {
        console.log('Error calling getAllTasks()', e.message);
    }
}

export const toggleTask = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/task/${id}`)

        dispatch({ type: TOGGLE_TASK, payload: res.data })
    } catch (e) {
        console.log('Error calling toggleTask()', e.message);
    }
}

export const updateTodo = (id, data) => async (dispatch) => {
    try {
        // console.log('put req', id, data)
        const res = await axios.put(`${API_URL}/task/${id}`, { data })

        dispatch({ type: UPDATE_TASK, payload: res.data })
    } catch (e) {
        console.log('Error calling updateTodo()', e.message);
    }
}

export const removeTask = (id) => async (dispatch) => {
    try {
        console.log(id)
        const res = await axios.delete(`${API_URL}/task/${id}`,)

        dispatch({ type: REMOVE_TASK, payload: res.data })
    } catch (err) {
        console.log('Error calling removeTask()', err.message);
    }
}