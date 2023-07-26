import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'
import { deleteUser, logout } from '../apiCalls/user'
import { getMyTodos } from '../apiCalls/profile'
import TodoItems from '../components/TodoItems'

const Profile = () => {

  const {user, setUser} = useContext(UserContext)
  const [myTodo, setMyTodo] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyTodos()
      console.log(response)
      if(response.status === 200) {
        setMyTodo(response.data.todos)
        console.log(response.data.todos)
      } else {
          alert("here : " + response.response.data.msg)
      }
    }

    fetchData()
  }, [])

  const logoutHandler = async (e) => {
    e.preventDefault()
    const response = await logout()
    if(response.status === 200) {
      alert("User Logged Out")
      setUser({})
      navigate("/user/login")
    }
    else {
      alert(response.response.data.msg)
    }
  }

  const deleteAccountHandler = async (e) => {
    e.preventDefault()
    if(window.confirm("Are you sure you want to delete your account?")) {
      
      const response = await deleteUser()
      if(response.status === 200) {
        alert("User Account deleted!")
        setUser({})
        navigate("/user/login")
      }
      else {
        alert(response.response.data.msg)
      }
    }

  }

  return (
    <div>


    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3xl my-3 font-bold">Profile</h1>

      <div className='mt-3'>
        <h2 className='text-2xl'>Name: {user.name}</h2>
        <h2 className='text-2xl'>Email: {user.email}</h2>
        <h2 className='text-2xl'>Age: {user.age}</h2>
      </div>
      <div className='mt-3'>
        <button onClick={() => {navigate("/user/update")}} className='my-3 bg-yellow-600 text-white w-full py-2 rounded'>
          Update Profile
        </button>

        <button onClick={() => {navigate("/user/updatePassword")}} className='my-3 bg-blue-600 text-white w-full py-2 rounded'>
          Update Password
        </button>

        <button onClick={deleteAccountHandler} className='my-3 bg-red-400 text-white w-full py-2 rounded'>
          Delete Account
        </button>

        <button className='my-3 bg-red-700 text-white w-full py-2 rounded' onClick={logoutHandler}>
          LOGOUT
        </button>
      </div>
    </div>
    <table className='table-auto w-full'>
            <thead>
            <tr>
                <th className='border px-4 py-2'>Title</th>
                <th className='border px-4 py-2'>Description</th>
                <th className='border px-4 py-2'>Completed</th>
                <th className='border px-4 py-2'>View</th>
                <th className='border px-4 py-2'>Update</th>
                <th className='border px-4 py-2'>Delete</th>
            </tr>
            </thead>
            <tbody> 
                {
                    myTodo.length > 0 && myTodo.map((item) => {
                        return <TodoItems key={item._id} item={item} setMyTodo = {setMyTodo} myTodo={myTodo} />
                    })
                }
            </tbody>
        </table>

    </div>
  )
}

export default Profile