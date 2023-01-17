import axios from "axios"; 
import { ADD_USER, DELETE_USER, GET_USERS, UPDATED_USER  } from "./actionTypes";

////////////////////////////////////////////////////////////////////////////////////////////////
export const  getUsers = () =>async (dispatch)=>
{
    try {
        const {data}= await axios.get("/viewUsers") //  adress proxy in package json
        console.log(data)
        dispatch({
            type:GET_USERS ,
            payload: data
        })

    } catch (error) {
        alert("get error")
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////

export const  deleteUser = (id) =>async (dispatch)=>
{
    try {
        const res= await axios.delete(`/deleteUser/${id}`) //  adress proxy in package json
        console.log(res)
        dispatch({
            type:DELETE_USER ,
            // payload: res.data
            payload: id
        })

    } catch (error) {
        alert("get error")
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////

export const  addUser = (newUser) =>async (dispatch)=>
{
    try {
        const {data}= await axios.post("/addUser",newUser) //  adress proxy in package json
        console.log(data)
        dispatch({
            type:ADD_USER ,
            // payload: res.data
            payload: data
        })

    } catch (error) {
        alert("get error")
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
export const  editUser = (editedUser) =>async (dispatch)=>
{
    try {
        const {data}= await axios.put(`/updatedUser/${editedUser.x}`,editedUser) //  adress proxy in package json
        console.log(data)
        dispatch({
            type:UPDATED_USER,
            payload: {
                x:editedUser.x,
                data
            }
        })

    } catch (error) {
        alert("get error")
    }
}