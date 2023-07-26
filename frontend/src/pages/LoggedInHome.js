import React from 'react'
import TodoListPublic from './TodoListPublic'
import { TodoContext } from '../Context/TodoContext'

const LoggedInHome = ({name}) => {
  
  return (
    <div className='w-5/6 m-auto text-center'>
      <h1 className='text-center text-3xl mb-4 mt-4'>Welcome, {name}.</h1>
      <TodoListPublic/>
    </div>
  )
}

export default LoggedInHome