import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { addUser } from '../redux/actions'


function Add() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const dispatch = useDispatch()
    
    const handleSubmit=(e)=>{
     e.preventDefault()
     const newUser={
        name,
        email,
        phone
     }
     dispatch(addUser(newUser))
     setName("")
     setEmail("")
     setPhone("")
    }
    return (
    <div className='App'>
     <form action="" onSubmit={handleSubmit}>
      
         <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
         <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
         <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Phone"/>
         <br />
         <button className='buttonstyle'> ADD </button>
     </form>

    </div>
  )
}

export default Add