import React, { useEffect } from 'react'
import { getAllTasks } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import Task from './Task';

function Tasks() {
    let dispatch = useDispatch()
    let tasks = useSelector(state => state.tasks)

    useEffect(() => {
        dispatch(getAllTasks());
    }, [])

    return (
        <ul >
            {
                tasks.length > 0
                    ? tasks.map(task => {
                        return <Task
                            key={task._id}
                            task={task}
                        />
                    })
                    : <h1 className='my-5 text-3xl text-center text-white'>Waiting for you Task...</h1>
            }
        </ul>
    )
}

export default Tasks
