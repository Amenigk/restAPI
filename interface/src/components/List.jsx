import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import '../App.css';
import { deleteUser, getUsers } from '../redux/actions';
import Update from './Update';


function List({key}) {
   const {users,loading} = useSelector(state=>state)
   const dispatch=useDispatch()
        
  return (
    <div  key={users._id} className='App'  >
        {
        loading? <h3> loading....</h3>
        : users.map( el => 
        <div  key={el._id} className="userbox"  >
            <img src="data:image/jpeg;base64,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"  width={40} height={40} alt="" />
            <h2>  {el.name} </h2>  
            <h3>  {el.email} </h3>
            <button className='buttonstyle' onClick={()=> dispatch(deleteUser(el._id))}> DELETE </button>
            <br />
            <Update user={el}/>
        </div>
        )
        }
    </div>
  )
}

export default List