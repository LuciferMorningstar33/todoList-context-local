import React from 'react'
import { useTodo } from '../context/TodoContext';

function DeleteAll() {

const {deleteAll} = useTodo()

const deleteall = () => {
    deleteAll()
}

  return (
    <div className='w-full flex justify-items-start'>
        <button onClick={deleteall} className='bg-red-500 text-white px-4 py-2 rounded-lg '>
            Delete All
        </button>
    </div>
  )
}

export default DeleteAll