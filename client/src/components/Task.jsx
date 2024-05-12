import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeTask, toggleTask, updateTodo } from '../redux/actions'

const Task = ({ task }) => {
    let [editable, setEditable] = useState(false)
    let [text, setText] = useState(task.data)
    let dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        setEditable(prev => !prev)
        dispatch(updateTodo(task._id, text))
    }

    return (
        <li className={'w-[95%] mx-auto sm:w-[600px] my-3 py-3 px-6 flex gap-4 font-medium text-white ' + (task.done ? 'bg-slate-700 line-through opacity-60' : "bg-slate-600")}
        >
            <span className={`text-wrap ${editable ? 'hidden' : 'flex-1'}`}
                onClick={() => dispatch(toggleTask(task._id))}
            >
                {task.data}
            </span>
            <form onSubmit={handleSubmit}>
                <input type="text" autoFocus={true} className={'bg-transparent text-white border-b-[1px] border-white outline-none ' + (editable ? 'flex-1' : 'hidden')} value={text} onChange={(e) => setText(e.target.value)} />
            </form>
            <span onClick={() => setEditable(!editable)}>
                <i className='fas fa-pen' />
            </span>
            <span onClick={() => dispatch(removeTask(task._id))}>
                <i className='fas fa-trash' />
            </span>
        </li>
    )
}

export default Task
