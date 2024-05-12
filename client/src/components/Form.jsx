import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/actions'

function Form() {
    let [input, setInput] = useState('')
    let dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Submitted form')
        dispatch(addTask(input))
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit} className='w-[90%] sm:w-[500px] mx-auto p-7 flex flex-col gap-2 sm:flex-row bg-teal-700 rounded-lg'>
            <input
                name='text'
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='flex-1 py-1 px-3 text-black border-none outline-none rounded-md cursor-pointer placeholder:text-slate-700' placeholder="Enter Your Task here..." />
            <input type='submit' className='w-[50%] mx-auto sm:w-auto px-3 py-1 font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg cursor-pointer' value='Add Task' />
        </form>
    )
}

export default Form
